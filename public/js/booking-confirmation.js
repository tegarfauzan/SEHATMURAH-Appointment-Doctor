const inputs = document.querySelectorAll('input[required], input[name="appointment time"], input[name="gender"]');
const continueBtn = document.getElementById("continue");
const countInput = document.getElementById("count");
const decrementButton = document.querySelector(".decrement");
const incrementButton = document.querySelector(".increment");
const patient = document.getElementById("Patient");

// Fungsi untuk mengatur value pada input
const setInputValue = (input, value) => {
    input.value = value;
    input.setAttribute("value", value);
};
// Fungsi validasi form
const validateForm = () => {
    const isValid = Array.from(inputs).every((input) => (input.type === "radio" ? [...document.querySelectorAll(`input[name="${input.name}"]`)].some((radio) => radio.checked) : input.value.trim() !== ""));
    const isContinueBtnEnabled = isValid && countInput.value !== "Years Old" && countInput.value !== "0";
    continueBtn.style.cssText = `background-color: ${isContinueBtnEnabled ? "#2C40FF" : "#F1F1F1"}; pointer-events: ${isContinueBtnEnabled ? "auto" : "none"};`;
};
// Fungsi validasi input count
const validateInput = () => {
    const value = countInput.value.trim();
    const newValue = isNaN(value) || parseInt(value) < 0 ? "Years Old" : value.replace(/^0+/, "");
    setInputValue(countInput, newValue);
    handleReadonly(newValue);
    colorActiveCount();
};
// Fungsi untuk mengelola readonly berdasarkan nilai
const handleReadonly = (value) => (value === "Years Old" || value < 1 ? countInput.setAttribute("readonly", true) : countInput.removeAttribute("readonly"));
// Fungsi untuk mengubah warna teks berdasarkan nilai input
const colorActiveCount = () => {
    countInput.style.color = countInput.value === "0" || countInput.value === "Years Old" ? "#757C98" : "#161616";
    validateForm();
};
// Event listener untuk tombol decrement
decrementButton.addEventListener("click", (event) => {
    event.preventDefault();
    validateInput();
    const currentValue = parseInt(countInput.value);
    const newValue = currentValue > 1 ? currentValue - 1 : "Years Old";
    setInputValue(countInput, newValue);
    decrementButton.disabled = newValue === "Years Old";
    handleReadonly(newValue);
    colorActiveCount();
});
// Event listener untuk tombol increment
incrementButton.addEventListener("click", (event) => {
    event.preventDefault();
    validateInput();
    const currentValue = countInput.value === "Years Old" ? 1 : parseInt(countInput.value) + 1;
    setInputValue(countInput, currentValue);
    handleReadonly(currentValue);
    decrementButton.removeAttribute("disabled");
    colorActiveCount();
});
// Event listener untuk input manual
countInput.addEventListener("input", validateInput);
// Event listener untuk mengatur ulang nilai saat input kehilangan fokus
countInput.addEventListener("blur", () => {
    if (countInput.value.trim() === "" || isNaN(countInput.value)) {
        setInputValue(countInput, "Years Old");
        countInput.style.color = "#757C98"; // Ubah warna teks
    }
    validateForm();
});
// Event listener untuk input Patient
patient.addEventListener("input", () => setInputValue(patient, patient.value));
// Validasi form saat DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
    inputs.forEach((input) => {
        input.addEventListener("input", validateForm);
        input.addEventListener("change", validateForm); // Untuk radio button
    });
    validateForm(); // Cek validitas form saat pertama kali dimuat
});
