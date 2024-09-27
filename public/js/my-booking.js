// Phone Number Input
const phoneNumberInput = document.getElementById("phone");
const booking = document.getElementById("booking");
const defaultCode = "+62";

booking.addEventListener("input", function () {
    booking.setAttribute("value", this.value);
});

phoneNumberInput.addEventListener("focus", function () {
    if (!this.value.startsWith(defaultCode)) {
        this.value = defaultCode;
        phone.setAttribute("value", this.value);
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
    phone.setAttribute("value", this.value);
});
