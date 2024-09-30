// Copy Bank Account Numbers
const copyBankNumber = (copyButtonId, titleId, numberId) => {
    const copyButton = document.getElementById(copyButtonId);
    const title = document.getElementById(titleId);
    const number = document.getElementById(numberId);

    copyButton.addEventListener("click", (event) => {
        event.preventDefault();
        navigator.clipboard.writeText(number.innerText);
        // Optional: Show an alert
        // alert(`${title.innerText}: ${number.innerText}`);
    });
};

copyBankNumber("bcaCopy", "bcaTitle", "bcaNumber");
copyBankNumber("bniCopy", "bniTitle", "bniNumber");
copyBankNumber("briCopy", "briTitle", "briNumber");

// Select Option
const selects = document.getElementsByTagName("select");
for (let select of selects) {
    select.addEventListener("change", function () {
        const isSelected = this.value;
        this.classList.toggle("text-[#757C98]", !isSelected);
        this.classList.toggle("text-[#161616]", isSelected);
    });
}

// Bank Account Name
const bankAccountName = document.getElementById("inputBankAccountName");
bankAccountName.addEventListener("input", function () {
    bankAccountName.setAttribute("value", this.value);
});

// Bank Account Number Input
const bankAccountNumberInput = document.getElementById("inputBankAccountNumber");
bankAccountNumberInput.addEventListener("input", function () {
    this.value = this.value.replace(/[^0-9]/g, "");
    bankAccountNumberInput.setAttribute("value", this.value);
});

// Upload Image
const fileInput = document.getElementById("file-upload");
const uploadText = document.getElementById("upload");
fileInput.addEventListener("change", function () {
    if (fileInput.files.length > 0) {
        uploadText.classList.add("hidden");
        fileInput.classList.remove("invisible");
        fileInput.setAttribute("value", fileInput.files[0].name);
    } else {
        resetUpload();
    }
});
function resetUpload() {
    uploadText.classList.remove("hidden");
    fileInput.classList.add("invisible");
    fileInput.setAttribute("value", "");
}
fileInput.addEventListener("input", function () {
    if (!fileInput.files.length) resetUpload();
});

// Fullname Input
const fullName = document.getElementById("fullName");
fullName.addEventListener("input", function () {
    this.setAttribute("value", this.value);
});
// Email Input
const email = document.getElementById("email");
email.addEventListener("input", function () {
    this.setAttribute("value", this.value);
});
// Phone Number Input
const phoneNumberInput = document.getElementById("phoneNumber");
const defaultCode = "+62";
phoneNumberInput.addEventListener("focus", function () {
    if (!this.value.startsWith(defaultCode)) this.setAttribute("value", defaultCode);
});
phoneNumberInput.addEventListener("keydown", function (e) {
    const cursorPosition = this.selectionStart;
    if (cursorPosition <= defaultCode.length && (e.key === "Backspace" || e.key === "Delete")) e.preventDefault();
});
phoneNumberInput.addEventListener("input", function () {
    const inputAfterCode = this.value.slice(defaultCode.length);
    this.value = defaultCode + inputAfterCode.replace(/\D/g, "");
    this.setAttribute("value", this.value);
});

// Submit Button Activation
const form = document.querySelector("form");
const submitButton = document.getElementById("payNow");
const inputs = document.querySelectorAll("input[required], select[required]");
const bankingRadios = document.querySelectorAll('input[type="radio"][name="banking"]');

function validateForm() {
    let isValid = Array.from(inputs).every((input) => input.value);
    let isBankingChecked = Array.from(bankingRadios).some((radio) => radio.checked);

    submitButton.disabled = !(isValid && isBankingChecked);
    submitButton.style.backgroundColor = submitButton.disabled ? "#F1F1F1" : "#2C40FF";
}

inputs.forEach((input) => input.addEventListener("input", validateForm));
bankingRadios.forEach((radio) => radio.addEventListener("change", validateForm));

form.addEventListener("submit", (e) => {
    if (submitButton.disabled) e.preventDefault();
});

// Initial validation
validateForm();
