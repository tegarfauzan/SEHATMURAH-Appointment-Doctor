const inputs = document.querySelectorAll('input[required], input[name="appointment time"], input[name="gender"]');
const continueBtn = document.getElementById("continue");
const countInput = document.getElementById("count");
const decrementButton = document.querySelector(".decrement");
const incrementButton = document.querySelector(".increment");

// Fungsi untuk validasi form
function validateForm() {
    let isValid = true;

    // Loop melalui semua input yang diperlukan
    inputs.forEach((input) => {
        if (input.type === "radio") {
            // Untuk radio button, cek apakah ada yang dipilih
            const radios = document.querySelectorAll(`input[name="${input.name}"]`);
            const isChecked = Array.from(radios).some((radio) => radio.checked);
            if (!isChecked) {
                isValid = false;
            }
        } else if (input.value.trim() === "") {
            // Cek apakah input kosong
            isValid = false;
        }
    });

    // Ubah warna tombol berdasarkan validitas form
    if (isValid) {
        if (countInput.value === "Years Old") {
            continueBtn.style.backgroundColor = "#F1F1F1"; // Warna abu-abu
            continueBtn.style.pointerEvents = "none"; // Nonaktifkan tombol
        } else {
            continueBtn.style.backgroundColor = "#2C40FF"; // Warna biru
            continueBtn.style.pointerEvents = "auto"; // Aktifkan tombol
        }
    } else {
        continueBtn.style.backgroundColor = "#F1F1F1"; // Warna abu-abu
        continueBtn.style.pointerEvents = "none"; // Nonaktifkan tombol
    }
}

// Fungsi untuk memvalidasi input count
const validateInput = () => {
    let value = countInput.value.trim(); // Hapus spasi
    if (isNaN(value) || parseInt(value) < 0) {
        countInput.value = "Years Old"; // Set nilai menjadi "Years Old" jika tidak valid
    } else if (/^0\d/.test(value)) {
        countInput.value = value.slice(1); // Hapus nol di depan
    }
    countInput.addEventListener("blur", function () {
        if (countInput.value.trim() === "") {
            countInput.value = "Years Old";
            countInput.style.color = "#757C98"; // Ubah warna teks
        }
    });

    colorActiveCount();
};

// Fungsi untuk mengubah warna teks berdasarkan nilai input
const colorActiveCount = () => {
    if (countInput.value === "0" || countInput.value === "Years Old") {
        countInput.style.color = "#757C98"; // Warna abu-abu jika nilai "0" atau "Years Old"
        validateForm();
    } else {
        countInput.style.color = "#161616"; // Reset warna jika input valid
        validateForm();
    }
};

// Event listener untuk tombol decrement
decrementButton.addEventListener("click", (event) => {
    event.preventDefault();
    validateInput();
    let currentValue = parseInt(countInput.value);
    if (currentValue > 1) {
        countInput.value = currentValue - 1;
    } else if (currentValue === 1) {
        countInput.value = "Years Old";
    } else if (currentValue == "Years Old") {
        decrementButton.setAttribute("disabled", true);
    }

    colorActiveCount();
    validateForm();
});

// Event listener untuk tombol increment
incrementButton.addEventListener("click", (event) => {
    event.preventDefault();
    validateInput();
    if (countInput.value === "Years Old") {
        countInput.value = 1;
        countInput.removeAttribute("readonly");
    } else if (countInput.value >= 1) {
        countInput.value = parseInt(countInput.value) + 1;
    }

    colorActiveCount();
});

// Event listener untuk input manual
countInput.addEventListener("input", validateInput);

// LOGIKA TOMBOL CONTINUE
document.addEventListener("DOMContentLoaded", function () {
    function validateForm() {
        let isValid = true;

        // Loop melalui semua input yang diperlukan
        inputs.forEach((input) => {
            if (input.type === "radio") {
                // Untuk radio button, cek apakah ada yang dipilih
                const radios = document.querySelectorAll(`input[name="${input.name}"]`);
                const isChecked = Array.from(radios).some((radio) => radio.checked);
                if (!isChecked) {
                    isValid = false;
                }
            } else if (input.value.trim() === "") {
                // Cek apakah input kosong
                isValid = false;
            }
        });

        // Ubah warna tombol berdasarkan validitas form
        if (isValid) {
            if (countInput.value === "0" || countInput.value === "Years Old") {
                continueBtn.style.backgroundColor = "#F1F1F1"; // Warna abu-abu
                continueBtn.style.pointerEvents = "none"; // Nonaktifkan tombol
            } else {
                continueBtn.style.backgroundColor = "#2C40FF"; // Warna biru
                continueBtn.style.pointerEvents = "auto"; // Aktifkan tombol
            }
        } else {
            continueBtn.style.backgroundColor = "#F1F1F1"; // Warna abu-abu
            continueBtn.style.pointerEvents = "none"; // Nonaktifkan tombol
        }
    }

    // Tambahkan event listener ke setiap input untuk memvalidasi saat input berubah
    inputs.forEach((input) => {
        input.addEventListener("input", validateForm);
        input.addEventListener("change", validateForm); // Untuk radio button
    });

    // Cek validitas form saat halaman pertama kali dimuat
    validateForm();
});
