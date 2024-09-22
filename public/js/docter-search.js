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
    const currentValue = selectValue.getAttribute("data-value");
    form.classList.add("hidden");
    if (currentValue) {
        const radioToCheck = document.querySelector(`input[name="specialist"][value="${currentValue}"]`);
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
        selectValue.setAttribute("data-value", selectedValue);
        localStorage.setItem("data-value", selectedValue);
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
    if (selectValue.innerHTML == "Choose a specialist") {
        radioInputs.forEach((radio) => {
            radio.checked = false;
        });
    }
    modal.classList.add("hidden");
});

// simpanan sementara localstorage
document.addEventListener("DOMContentLoaded", function () {
    const option = localStorage.getItem("option");
    const dataValue = localStorage.getItem("data-value");
    const selectElement = document.querySelector("#MySelect");

    if (option && selectElement) {
        selectElement.value = option;
        selectElement.classList.remove("text-[#757C98]");
        selectElement.classList.remove("font-semibold");
        selectElement.classList.add("font-bold");
        selectElement.classList.add("text-[#161616]");
    }
    if (dataValue) {
        selectValue.innerHTML = dataValue;
        selectValue.classList.add("text-[#161616]");
        chooseGrey.classList.add("hidden");
        modal.classList.add("hidden");
        change.classList.remove("hidden");
        arrow.classList.add("hidden");
    }
});
