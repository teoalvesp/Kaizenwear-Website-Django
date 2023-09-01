let currentContent = 1;

function updateProgressBar() {
    const progressBar = document.querySelector(".progress-bar");
    const progressSteps = document.querySelectorAll(".progress-step");

    const percentage = (currentContent - 1) * 50; // 1 => 0%, 2 => 50%, 3 => 100%
    progressBar.style.width = percentage + "%";

    for (let i = 0; i < progressSteps.length; i++) {
        if (i < currentContent) {
            progressSteps[i].classList.add("progress-done");
        } else {
            progressSteps[i].classList.remove("progress-done");
        }
    }
}

function nextContent(contentNumber) {
    hideAllContents();

    currentContent = contentNumber;
    if (currentContent > 3) {
        currentContent = 1;
    }

    showContent(currentContent);
    updateProgressBar();
}

function loadContent(contentNumber) {
    hideAllContents();
    showContent(contentNumber);
    currentContent = contentNumber;
    updateProgressBar();
}

function hideAllContents() {
    const contents = document.getElementsByClassName("content");
    for (let i = 0; i < contents.length; i++) {
        contents[i].style.display = "none";
    }

}

function showContent(contentNumber) {
    const targetContent = document.getElementById(`content${contentNumber}`);
    targetContent.style.display = "block";

}
