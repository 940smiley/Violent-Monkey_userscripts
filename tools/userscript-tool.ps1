[CmdletBinding()]
param(
    [Parameter(Mandatory = $true)]
    [ValidateSet('create', 'import')]
    [string]$Command,

    [string]$Name,
    [string]$Source,
    [string]$Destination = "scripts/Experimental-Beta-Sandbox/Prototype-Features",
    [string]$Filename,
    [string]$Namespace = "https://github.com/yourname/userscripts",
    [string]$Version = "0.1.0",
    [string]$Description = "New userscript",
    [string[]]$Match = @('*://*/*'),
    [string[]]$Meta = @(),
    [switch]$DryRun,
    [switch]$VerboseMode,
    [switch]$Force
)

$repoRoot = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
$destDir = Join-Path $repoRoot $Destination

function Parse-Meta {
    param([string[]]$MetaItems)
    $table = @{}
    foreach ($item in $MetaItems) {
        if (-not $item.Contains('=')) { throw "Metadata must be key=value: $item" }
        $parts = $item.Split('=', 2)
        $key = $parts[0].Trim(); $val = $parts[1].Trim()
        if (-not $table.ContainsKey($key)) { $table[$key] = @() }
        $table[$key] += $val
    }
    return $table
}

function New-Slug {
    param([string]$InputName)
    $slug = $InputName.ToLowerInvariant() -replace '[^a-z0-9]+', '-' -replace '(^-|-$)', ''
    if ([string]::IsNullOrWhiteSpace($slug)) { return 'new-userscript' }
    return $slug
}

$metaTable = Parse-Meta -MetaItems $Meta
New-Item -ItemType Directory -Path $destDir -Force | Out-Null

if ($Command -eq 'create') {
    if ([string]::IsNullOrWhiteSpace($Name)) { throw 'Name is required for create command.' }
    if ([string]::IsNullOrWhiteSpace($Filename)) { $Filename = "$(New-Slug $Name).user.js" }
    $output = Join-Path $destDir $Filename

    $metaLines = @()
    foreach ($key in $metaTable.Keys) {
        foreach ($value in $metaTable[$key]) {
            $metaLines += "// @$key $value"
        }
    }

    $matchLines = $Match | ForEach-Object { "// @match       $_" }

    $content = @(
        '// ==UserScript==',
        "// @name        $Name",
        "// @namespace   $Namespace",
        "// @version     $Version",
        "// @description $Description"
    ) + $matchLines + $metaLines + @(
        '// @grant       none',
        '// ==/UserScript==',
        '',
        '(function () {',
        "  'use strict';",
        "  console.log('[userscript] loaded');",
        '})();',
        ''
    ) -join "`n"

    if ($VerboseMode) { Write-Host "Target: $output" }
    if ($DryRun) { Write-Output $content; exit 0 }

    if ((Test-Path $output) -and -not $Force) { throw "File exists: $output (use -Force)" }
    Set-Content -Path $output -Value $content -Encoding UTF8
    Write-Host "Created $($output.Replace($repoRoot + [IO.Path]::DirectorySeparatorChar, ''))"
    exit 0
}

if ($Command -eq 'import') {
    if ([string]::IsNullOrWhiteSpace($Source)) { throw 'Source is required for import command.' }
    $sourcePath = (Resolve-Path $Source).Path
    if ([string]::IsNullOrWhiteSpace($Filename)) { $Filename = [IO.Path]::GetFileName($sourcePath) }
    if (-not $Filename.EndsWith('.user.js')) { $Filename += '.user.js' }

    $output = Join-Path $destDir $Filename
    $content = Get-Content -Path $sourcePath -Raw -Encoding UTF8

    if ($metaTable.Count -gt 0) {
        $metaLines = @()
        foreach ($key in $metaTable.Keys) {
            foreach ($value in $metaTable[$key]) {
                $metaLines += "// @$key $value"
            }
        }
        $insert = ($metaLines -join "`n") + "`n// ==/UserScript=="
        $content = $content -replace '// ==/UserScript==', [Regex]::Escape($insert)
        $content = $content -replace '\\ ', ' '
    }

    if ($VerboseMode) {
        Write-Host "Source: $sourcePath"
        Write-Host "Destination: $output"
    }

    if ($DryRun) { Write-Output $content; exit 0 }
    if ((Test-Path $output) -and -not $Force) { throw "File exists: $output (use -Force)" }

    Set-Content -Path $output -Value $content -Encoding UTF8
    Write-Host "Imported $($output.Replace($repoRoot + [IO.Path]::DirectorySeparatorChar, ''))"
    exit 0
}
