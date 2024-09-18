const countInput = document.getElementById("count");
const decrementButton = document.querySelector(".decrement");
const incrementButton = document.querySelector(".increment");

// Fungsi untuk memastikan nilai input adalah angka dan tidak kurang dari 0
const validateInput = () => {
    let value = countInput.value.trim(); // Menghapus spasi di depan dan belakang
    if (countInput.value === "" || isNaN(value) || parseInt(value) < 0) {
        countInput.value = 0; // Set nilai ke 0 jika tidak valid
    } else if (/^0\d/.test(value)) {
        countInput.value = value.slice(1);
    }

    colorActiveCount();
};

const colorActiveCount = () => {
    // Ubah warna teks berdasarkan nilai input
    if (countInput.value === "0" || countInput.value === "Years Old") {
        countInput.style.color = "#757C98"; // Atur warna teks jika input adalah "0" atau "Years Old"
    } else {
        countInput.style.color = "#161616"; // Reset warna teks jika input tidak memenuhi kondisi
    }
};

// Event listener untuk tombol decrement
decrementButton.addEventListener("click", (event) => {
    event.preventDefault();
    validateInput();
    let currentValue = parseInt(countInput.value);
    if (currentValue > 0) {
        countInput.value = currentValue - 1;
    }

    colorActiveCount();
});

// Event listener untuk tombol increment
incrementButton.addEventListener("click", (event) => {
    event.preventDefault();
    validateInput();
    countInput.value = parseInt(countInput.value) + 1;

    colorActiveCount();
});

// Event listener untuk input manual
countInput.addEventListener("input", validateInput);
