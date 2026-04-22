(function (global) {
  function parseMetadata(code) {
    const match = code.match(/\/\/\s*==UserScript==([\s\S]*?)\/\/\s*==\/UserScript==/);
    const meta = { name: 'Unnamed Script', description: '', match: [], include: [], grant: [] };
    if (!match) return meta;
    const lines = match[1].split(/\r?\n/);
    for (const raw of lines) {
      const line = raw.trim();
      const m = line.match(/^\/\/\s*@([\w:-]+)\s+(.+)$/);
      if (!m) continue;
      const [, key, value] = m;
      if (key === 'name') meta.name = value;
      else if (key === 'description') meta.description = value;
      else if (key === 'match') meta.match.push(value);
      else if (key === 'include') meta.include.push(value);
      else if (key === 'grant') meta.grant.push(value);
    }
    return meta;
  }

  function createRuntime(options) {
    const storage = options.storage || localStorage;
    const logger = options.logger || console;
    const menu = [];

    function gmXmlHttpRequest(details) {
      const method = (details.method || 'GET').toUpperCase();
      fetch(details.url, { method, headers: details.headers, body: details.data })
        .then(async (res) => {
          const text = await res.text();
          const payload = {
            status: res.status,
            statusText: res.statusText,
            responseText: text,
            finalUrl: res.url,
            responseHeaders: [...res.headers.entries()].map(([k, v]) => `${k}: ${v}`).join('\n')
          };
          details.onload && details.onload(payload);
        })
        .catch((error) => details.onerror && details.onerror(error));
    }

    const api = {
      GM_xmlhttpRequest: gmXmlHttpRequest,
      GM_getValue: (key, fallback) => {
        const value = storage.getItem(`gm:${key}`);
        if (value === null || value === undefined) return fallback;
        try { return JSON.parse(value); } catch { return value; }
      },
      GM_setValue: (key, value) => storage.setItem(`gm:${key}`, JSON.stringify(value)),
      GM_addStyle: (css) => {
        const style = document.createElement('style');
        style.textContent = css;
        document.head.appendChild(style);
      },
      GM_registerMenuCommand: (caption, callback) => {
        const cmd = { id: `menu_${Date.now()}_${Math.random()}`, caption, callback };
        menu.push(cmd);
        options.onMenuCommand && options.onMenuCommand(menu.slice());
        return cmd.id;
      }
    };

    async function runUserScript(code, contextUrl) {
      const meta = parseMetadata(code);
      const url = contextUrl || location.href;
      const patterns = [...meta.match, ...meta.include];
      const isMatch = patterns.length === 0 || patterns.some((p) => wildcardToRegExp(p).test(url));
      if (!isMatch) {
        logger.warn(`[userscript-runtime] ${meta.name} did not match ${url}`);
        return { meta, skipped: true };
      }

      const wrapped = `(async function(){\n${code}\n})()`;
      const fn = new Function('GM_xmlhttpRequest','GM_getValue','GM_setValue','GM_addStyle','GM_registerMenuCommand','console','window','document','MutationObserver','setTimeout','setInterval','clearTimeout','clearInterval', `return ${wrapped};`);
      await fn(api.GM_xmlhttpRequest, api.GM_getValue, api.GM_setValue, api.GM_addStyle, api.GM_registerMenuCommand, console, window, document, MutationObserver, setTimeout, setInterval, clearTimeout, clearInterval);
      return { meta, skipped: false };
    }

    return { parseMetadata, runUserScript, menu };
  }

  function wildcardToRegExp(pattern) {
    const escaped = pattern
      .replace(/[.+?^${}()|[\]\\]/g, '\\$&')
      .replace(/\*/g, '.*');
    return new RegExp(`^${escaped}$`);
  }

  global.UserscriptRuntime = { createRuntime, parseMetadata };
})(typeof window !== 'undefined' ? window : globalThis);
