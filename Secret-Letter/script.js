const envelope = document.getElementById("envelope");
const envelopeBody = document.getElementById("envelope-body");
const passwordForm = document.getElementById("password-form");
const letter = document.getElementById("letter");
const passwordInput = document.getElementById("password");
const submitButton = document.getElementById("submit");

envelope.addEventListener("click", () => {
    passwordForm.style.display = "flex";
    envelope.style.display = "none";
});

submitButton.addEventListener("click", () => {
    const password = passwordInput.value;

    // Replace 'yourpassword' with your desired password
    if (password === "dj-and-meg-forever") {
        passwordForm.style.display = "none";
        letter.style.display = "block";
    } else {
        alert("Incorrect password. Please try again.");
    }
});
