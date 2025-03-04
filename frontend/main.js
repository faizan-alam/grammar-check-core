document.getElementById("analyzeButton").addEventListener("click", async function () {
    const inputText = document.getElementById("inputText").value;
    const correctedDiv = document.getElementById("correctedText");
    const incorrectDiv = document.getElementById("incorrectText");
    const correctedCard = document.getElementById("correctedCard");
    const incorrectCard = document.getElementById("incorrectCard");
    const resultsContainer = document.getElementById("results");

    if (!inputText.trim()) {
        resultDiv.innerHTML = "Please enter some text.";
        return;
    }

    correctedDiv.innerHTML = "Checking grammar...";
    incorrectDiv.innerHTML = "Checking grammar...";
    resultsContainer.style.display = "block";

    try {
        const response = await fetch("http://localhost:5000/api/check-grammar", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text: inputText })
        });

        
        const data = await response.json();
        console.log(data);
        if (data.correctedText) {

            correctedDiv.innerHTML = highlightChanges(inputText, data.correctedText, "corrected");
            incorrectDiv.innerHTML = highlightChanges(data.correctedText, inputText, "incorrect");

            correctedCard.style.display = "block";
            incorrectCard.style.display = "block";
        } else {
            correctedDiv.innerHTML = "Error: Unable to process the request.";
            incorrectDiv.innerHTML = "Error: Unable to process the request.";
        }
    } catch (error) {
        console.error("Error:", error);
        correctedDiv.innerHTML = "An error occurred. Please try again.";
        incorrectDiv.innerHTML = "An error occurred. Please try again.";
    }
});

function highlightChanges(original, corrected, type) {
    const dmp = new diff_match_patch();
    const diffs = dmp.diff_main(original, corrected);
    dmp.diff_cleanupSemantic(diffs);

    let resultHTML = "";
    diffs.forEach(([operation, text]) => {
        if (operation === 1) { 
            resultHTML += `<span class="highlighted ${type}">${text}</span>`;
        } else if (operation === 0) {  
            resultHTML += text;
        }   
    });

    return resultHTML;
}
