const inputs = document.querySelectorAll('input[required], input[name="appointment time"], input[name="gender"]');
const continueBtn = document.getElementById("continue");

function validateForm() {
    let isValid = true;

    // Loop through all required inputs
    inputs.forEach((input) => {
        if (input.type === "radio") {
            // For radio buttons, check if at least one is selected
            const radios = document.querySelectorAll(`input[name="${input.name}"]`);
            const isChecked = Array.from(radios).some((radio) => radio.checked);
            if (!isChecked) {
                isValid = false;
            }
        } else if (input.value.trim() === "") {
            // Check if input value is empty
            isValid = false;
        }
    });

    // Toggle button color based on form validity
    if (isValid) {
        if (countInput.value === "0" || countInput.value === "Years Old") {
            continueBtn.style.backgroundColor = "#F1F1F1"; // Gray color
            continueBtn.style.pointerEvents = "none";
            // Disable button
        } else {
            continueBtn.style.backgroundColor = "#2C40FF"; // Blue color
            continueBtn.style.pointerEvents = "auto";
        }
    } else {
        continueBtn.classList.remove("#2C40FF");
        continueBtn.style.backgroundColor = "#F1F1F1"; // Gray color
        continueBtn.style.pointerEvents = "none";
    }
}

// Add event listener to each input to trigger validation on change
inputs.forEach((input) => {
    input.addEventListener("input", validateForm);
    input.addEventListener("change", validateForm); // For radio buttons
});

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
        validateForm();
    } else {
        countInput.style.color = "#161616"; // Reset warna teks jika input tidak memenuhi kondisi
        validateForm();
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
    validateForm();
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

// LOGIKA TOMBOL CONTINUE
document.addEventListener("DOMContentLoaded", function () {
    const inputs = document.querySelectorAll('input[required], input[name="appointment time"], input[name="gender"]');
    const continueBtn = document.getElementById("continue");

    function validateForm() {
        let isValid = true;

        // Loop through all required inputs
        inputs.forEach((input) => {
            if (input.type === "radio") {
                // For radio buttons, check if at least one is selected
                const radios = document.querySelectorAll(`input[name="${input.name}"]`);
                const isChecked = Array.from(radios).some((radio) => radio.checked);
                if (!isChecked) {
                    isValid = false;
                }
            } else if (input.value.trim() === "") {
                // Check if input value is empty
                isValid = false;
            }
        });

        // Toggle button color based on form validity
        if (isValid) {
            if (countInput.value === "0" || countInput.value === "Years Old") {
                continueBtn.style.backgroundColor = "#F1F1F1"; // Gray color
                continueBtn.style.pointerEvents = "none"; // Disable button
            } else {
                continueBtn.style.backgroundColor = "#2C40FF"; // Blue color
                continueBtn.style.pointerEvents = "auto"; // Enable button
            }
        } else {
            continueBtn.style.backgroundColor = "#F1F1F1"; // Gray color
            continueBtn.style.pointerEvents = "none"; // Disable button
        }
    }

    // Add event listener to each input to trigger validation on change
    inputs.forEach((input) => {
        input.addEventListener("input", validateForm);
        input.addEventListener("change", validateForm); // For radio buttons
    });

    // Initial validation check when page loads
    validateForm();
});
