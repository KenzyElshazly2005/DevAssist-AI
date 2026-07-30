// ==========================================================
// Elements
// ==========================================================

const languageBtn = document.getElementById("languageBtn");
const toolBtn = document.getElementById("toolBtn");

const languageSection = document.getElementById("languageSection");
const toolSection = document.getElementById("toolSection");

const inputSection = document.getElementById("inputSection");
const resultSection = document.getElementById("resultSection");

const languageSelect = document.getElementById("languageSelect");
const toolSelect = document.getElementById("toolSelect");

const analyzeBtn = document.getElementById("analyzeBtn");
const resetBtn = document.getElementById("resetBtn");

const themeBtn = document.getElementById("themeBtn");



const errorSearchContainer =
    document.getElementById("errorSearchContainer");

const errorSearch =
    document.getElementById("errorSearch");

const suggestions =
    document.getElementById("suggestions");



const toolSearchContainer =
    document.getElementById("toolSearchContainer");

const toolSearch =
    document.getElementById("toolSearch");

const toolSuggestions =
    document.getElementById("toolSuggestions");


// ==========================================================
// Auto Complete Data
// ==========================================================

let autoCompleteData = {};

fetch("/static/autocomplete.json")
    .then(response => response.json())
    .then(data => {

        autoCompleteData = data;

    });



// ==========================================================
// Programming Languages
// ==========================================================

languageBtn.addEventListener("click", () => {

    languageSection.classList.remove("hidden");

    toolSection.classList.add("hidden");

    inputSection.classList.add("hidden");

    resultSection.classList.add("hidden");

    toolSearchContainer.classList.add("hidden");
    errorSearchContainer.classList.add("hidden");

    analyzeBtn.style.display = "none";

    errorSearch.value = "";
    toolSearch.value = "";

    suggestions.style.display = "none";
    toolSuggestions.style.display = "none";

});


// ==========================================================
// Programming Tools
// ==========================================================

toolBtn.addEventListener("click", () => {

    toolSection.classList.remove("hidden");

    languageSection.classList.add("hidden");

    inputSection.classList.add("hidden");

    toolSearchContainer.classList.add("hidden");
    errorSearchContainer.classList.add("hidden");

    resultSection.classList.add("hidden");

    analyzeBtn.style.display = "none";

    errorSearch.value = "";
    toolSearch.value = "";

    suggestions.style.display = "none";
    toolSuggestions.style.display = "none";

});


// ==========================================================
// Language Selected
// ==========================================================

languageSelect.addEventListener("change", () => {

    if (languageSelect.value !== "") {

        inputSection.classList.add("hidden");

        errorSearchContainer.classList.add("hidden");

        analyzeBtn.style.display = "none";

        errorSearch.value = "";
    suggestions.style.display = "none";

    }

});


document
.querySelectorAll('input[name="mode"]')
.forEach(radio => {

    radio.addEventListener("change", () => {

        if (radio.value === "error") {

            errorSearchContainer.classList.remove("hidden");
            inputSection.classList.add("hidden");
            analyzeBtn.style.display = "none";


        }

        else {

            errorSearchContainer.classList.add("hidden");
            inputSection.classList.remove("hidden");
            analyzeBtn.style.display = "block";


        }

    });

});


// ==========================================================
// Tool Selected
// ==========================================================

toolSelect.addEventListener("change", () => {

    if (toolSelect.value !== "") {

        inputSection.classList.add("hidden");

        toolSearch.value = "";
        toolSuggestions.style.display = "none";

        toolSearchContainer.classList.remove("hidden");

        analyzeBtn.style.display = "none";

    } else {

        inputSection.classList.add("hidden");

        toolSearch.value = "";
        toolSuggestions.style.display = "none";

        toolSearchContainer.classList.add("hidden");
        errorSearchContainer.classList.add("hidden");

        analyzeBtn.style.display = "none";

    }

});

// ==========================================================
// Analyze Button
// ==========================================================

analyzeBtn.addEventListener("click", async () => {

    const text = document
        .getElementById("userInput")
        .value
        .trim();

    if (text === "") {

        alert("Please enter your input.");

        return;

    }

    let language;
    let input_type;

    if (!languageSection.classList.contains("hidden")) {

        language = languageSelect.value;

        const selected =
            document.querySelector('input[name="mode"]:checked');

        if (!selected) {

            alert("Choose Code or Error Message.");

            return;

        }

        input_type = selected.value;

    }

    else {

        language = toolSelect.value;

        input_type = "error";

    }

    resultSection.classList.remove("hidden");

    document.getElementById("resultTitle").innerText = "Loading...";

    const response = await fetch("/analyze", {

        method: "POST",

        headers: {

            "Content-Type": "application/json"

        },

        body: JSON.stringify({

            language,

            input_type,

            content: text

        })

    });

    const data = await response.json();

    if (!data.success) {

        document.getElementById("resultTitle").innerText = "Error";
        document.getElementById("description").innerHTML = data.message;
        return;

    }

    showResult(data.result);

    });

//    console.log(data);
//    console.log(result);
//    console.log(result.analysis);



// ==========================================================
// Reset Button
// ==========================================================

