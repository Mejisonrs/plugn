const input = document.querySelector('input[name="q"]');
const list = document.querySelector("#search-results");
let cachedResults = null;
let activeIndex = -1;

input.addEventListener("input", function () {
    const currentWord = input.value.toLowerCase();
    if (!currentWord.match(/[a-z]/i)) {
        list.innerHTML = "";
        return;
    }

    if (cachedResults) {
        filterResults(currentWord);
    } else {
        fetch("/feeds/posts/summary?alt=json&max-results=100")
        .then((response) => response.json())
        .then((data) => {
            const entries = data.feed.entry;
            if (!entries) {
                list.innerHTML = `<li>Resultados "${currentWord}".</li>`;
                return;
            }
            cachedResults = entries;
            filterResults(currentWord);
        });
    }
});

input.addEventListener("keydown", function (event) {
    if (cachedResults) {
        const listItems = list.querySelectorAll("li");
        if (event.key === "ArrowDown") {
            event.preventDefault();
            activeIndex = Math.min(activeIndex + 1, listItems.length - 1);
        } else if (event.key === "ArrowUp") {
            event.preventDefault();
            activeIndex = Math.max(activeIndex - 1, -1);
        }
        listItems.forEach((item, index) => {
            if (index === activeIndex) {
                item.classList.add("active");
                input.value = item.getAttribute("value");
            } else {
                item.classList.remove("active");
            }
        });
    }
});

function filterResults(word) {
    const filteredResults = cachedResults.filter(function (entry) {
        return entry.title.$t.toLowerCase().startsWith(word);
    });
    if (filteredResults.length === 0) {
        list.innerHTML = `<li>Resultados "${word}".</li>`;
        return;
    }
    let resultsHTML = "";
    filteredResults.slice(0, 5).forEach((result) => {
        const title = result.title.$t;
        const url = "search?q="; 
        const img = result.media$thumbnail.url;
        const name = title.replace(new RegExp(word, "gi"), `<b>${word}</b>`);
        resultsHTML += `
        <li value="${title}">
            <a href="${url}${title}"><img src="${img}"><span>${name}</span></a>
        </li>`;
    });
    list.innerHTML = resultsHTML;
    activeIndex = -1;
}
