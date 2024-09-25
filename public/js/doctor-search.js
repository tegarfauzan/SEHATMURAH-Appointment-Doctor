// MODAL
const openButton = document.getElementById("openModal");
const closeButton = document.getElementById("closeModal");
const okButton = document.getElementById("okButton");
const modal = document.getElementById("myModal");
const radioInput = document.getElementById("ContainerRadioInputs");
const selectValue = document.getElementById("selectedValue");
const chooseGrey = document.getElementById("chooseGrey");
const chooseBlack = document.getElementById("chooseBlack");
const change = document.getElementById("change");
const arrow = document.getElementById("arrow");
const form = document.getElementById("form");
const select = document.getElementsByTagName("select");
const radioButtons = document.querySelectorAll('input[type="radio"]');
const inputSpeciality = document.getElementById("inputSpeciality");

// Select options
for (let i = 0; i < select.length; i++) {
    select[i].addEventListener("change", function () {
        if (this.value) {
            localStorage.setItem("option", this.value);
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

// OPEN modal
openButton.addEventListener("click", (event) => {
    event.preventDefault();
    const storedValue = localStorage.getItem("value");
    inputSpeciality.setAttribute("value", storedValue);

    form.classList.add("hidden");
    if (storedValue) {
        const radioToCheck = document.querySelector(`input[name="specialist"][value="${storedValue}"]`);
        if (radioToCheck) {
            radioToCheck.checked = true;
        }
    }
    modal.classList.remove("hidden");
});

// RADIO BUTTONS active nonactive
function toggleButtonState() {
    const isChecked = Array.from(radioButtons).some((radio) => radio.checked);
    okButton.disabled = !isChecked;
}
radioButtons.forEach((radio) => {
    radio.addEventListener("change", toggleButtonState);
});

// OK modal
okButton.addEventListener("click", (event) => {
    const selectedRadio = radioInput.querySelector('input[name="specialist"]:checked');
    form.classList.remove("hidden");
    if (selectedRadio) {
        event.preventDefault();
        const selectedValue = selectedRadio.value;
        inputSpeciality.setAttribute("value", selectedValue);

        localStorage.setItem("value", selectedValue);
        selectValue.innerHTML = selectedValue;
        selectValue.classList.add("text-[#161616]");
        chooseGrey.classList.add("hidden");
        modal.classList.add("hidden");
        change.classList.remove("hidden");
        arrow.classList.add("hidden");
    }
});

// CANCEL modal
closeButton.addEventListener("click", (event) => {
    event.preventDefault();
    form.classList.remove("hidden");

    const radioInputs = document.querySelectorAll('input[name="specialist"]');
    const oldValue = inputSpeciality.getAttribute("value");
    radioInputs.forEach((radio) => {
        if (radio.value === oldValue) {
            radio.checked = true;
        } else {
            radio.checked = false;
        }
    });
    modal.classList.add("hidden");
});

// simpanan sementara localstorage
document.addEventListener("DOMContentLoaded", function () {
    const option = localStorage.getItem("option");
    const value = localStorage.getItem("value");
    const selectElement = document.querySelector("#MySelect");

    if (option && selectElement) {
        selectElement.value = option;
        selectElement.classList.remove("text-[#757C98]");
        selectElement.classList.remove("font-semibold");
        selectElement.classList.add("font-bold");
        selectElement.classList.add("text-[#161616]");
    }
    if (value) {
        selectValue.innerHTML = value;
        selectValue.classList.add("text-[#161616]");
        chooseGrey.classList.add("hidden");
        modal.classList.add("hidden");
        change.classList.remove("hidden");
        arrow.classList.add("hidden");
    }
});
