// MODAL
const openModalButton = document.getElementById("openModal");
const closeModalButton = document.getElementById("closeModal");
const okButton = document.getElementById("okButton");
const modal = document.getElementById("myModal");
const radioInput = document.getElementById("radioInput");
const selectValue = document.getElementById("selectedValue");
const chooseGrey = document.getElementById("chooseGrey");
const chooseBlack = document.getElementById("chooseBlack");
const change = document.getElementById("change");
const arrow = document.getElementById("arrow");
const form = document.getElementById("form");
const select = document.getElementsByTagName("select");
const radioButtons = document.querySelectorAll('input[type="radio"]');

// Select element
for (let i = 0; i < select.length; i++) {
    select[i].addEventListener("change", function () {
        if (this.value) {
            this.classList.remove("text-[#757C98]");
            this.classList.remove("font-semibold");
            this.classList.add("font-bold");
            this.classList.add("text-[#161616]");
        } else {
            this.classList.remove("text-[#161616]");
            this.classList.remove("font-bold");
            this.classList.add("font-semibold");
            this.classList.add("text-[#757C98]");
        }
    });
}

// Open the modal
openModalButton.addEventListener("click", () => {
    const currentValue = selectedValue.getAttribute("data-value");
    form.classList.add("hidden");
    // Check if there's a value stored in data-value
    if (currentValue) {
        // Find the radio input with the value equal to currentValue
        const radioToCheck = document.querySelector(`input[name="specialist"][value="${currentValue}"]`);

        if (radioToCheck) {
            // Set the radio button as checked
            radioToCheck.checked = true;
        }
    }
    modal.classList.remove("hidden");
});

// Close the modal
closeModalButton.addEventListener("click", () => {
    event.preventDefault();
    form.classList.remove("hidden");

    // Find all radio inputs with name "specialist"
    const radioInputs = document.querySelectorAll('input[name="specialist"]');
    if (selectedValue.innerHTML == "Choose a specialist") {
        // Loop through each radio input and uncheck it
        radioInputs.forEach((radio) => {
            radio.checked = false;
        });
    }

    modal.classList.add("hidden");
});

// OK button logic
okButton.addEventListener("click", () => {
    const selectedRadio = radioInput.querySelector('input[name="specialist"]:checked');
    form.classList.remove("hidden");
    if (selectedRadio) {
        event.preventDefault();
        // Get the value of the selected radio button
        const selectedValue = selectedRadio.value;
        selectValue.setAttribute("data-value", selectedValue);
        selectValue.innerHTML = selectedValue;
        selectValue.classList.add("text-[#161616]");
        chooseGrey.classList.add("hidden");
        modal.classList.add("hidden");
        change.classList.remove("hidden");
        arrow.classList.add("hidden");
    }
});

// Prevent default browser validation behavior
openModalButton.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent the default form submission
});

// Fungsi untuk memeriksa apakah ada radio button yang tercentang
function toggleButtonState() {
    // Cek apakah salah satu radio button sudah tercentang
    const isChecked = Array.from(radioButtons).some((radio) => radio.checked);
    // Aktifkan atau nonaktifkan tombol berdasarkan kondisi checked
    okButton.disabled = !isChecked;
}

// Pantau perubahan pada setiap radio button
radioButtons.forEach((radio) => {
    radio.addEventListener("change", toggleButtonState);
});
