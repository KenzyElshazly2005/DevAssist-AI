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


const userInput = document.getElementById("userInput");

const inputTitle = document.getElementById("inputTitle");

const loader = document.getElementById("loader");

const successMessage = document.getElementById("successMessage");

let currentAnalysis = null;

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
// Placeholders
// ==========================================================

function updateInputPlaceholder() {

    const selectedMode =
        document.querySelector('input[name="mode"]:checked');


    // Programming Languages
    if (selectedMode) {

        if (selectedMode.value === "code") {

            inputTitle.innerText = "Your Code";

            userInput.placeholder =
                "Paste your Python code here...";

        }

        else {

            inputTitle.innerText =
                "Describe Your Problem";

            userInput.placeholder =
                "Describe your error or paste the error message here...";

        }

        return;

    }


    // Programming Tools
    if (!toolSection.classList.contains("hidden")) {

        inputTitle.innerText =
            "Describe Your Problem";

        userInput.placeholder =
            "Describe your Git / HTTP problem here...";

    }

}


function clearResult(){

    resultSection.classList.add("hidden");

    document.getElementById("resultTitle").innerText = "Result";

    document.getElementById("description").innerHTML = "";
    document.getElementById("causes").innerHTML = "";
    document.getElementById("solution").innerHTML = "";
    document.getElementById("example").innerHTML = "";
    document.getElementById("prevention").innerHTML = "";
    document.getElementById("related").innerHTML = "";
    document.getElementById("documentation").innerHTML = "";

    successMessage.classList.add("hidden");

    loader.classList.add("hidden");

    document.getElementById("analysisBox")
        .classList.add("hidden");

    document.getElementById("analysisError").textContent = "";

    document.getElementById("analysisLine").textContent = "";

    document.getElementById("analysisMessage").textContent = "";

    currentAnalysis = null;

}

// ==========================================================
// Auto Complete Data
// ==========================================================

let autoCompleteData = {};

let autoCompleteLoaded = false;

fetch("/static/autocomplete.json")
    .then(response => response.json())
    .then(data => {

        autoCompleteData = data;

        autoCompleteLoaded = true;

    });



// ==========================================================
// Programming Languages
// ==========================================================

languageBtn.addEventListener("click", () => {

    // Show Language Section
    languageSection.classList.remove("hidden");

    // Hide Tool Section
    toolSection.classList.add("hidden");


    // Reset Input Area
    inputSection.classList.add("hidden");

    // delete Results
    clearResult();

    // Hide Searches
    errorSearchContainer.classList.add("hidden");
    toolSearchContainer.classList.add("hidden");


    // Reset Buttons
    analyzeBtn.style.display = "none";


    // Clear Inputs
    errorSearch.value = "";
    toolSearch.value = "";
    userInput.value = "";


    // Hide Suggestions
    suggestions.style.display = "none";
    toolSuggestions.style.display = "none";


    // Reset Mode Selection
    document
        .querySelectorAll('input[name="mode"]')
        .forEach(radio => {

            radio.checked = false;


        });

    updateInputPlaceholder();


});


// ==========================================================
// Programming Tools
// ==========================================================

toolBtn.addEventListener("click", () => {


    // Show Tool Section
    toolSection.classList.remove("hidden");


    // Hide Language Section
    languageSection.classList.add("hidden");


    // Reset Input Area
    inputSection.classList.add("hidden");


    // delete Results
    clearResult();


    // Hide Searches
    errorSearchContainer.classList.add("hidden");
    toolSearchContainer.classList.add("hidden");


    // Reset Button
    analyzeBtn.style.display = "none";


    // Clear Inputs
    errorSearch.value = "";
    toolSearch.value = "";
    userInput.value = "";


    // Hide Suggestions
    suggestions.style.display = "none";
    toolSuggestions.style.display = "none";


    // Reset Language Mode
    document
        .querySelectorAll('input[name="mode"]')
        .forEach(radio => {

            radio.checked = false;


        });

    updateInputPlaceholder();
});


