// MODAL
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

// Helper untuk mengubah kelas transisi
const toggleTransition = (elements, action) => {
    elements.forEach((el) => {
        el.classList[action]("transition-opacity", "duration-300", "ease-in-out");
        el.classList[action]("opacity-0");
    });
};

// Select options
selectElements.forEach((select) => {
    select.addEventListener("change", function () {
        const hasValue = this.value !== "";
        this.classList.toggle("font-bold", hasValue);
        this.classList.toggle("font-semibold", !hasValue);
        this.classList.toggle("text-[#161616]", hasValue);
        this.classList.toggle("text-[#757C98]", !hasValue);
    });
});

// OPEN modal
openButton.addEventListener("click", (event) => {
    event.preventDefault();
    form.classList.add("hidden");

    const value = inputSpeciality.getAttribute("value");
    if (value) {
        const radioToCheck = document.querySelector(`input[name="specialist"][value="${value}"]`);
        if (radioToCheck) radioToCheck.checked = true;
    }

    modal.classList.remove("hidden");
});

// RADIO BUTTONS active non-active
radioInput.addEventListener("change", () => {
    okButton.disabled = !radioInput.querySelector('input[name="specialist"]:checked');
});

// OK modal
okButton.addEventListener("click", (event) => {
    event.preventDefault();
    const selectedRadio = radioInput.querySelector('input[name="specialist"]:checked');

    if (selectedRadio) {
        const selectedValue = selectedRadio.value;
        inputSpeciality.setAttribute("value", selectedValue);
        form.classList.remove("hidden");
        modal.classList.add("hidden");

        toggleTransition([selectValue, chooseBlack, change], "add");
        selectValue.classList.add("!text-[#161616]");

        setTimeout(() => {
            selectValue.textContent = selectedValue;
            toggleTransition([selectValue, chooseBlack, change], "remove");
        }, 300); // Waktu untuk menghilangkan opacity sesuai transisi
        arrow.classList.add("hidden");
    }
});

// CANCEL modal
closeButton.addEventListener("click", (event) => {
    event.preventDefault();
    form.classList.remove("hidden");

    const oldValue = inputSpeciality.getAttribute("value");
    radioInput.querySelectorAll('input[name="specialist"]').forEach((radio) => {
        radio.checked = radio.value === oldValue;
    });
    modal.classList.add("hidden");
});
