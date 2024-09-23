// Phone Number Input
const phoneNumberInput = document.getElementById("phoneNumber");
const defaultCode = "+62";

phoneNumberInput.addEventListener("focus", function () {
    if (!this.value.startsWith(defaultCode)) {
        this.value = defaultCode;
    }
});

phoneNumberInput.addEventListener("keydown", function (e) {
    const cursorPosition = this.selectionStart;
    if (cursorPosition <= defaultCode.length && (e.key === "Backspace" || e.key === "Delete")) {
        e.preventDefault();
    }
});
phoneNumberInput.addEventListener("input", function () {
    const inputAfterCode = this.value.slice(defaultCode.length);
    this.value = defaultCode + inputAfterCode.replace(/\D/g, "");
});