// ==========================================================
// Language Selected
// ==========================================================

languageSelect.addEventListener("change", () => {


    if(languageSelect.value !== ""){

        clearResult();


        // Keep only Analyze Mode visible
        // User still has to choose:
        // Error Message OR Code


        // Hide old inputs
        inputSection.classList.add("hidden");

        errorSearchContainer.classList.add("hidden");


        // Hide Analyze Button
        analyzeBtn.style.display = "none";


        // Clear old search
        errorSearch.value = "";


        // Hide suggestions
        suggestions.style.display = "none";


    }


});


document
.querySelectorAll('input[name="mode"]')
.forEach(radio => {

    radio.addEventListener("change", () => {

        clearResult();


        if (radio.value === "error") {


            // Show error search
            errorSearchContainer.classList.remove("hidden");


            // Show textarea too
            inputSection.classList.remove("hidden");


            analyzeBtn.style.display = "block";


        }


        else {


            // Hide error search
            errorSearchContainer.classList.add("hidden");


            // Show textarea for code
            inputSection.classList.remove("hidden");


            analyzeBtn.style.display = "block";


        }


        updateInputPlaceholder();


    });

});


// ==========================================================
// Tool Selected
// ==========================================================

toolSelect.addEventListener("change", () => {


    if (toolSelect.value !== "") {

        clearResult();

        toolSearch.value = "";

        toolSuggestions.style.display = "none";


        toolSearchContainer.classList.remove("hidden");


        inputSection.classList.remove("hidden");


        analyzeBtn.style.display = "block";


        updateInputPlaceholder();


    }


    else {

        clearResult();

        inputSection.classList.add("hidden");

        toolSearch.value = "";

        toolSuggestions.style.display = "none";


        toolSearchContainer.classList.add("hidden");

        errorSearchContainer.classList.add("hidden");


        analyzeBtn.style.display = "none";

        updateInputPlaceholder();


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

    clearResult();

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

    loader.classList.remove("hidden");

    successMessage.classList.add("hidden");

    resultSection.classList.remove("hidden");

    document.getElementById("resultTitle").innerText = "Loading...";

    analyzeBtn.disabled = true;
    analyzeBtn.innerText = "Analyzing...";

    try {

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

        loader.classList.add("hidden");

        analyzeBtn.disabled = false;

        analyzeBtn.innerText = "Analyze";

        if (!data.success) {

            successMessage.classList.add("hidden");

            document.getElementById("resultTitle").innerText = "Error";

            document.getElementById("description").innerHTML =
                data.message;

            return;

        }

        successMessage.classList.remove("hidden");

        showResult(data.result);

    }

    catch (error) {

        loader.classList.add("hidden");

        analyzeBtn.disabled = false;

        analyzeBtn.innerText = "Analyze";

        successMessage.classList.add("hidden");

        resultSection.classList.remove("hidden");

        document.getElementById("resultTitle").innerText = "Connection Error";

        document.getElementById("description").innerHTML =
            "Unable to connect to the server. Please try again.";

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

    errorSearch.value = "";
    toolSearch.value = "";

    errorSearchContainer.classList.add("hidden");
    toolSearchContainer.classList.add("hidden");

    analyzeBtn.style.display = "none";

    suggestions.style.display = "none";
    toolSuggestions.style.display = "none";

    clearResult();

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

        if (!autoCompleteLoaded) {
            return;
        }

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

    clearResult();

    resultSection.classList.remove("hidden");

    loader.classList.remove("hidden");

    successMessage.classList.add("hidden");

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

    loader.classList.add("hidden");

    if (!data.success) {

        document.getElementById("resultTitle").innerText = "Error";

        document.getElementById("description").innerHTML = data.message;

        return;

    }

    successMessage.classList.remove("hidden");

    showResult(data.result);

}
