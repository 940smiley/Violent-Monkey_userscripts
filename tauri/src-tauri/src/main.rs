#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use serde::Serialize;
use std::{fs, path::PathBuf};

#[derive(Serialize)]
struct ScriptItem { name: String, code: String }

#[tauri::command]
fn discover_scripts(app: tauri::AppHandle) -> Result<Vec<ScriptItem>, String> {
    let scripts_dir: PathBuf = app.path().app_local_data_dir().map_err(|e| e.to_string())?.join("scripts");
    fs::create_dir_all(&scripts_dir).map_err(|e| e.to_string())?;
    let mut items = vec![];
    for entry in fs::read_dir(scripts_dir).map_err(|e| e.to_string())? {
        let entry = entry.map_err(|e| e.to_string())?;
        let path = entry.path();
        if path.extension().and_then(|x| x.to_str()) == Some("js") {
            let code = fs::read_to_string(&path).map_err(|e| e.to_string())?;
            items.push(ScriptItem {
                name: path.file_name().unwrap_or_default().to_string_lossy().to_string(),
                code,
            });
        }
    }
    Ok(items)
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![discover_scripts])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
