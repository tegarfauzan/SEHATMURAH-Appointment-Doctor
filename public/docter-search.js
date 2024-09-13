// MODAL
const openModalButton = document.getElementById("openModal");
const closeModalButton = document.getElementById("closeModal");
const okButton = document.getElementById("okButton");
const modal = document.getElementById("myModal");
const radioForm = document.getElementById("radioForm");
const selectValue = document.getElementById("selectedValue");
const chooseGrey = document.getElementById("chooseGrey");
const chooseBlack = document.getElementById("chooseBlack");
const change = document.getElementById("change");
const arrow = document.getElementById("arrow");
const radioButtons = document.querySelectorAll('input[type="radio"]');

// Open the modal
openModalButton.addEventListener("click", () => {
    modal.classList.remove("hidden");
});

// Close the modal
closeModalButton.addEventListener("click", () => {
    modal.classList.add("hidden");
});

// OK button logic
okButton.addEventListener("click", () => {
    const selectedRadio = radioForm.querySelector('input[name="specialist"]:checked');
    if (selectedRadio) {
        event.preventDefault();
        // Get the value of the selected radio button
        const selectedValue = selectedRadio.value;
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
  const isChecked = Array.from(radioButtons).some(radio => radio.checked);
  // Aktifkan atau nonaktifkan tombol berdasarkan kondisi checked
  okButton.disabled = !isChecked;
}

// Pantau perubahan pada setiap radio button
radioButtons.forEach(radio => {
  radio.addEventListener('change', toggleButtonState);
});