resetBtn.addEventListener("click", () => {

    document.getElementById("userInput").value = "";

    languageSelect.selectedIndex = 0;
    toolSelect.selectedIndex = 0;

    document
        .querySelectorAll('input[name="mode"]')
        .forEach(r => r.checked = false);

    languageSection.classList.add("hidden");
    toolSection.classList.add("hidden");
    inputSection.classList.add("hidden");
    resultSection.classList.add("hidden");

    errorSearch.value = "";
    toolSearch.value = "";

    errorSearchContainer.classList.add("hidden");
    toolSearchContainer.classList.add("hidden");

    analyzeBtn.style.display = "none";

    suggestions.style.display = "none";
    toolSuggestions.style.display = "none";

});

// ==========================================================
// Theme Button
// ==========================================================

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark");
    themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';

}

else {

    themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';

}

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
        localStorage.setItem("theme", "dark");

    }

    else {

        themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
        localStorage.setItem("theme", "light");

    }

});


function setupAutoComplete(input, suggestionBox, categoryGetter) {

    input.addEventListener("input", () => {

        const value = input.value.toLowerCase().trim();

        suggestionBox.innerHTML = "";

        if (value === "") {
            suggestionBox.style.display = "none";
            return;
        }

        const currentErrors =
            autoCompleteData[categoryGetter()] || [];

        const filtered =
            currentErrors.filter(error =>
                error.toLowerCase().includes(value)
            );

        if (filtered.length === 0) {

            suggestionBox.innerHTML = `
                <div>❌ No matching error found</div>
                <div id="requestError">📩 Request New Error</div>
            `;


            const requestBtn =
                 document.getElementById("requestError");

            if (requestBtn) {

                requestBtn.onclick = () => {

                    window.open(
                        "https://forms.gle/v1FQYXB6T9mav9VBA",
                        "_blank"
                    );

                };

            }

            suggestionBox.style.display = "block";
            return;
        }

        filtered.forEach(error => {

            const item = document.createElement("div");

            item.textContent = error;

            item.onclick = () => {

                input.value = error;
                suggestionBox.style.display = "none";

                analyzeError(error);

            };
            suggestionBox.appendChild(item);

        });

        suggestionBox.style.display = "block";

    });

}

setupAutoComplete(
    errorSearch,
    suggestions,
    () => languageSelect.value
);

setupAutoComplete(
    toolSearch,
    toolSuggestions,
    () => toolSelect.value
);

document.addEventListener("click", (e) => {

    if (!e.target.closest(".search-box")) {

        suggestions.style.display = "none";
        toolSuggestions.style.display = "none";

    }

});


function showResult(result) {

    const details =
        document.querySelectorAll("#resultSection details");

    const analysisBox =
        document.getElementById("analysisBox");

    if (result.analysis) {

        analysisBox.classList.remove("hidden");

        document.getElementById("analysisError").textContent =
            result.analysis.error_type;

        document.getElementById("analysisLine").textContent =
            result.analysis.line;

        document.getElementById("analysisMessage").textContent =
            result.analysis.message;

    }

    else {

        analysisBox.classList.add("hidden");

    }

    document.getElementById("resultTitle").innerText =
        result.title;

    if (result.title === "No Errors Detected") {

        details.forEach(detail => {

            detail.style.display = "none";

        });

    }

    else {

        details.forEach(detail => {

            detail.style.display = "block";

        });

    }

    document.getElementById("description").innerHTML =
        marked.parse(
            result.sections?.["What is this error?"] ??
            result.message ??
            ""
        );

    document.getElementById("causes").innerHTML =
        marked.parse(
            result.sections?.["Why does it happen?"] ?? ""
        );

    document.getElementById("solution").innerHTML =
        marked.parse(
            result.sections?.["Step-by-Step Solution"] ?? ""
        );

    document.getElementById("example").innerHTML =
        marked.parse(
            result.sections?.["Example Code"] ?? ""
        );

    document.getElementById("prevention").innerHTML =
        marked.parse(
            result.sections?.["Prevention Tips"] ?? ""
        );

    document.getElementById("related").innerHTML =
        marked.parse(
            result.sections?.["Related Errors"] ?? ""
        );

    const documentation =
        result.sections?.["Official Documentation"] ?? "";

    const urlMatch =
        documentation.match(/https?:\/\/[^\s]+/);

    if (urlMatch) {

        document.getElementById("documentation").innerHTML = `
            <a href="${urlMatch[0]}" target="_blank">
                Open Official Documentation
            </a>
        `;

    }

    else {

        document.getElementById("documentation").innerHTML =
            documentation;

    }

}


async function analyzeError(errorText) {

    resultSection.classList.remove("hidden");

    document.getElementById("resultTitle").innerText = "Loading...";

    const response = await fetch("/analyze", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({

            language: languageSelect.value || toolSelect.value,

            input_type: "error",

            content: errorText

        })

    });

    const data = await response.json();

    if (!data.success) {

        document.getElementById("resultTitle").innerText = "Error";

        document.getElementById("description").innerHTML = data.message;

        return;

    }

    showResult(data.result);

}


