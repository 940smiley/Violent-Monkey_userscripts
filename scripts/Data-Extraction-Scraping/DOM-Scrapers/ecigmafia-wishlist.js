// ==UserScript==
// @name         EcigMafia Wishlist PowerTools ++
// @namespace    josh.ecigmafia.wishlist
// @version      3.0
// @description  Multi-select products → send to any wishlist; manage wishlists; export; pagination; drag & drop
// @match        https://www.ecigmafia.com/*
// @grant        GM_xmlhttpRequest
// @connect      ecigmafia.com
// ==/UserScript==

(function() {
    'use strict';

    let WISHLISTS = [];
    const LS_KEY_ORDER = 'vm_wishlist_order';

    /************************************
     * 1. Fetch wishlist names + IDs
     ************************************/
    function loadWishlists() {
        GM_xmlhttpRequest({
            method: "GET",
            url: "https://www.ecigmafia.com/wishlist.php?action=viewwishlists",
            onload: function(res) {
                const html = document.createElement("div");
                html.innerHTML = res.responseText;

                const rows = html.querySelectorAll(".wishlists-table tbody tr");

                WISHLISTS = [...rows].map(row => {
                    const link = row.querySelector('a[href*="wishlistid"]');
                    const url = new URL(link.href, location.origin);
                    const id = url.searchParams.get("wishlistid");
                    const name = link.textContent.trim();
                    return { id, name };
                });

                applySavedOrder();
                buildControlPanel();
            }
        });
    }

    /************************************
     * 2. Inject checkboxes on products
     ************************************/
    function injectCheckboxes() {
        const items = document.querySelectorAll('.productItem, .product-item, li.product, div.product');

        items.forEach(item => {
            if (item.querySelector('.vm-wishlist-checkbox')) return;

            const box = document.createElement('input');
            box.type = 'checkbox';
            box.className = 'vm-wishlist-checkbox';
            box.style.position = 'absolute';
            box.style.top = '8px';
            box.style.left = '8px';
            box.style.zIndex = '9999';
            box.style.transform = 'scale(1.3)';

            item.style.position = 'relative';
            item.appendChild(box);
        });
    }

    /************************************
     * 3. Build floating control panel
     ************************************/
    function buildControlPanel() {
        const panel = document.createElement('div');
        panel.id = 'vm-wishlist-panel';
        panel.style.position = 'fixed';
        panel.style.bottom = '20px';
        panel.style.right = '20px';
        panel.style.background = '#111';
        panel.style.color = '#fff';
        panel.style.padding = '12px';
        panel.style.borderRadius = '8px';
        panel.style.zIndex = '999999';
        panel.style.fontSize = '13px';
        panel.style.width = '260px';
        panel.style.maxHeight = '70vh';
        panel.style.overflowY = 'auto';
        panel.style.boxShadow = '0 0 10px rgba(0,0,0,0.4)';

        let html = `
            <b>Wishlist Tools</b><br><br>
            <button id="vm-select-all" style="width:100%;margin-bottom:6px;">Select All (this page)</button>
            <button id="vm-clear-all" style="width:100%;margin-bottom:10px;">Clear All (this page)</button>
            <div style="font-size:11px;color:#ccc;margin-bottom:6px;">Drag wishlist buttons to reorder.</div>
            <div id="vm-wl-container">
        `;

        WISHLISTS.forEach(w => {
            html += `
                <button class="vm-wl-btn" draggable="true" data-id="${w.id}"
                    style="margin-bottom:6px;width:100%;cursor:move;">
                    Send → ${w.name}
                </button>`;
        });

        html += `
            </div>
            <hr style="margin:10px 0;border-color:#444;">
            <button id="vm-view-wishlists" style="width:100%;">View Wishlists</button><br>
            <button id="vm-new-wishlist" style="margin-top:6px;width:100%;">New Wishlist</button>
            <hr style="margin:10px 0;border-color:#444;">
            <button id="vm-export-selected" style="width:100%;margin-bottom:6px;">Export Selected (this page)</button>
            <button id="vm-export-all-pages" style="width:100%;">Export All Pages (JSON)</button>
        `;

        panel.innerHTML = html;
        document.body.appendChild(panel);

        // Bind events
        document.getElementById("vm-select-all").onclick = selectAllOnPage;
        document.getElementById("vm-clear-all").onclick = clearAllOnPage;

        document.querySelectorAll(".vm-wl-btn").forEach(btn => {
            btn.onclick = (e) => {
                // ignore click if it's a drag
                if (e.detail === 0) return;
                processSelection(btn.dataset.id);
            };
        });

        document.getElementById("vm-view-wishlists").onclick = () => {
            window.location.href = "/wishlist.php?action=viewwishlists";
        };

        document.getElementById("vm-new-wishlist").onclick = () => {
            window.location.href = "/wishlist.php?action=addwishlist";
        };

        document.getElementById("vm-export-selected").onclick = exportSelectedThisPage;
        document.getElementById("vm-export-all-pages").onclick = exportAllPages;

        setupDragAndDrop();
    }

    /************************************
     * 4. Select/Clear all on page
     ************************************/
    function selectAllOnPage() {
        document.querySelectorAll('.vm-wishlist-checkbox').forEach(cb => cb.checked = true);
    }

    function clearAllOnPage() {
        document.querySelectorAll('.vm-wishlist-checkbox').forEach(cb => cb.checked = false);
    }

    /************************************
     * 5. Add selected products to wishlist
     ************************************/
    function processSelection(wishlistId) {
        const selected = [...document.querySelectorAll('.vm-wishlist-checkbox:checked')];

        if (selected.length === 0) {
            alert("No products selected.");
            return;
        }

        selected.forEach(itemCheckbox => {
            const product = itemCheckbox.closest('.productItem, .product-item, li.product, div.product');
            if (!product) return;

            const wishlistBtn = product.querySelector('a[title="Add to Wish List"]');
            if (!wishlistBtn) return;

            wishlistBtn.click();

            setTimeout(() => {
                const dropdownId = wishlistBtn.getAttribute('aria-controls');
                const dropdown = document.getElementById(dropdownId);
                if (!dropdown) return;

                const option = [...dropdown.querySelectorAll('a')]
                    .find(el => el.href.includes("wishlistid=" + wishlistId));

                if (option) option.click();
            }, 250);
        });
    }

    /************************************
     * 6. Export helpers
     ************************************/
    function getProductsFromDocument(doc) {
        const items = doc.querySelectorAll('.productItem, .product-item, li.product, div.product');
        const data = [];
        items.forEach(item => {
            const titleEl = item.querySelector('a, .card-title, .product-title');
            const linkEl = item.querySelector('a[href]');
            const priceEl = item.querySelector('.price, .product-price');
            data.push({
                title: titleEl ? titleEl.textContent.trim() : '',
                url: linkEl ? new URL(linkEl.href, location.origin).href : '',
                price: priceEl ? priceEl.textContent.trim() : ''
            });
        });
        return data;
    }

    function exportSelectedThisPage() {
        const selected = [...document.querySelectorAll('.vm-wishlist-checkbox:checked')];
        if (selected.length === 0) {
            alert("No products selected.");
            return;
        }

        const data = [];
        selected.forEach(cb => {
            const product = cb.closest('.productItem, .product-item, li.product, div.product');
            if (!product) return;
            const titleEl = product.querySelector('a, .card-title, .product-title');
            const linkEl = product.querySelector('a[href]');
            const priceEl = product.querySelector('.price, .product-price');
            data.push({
                title: titleEl ? titleEl.textContent.trim() : '',
                url: linkEl ? new URL(linkEl.href, location.origin).href : '',
                price: priceEl ? priceEl.textContent.trim() : ''
            });
        });

        downloadJSON(data, 'ecigmafia_selected_page.json');
    }

    function exportAllPages() {
        const baseUrl = new URL(location.href);
        let allData = [];

        function fetchPage(urlStr, cb) {
            GM_xmlhttpRequest({
                method: "GET",
                url: urlStr,
                onload: function(res) {
                    const html = document.createElement("div");
                    html.innerHTML = res.responseText;
                    cb(html);
                }
            });
        }

        function processPage(doc, pageUrl) {
            const data = getProductsFromDocument(doc);
            allData = allData.concat(data);

            const nextLink = doc.querySelector('a[rel="next"], .pagination-item--next a, a[aria-label="Next"]');
            if (nextLink) {
                const nextUrl = new URL(nextLink.href, pageUrl).href;
                fetchPage(nextUrl, (nextDoc) => processPage(nextDoc, nextUrl));
            } else {
                downloadJSON(allData, 'ecigmafia_all_pages.json');
            }
        }

        fetchPage(baseUrl.href, (doc) => processPage(doc, baseUrl.href));
    }

    function downloadJSON(obj, filename) {
        const blob = new Blob([JSON.stringify(obj, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
    }

    /************************************
     * 7. Drag & drop wishlist order
     ************************************/
    function setupDragAndDrop() {
        const container = document.getElementById('vm-wl-container');
        if (!container) return;

        let dragSrcEl = null;

        container.addEventListener('dragstart', (e) => {
            const target = e.target.closest('.vm-wl-btn');
            if (!target) return;
            dragSrcEl = target;
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text/plain', target.dataset.id);
            target.style.opacity = '0.4';
        });

        container.addEventListener('dragend', (e) => {
            const target = e.target.closest('.vm-wl-btn');
            if (target) target.style.opacity = '1';
            saveOrder();
        });

        container.addEventListener('dragover', (e) => {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
        });

        container.addEventListener('drop', (e) => {
            e.preventDefault();
            const target = e.target.closest('.vm-wl-btn');
            if (!target || !dragSrcEl || target === dragSrcEl) return;
            const rect = target.getBoundingClientRect();
            const before = (e.clientY - rect.top) < (rect.height / 2);
            if (before) {
                container.insertBefore(dragSrcEl, target);
            } else {
                container.insertBefore(dragSrcEl, target.nextSibling);
            }
        });
    }

    function saveOrder() {
        const ids = [...document.querySelectorAll('#vm-wl-container .vm-wl-btn')].map(b => b.dataset.id);
        localStorage.setItem(LS_KEY_ORDER, JSON.stringify(ids));
    }

    function applySavedOrder() {
        const raw = localStorage.getItem(LS_KEY_ORDER);
        if (!raw) return;
        try {
            const order = JSON.parse(raw);
            if (!Array.isArray(order)) return;
            const map = new Map(WISHLISTS.map(w => [w.id, w]));
            const ordered = [];
            order.forEach(id => {
                if (map.has(id)) {
                    ordered.push(map.get(id));
                    map.delete(id);
                }
            });
            // append any new ones
            map.forEach(v => ordered.push(v));
            WISHLISTS = ordered;
        } catch (e) {
            // ignore
        }
    }

    /************************************
     * 8. Initialize
     ************************************/
    function init() {
        injectCheckboxes();
        loadWishlists();
    }

    window.addEventListener('load', () => {
        setTimeout(init, 800);
    });

})();
