// BCA
const bcaCopy = document.getElementById("bcaCopy");
const bcaTitle = document.getElementById("bcaTitle");
const bcaNumber = document.getElementById("bcaNumber");
bcaCopy.addEventListener("click", function (event) {
    event.preventDefault();
    const nameBank = bcaTitle.innerText;
    const numberCopy = bcaNumber.innerText;
    // alert(nameBank + " : " + numberCopy);
    navigator.clipboard.writeText(numberCopy);
});
// BNI
const bniCopy = document.getElementById("bniCopy");
const bniTitle = document.getElementById("bniTitle");
const bniNumber = document.getElementById("bniNumber");
bniCopy.addEventListener("click", function (event) {
    event.preventDefault();
    const nameBank = bniTitle.innerText;
    const numberCopy = bniNumber.innerText;
    // alert(nameBank + " : " + numberCopy);
    navigator.clipboard.writeText(numberCopy);
});
// BRI
const briCopy = document.getElementById("briCopy");
const briTitle = document.getElementById("briTitle");
const briNumber = document.getElementById("briNumber");
briCopy.addEventListener("click", function (event) {
    event.preventDefault();
    const nameBank = briTitle.innerText;
    const numberCopy = briNumber.innerText;
    // alert(nameBank + " : " + numberCopy);
    navigator.clipboard.writeText(numberCopy);
});

// SELECT OPTION
const select = document.getElementsByTagName("select");
for (let i = 0; i < select.length; i++) {
    select[i].addEventListener("change", function () {
        if (this.value) {
            localStorage.setItem("option", this.value);
            this.classList.remove("text-[#757C98]");
            this.classList.add("text-[#161616]");
        } else {
            this.classList.remove("text-[#161616]");
            this.classList.add("text-[#757C98]");
        }
    });
}

// BANK ACCOUNT NUMBER
const bankAccountNumberInput = document.getElementById("bankAccountNumber");
bankAccountNumberInput.addEventListener("input", function () {
    // Menghapus semua karakter selain angka
    const validValue = this.value.replace(/[^0-9]/g, "");
    // Jika ada karakter selain angka, kembalikan input ke nilai valid (angka)
    if (this.value !== validValue) {
        this.value = validValue;
    }
});

// UPLOAD IMAGE
const fileInput = document.getElementById("file-upload");
const uploadText = document.getElementById("upload");
fileInput.addEventListener("change", function () {
    if (fileInput.files.length > 0) {
        uploadText.classList.add("hidden");
        fileInput.classList.remove("invisible");
    }
});

// PHONE
document.getElementById("phoneNumber").addEventListener("focus", function (e) {
    const input = e.target;
    const defaultCode = "+62";
    // Saat input fokus, jika kosong atau tidak dimulai dengan +62, tambahkan +62
    if (input.value === "" || !input.value.startsWith(defaultCode)) {
        input.value = defaultCode;
    }
});
// Cegah penghapusan +62 dengan Backspace atau Delete
const backspaceDelete = document.getElementById("phoneNumber").addEventListener("keydown", function (e) {
    const input = e.target;
    const defaultCode = "+62";
    // Cegah backspace atau delete jika kursor berada di dalam awalan +62
    const cursorPosition = input.selectionStart;
    if (cursorPosition <= defaultCode.length && (e.key === "Backspace" || e.key === "Delete")) {
        e.preventDefault(); // Mencegah penghapusan
    }
});
// Mencegah pengetikan selain angka setelah +62
document.getElementById("phoneNumber").addEventListener("input", function (e) {
    const input = e.target;
    const defaultCode = "+62";
    // Ambil bagian yang diinput setelah kode +62
    const inputAfterCode = input.value.slice(defaultCode.length);
    // Jika ada karakter non-numerik, kembalikan ke angka yang valid
    if (/\D/.test(inputAfterCode)) {
        input.value = defaultCode + inputAfterCode.replace(/\D/g, ""); // Hanya angka yang diperbolehkan
    }
});

// TOMBOL SUBMIT ACTIVE NONACTIVE// Ambil elemen-elemen yang diperlukan
const form = document.querySelector("form");
const submitButton = document.getElementById("payNow");
const inputs = document.querySelectorAll("input[required], select[required]");
const bankingRadios = document.querySelectorAll('input[type="radio"][name="banking"]');
// Fungsi untuk memeriksa apakah semua input sudah diisi
function validateForm() {
    console.log(bankingRadios);
    let isValid = true;
    inputs.forEach((input) => {
        if (!input.value) {
            isValid = false;
        }
    });

    // Periksa apakah salah satu radio button dengan nama "banking" sudah tercentang
    let isBankingChecked = false;
    bankingRadios.forEach((radio) => {
        if (radio.checked) {
            isBankingChecked = true;
        }
    });

    // Jika tidak ada radio yang tercentang, anggap form tidak valid
    if (!isBankingChecked) {
        isValid = false;
    }

    if (isValid) {
        submitButton.disabled = false;
        submitButton.style.backgroundColor = "#2C40FF";
    } else {
        submitButton.disabled = true;
        submitButton.style.backgroundColor = "#F1F1F1";
    }
}
// Periksa form saat ada perubahan pada input
inputs.forEach((input) => {
    input.addEventListener("input", validateForm);
});

bankingRadios.forEach((radio) => {
    radio.addEventListener("change", validateForm); // Tambahkan event listener untuk radio button
});

// Cegah form disubmit jika ada input yang belum terisi
form.addEventListener("submit", (e) => {
    if (submitButton.disabled) {
        e.preventDefault();
    }
});
// Jalankan validasi awal
validateForm();
