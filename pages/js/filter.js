/* Filtro per la lista degli esercizi (senza JavaScript la lista resta completa) */
(function () {
    var input = document.getElementById("filtro");
    if (!input) return;

    var items = Array.prototype.slice.call(document.querySelectorAll(".exercise"));
    var groups = Array.prototype.slice.call(document.querySelectorAll(".exercise-group"));
    var status = document.getElementById("filtro-esito");

    function normalize(text) {
        return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    function apply() {
        var query = normalize(input.value.trim());
        var shown = 0;

        items.forEach(function (item) {
            var haystack = normalize(item.getAttribute("data-search") || item.textContent);
            var match = !query || haystack.indexOf(query) !== -1;
            item.hidden = !match;
            if (match) shown++;
        });

        groups.forEach(function (group) {
            group.hidden = !group.querySelector(".exercise:not([hidden])");
        });

        if (!query) status.textContent = "";
        else if (shown === 0) status.textContent = "Nessun esercizio trovato.";
        else status.textContent = shown + (shown === 1 ? " esercizio trovato." : " esercizi trovati.");
    }

    input.addEventListener("input", apply);
})();
