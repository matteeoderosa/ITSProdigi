/* Interruttore tema chiaro/scuro: parte dal tema del dispositivo e ricorda la scelta */
(function () {
    var root = document.documentElement;
    var button = document.querySelector(".theme-toggle");
    if (!button) return;

    var query = window.matchMedia("(prefers-color-scheme: dark)");

    function isDark() {
        var chosen = root.getAttribute("data-theme");
        return chosen ? chosen === "dark" : query.matches;
    }

    function sync() {
        button.setAttribute("aria-pressed", String(isDark()));
    }

    button.addEventListener("click", function () {
        var next = isDark() ? "light" : "dark";
        root.setAttribute("data-theme", next);
        try { localStorage.setItem("theme", next); } catch (e) { /* storage non disponibile */ }
        sync();
    });

    if (query.addEventListener) query.addEventListener("change", sync);
    sync();
})();
