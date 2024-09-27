// MODAL
const openButton = document.getElementById("openModal");
const closeButton = document.getElementById("closeModal");
const okButton = document.getElementById("okButton");
const modal = document.getElementById("myModal");
const modalContainer = document.getElementById("modalContainer");
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
    const value = inputSpeciality.getAttribute("value");

    form.classList.add("hidden");
    if (value) {
        const radioToCheck = document.querySelector(`input[name="specialist"][value="${value}"]`);
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

        selectValue.classList.add("opacity-0");
        chooseBlack.classList.add("opacity-0");
        change.classList.add("opacity-0");
        setTimeout(() => {
            selectValue.innerHTML = selectedValue;
            selectValue.classList.remove("opacity-0");
            chooseBlack.classList.remove("opacity-0");
            change.classList.remove("opacity-0");
            selectValue.classList.add("transition-opacity", "duration-300", "ease-in-out");
            chooseBlack.classList.add("transition-opacity", "duration-300", "ease-in-out");
            change.classList.add("transition-opacity", "ease-in-out");
        });
        selectValue.classList.add("text-[#161616]");
        selectValue.classList.add("transition-opacity", "ease-in-out");
        change.classList.add("transition-opacity", "ease-in-out");

        change.classList.remove("hidden");
        modal.classList.add("hidden");
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
