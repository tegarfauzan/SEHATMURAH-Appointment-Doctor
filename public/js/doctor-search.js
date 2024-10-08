// Element selection
const openButton = document.getElementById("openModal");
const closeButton = document.getElementById("closeModal");
const okButton = document.getElementById("okButton");
const modal = document.getElementById("myModal");
const radioInput = document.getElementById("ContainerRadioInputs");
const selectValue = document.getElementById("selectedValue");
const chooseBlack = document.getElementById("chooseBlack");
const change = document.getElementById("change");
const arrow = document.getElementById("arrow");
const form = document.getElementById("form");
const selectElements = document.querySelectorAll("select");
const inputSpeciality = document.getElementById("inputSpeciality");

// Helper untuk mengelola transisi dan visibilitas
const toggleVisibility = (elements, action) => {
    elements.forEach((el) => {
        el.classList.add("transition-opacity", "duration-300", "ease-in-out");
        el.classList[action]("opacity-0");
    });
};

// Mengelola perubahan pada <select> elemen
selectElements.forEach((select) => {
    select.addEventListener("change", function () {
        const hasValue = this.value !== "";
        this.classList.toggle("font-bold", hasValue);
        this.classList.toggle("font-semibold", !hasValue);
        this.classList.toggle("text-[#161616]", hasValue);
        this.classList.toggle("text-[#757C98]", !hasValue);
    });
});

// Buka modal
openButton.addEventListener("click", (event) => {
    event.preventDefault();
    form.classList.add("hidden");
    const selectedValue = inputSpeciality.getAttribute("value");
    const selectedRadio = document.querySelector(`input[name="specialist"][value="${selectedValue}"]`);
    if (selectedRadio) selectedRadio.checked = true;
    modal.classList.remove("hidden");
});

// Kelola tombol OK hanya aktif ketika ada radio button yang dipilih
radioInput.addEventListener("change", () => {
    okButton.disabled = !radioInput.querySelector('input[name="specialist"]:checked');
});

// Klik OK pada modal
okButton.addEventListener("click", (event) => {
    event.preventDefault();
    const selectedRadio = radioInput.querySelector('input[name="specialist"]:checked');
    if (!selectedRadio) return;
    const selectedValue = selectedRadio.value;
    inputSpeciality.setAttribute("value", selectedValue);
    form.classList.remove("hidden");
    modal.classList.add("hidden");
    selectValue.classList.add("!text-[#161616]");
    // Menyembunyikan elemen sebelum memperbarui konten
    toggleVisibility([selectValue, chooseBlack, change], "add");
    // Memperbarui konten dengan transisi
    setTimeout(() => {
        selectValue.textContent = selectedValue;
        toggleVisibility([selectValue, chooseBlack, change], "remove");
        arrow.classList.add("hidden");
    });
});

// Tutup modal dan kembalikan pilihan sebelumnya
closeButton.addEventListener("click", (event) => {
    event.preventDefault();
    form.classList.remove("hidden");
    const previousValue = inputSpeciality.getAttribute("value");
    radioInput.querySelectorAll('input[name="specialist"]').forEach((radio) => {
        radio.checked = radio.value === previousValue;
    });
    modal.classList.add("hidden");
});
