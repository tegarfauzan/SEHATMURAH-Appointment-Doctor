// BCA
const bcaCopy = document.getElementById("bcaCopy");
const bcaTitle = document.getElementById("bcaTitle");
const bcaNumber = document.getElementById("bcaNumber");
bcaCopy.addEventListener("click", function (event) {
    event.preventDefault();
    const nameBank = bcaTitle.innerText;
    const numberCopy = bcaNumber.innerText;
    // alert(nameBank + " : " + numberCopy);
    navigator.clipboard.writeText(numberCopy);
});

// BNI
const bniCopy = document.getElementById("bniCopy");
const bniTitle = document.getElementById("bniTitle");
const bniNumber = document.getElementById("bniNumber");
bniCopy.addEventListener("click", function (event) {
    event.preventDefault();
    const nameBank = bniTitle.innerText;
    const numberCopy = bniNumber.innerText;
    // alert(nameBank + " : " + numberCopy);
    navigator.clipboard.writeText(numberCopy);
});

// BRI
const briCopy = document.getElementById("briCopy");
const briTitle = document.getElementById("briTitle");
const briNumber = document.getElementById("briNumber");
briCopy.addEventListener("click", function (event) {
    event.preventDefault();
    const nameBank = briTitle.innerText;
    const numberCopy = briNumber.innerText;
    // alert(nameBank + " : " + numberCopy);
    navigator.clipboard.writeText(numberCopy);
});

// Select options
const select = document.getElementsByTagName("select");
for (let i = 0; i < select.length; i++) {
    select[i].addEventListener("change", function () {
        if (this.value) {
            localStorage.setItem("option", this.value);
            this.classList.remove("text-[#757C98]");
            this.classList.add("text-[#161616]");
        } else {
            this.classList.remove("text-[#161616]");
            this.classList.add("text-[#757C98]");
        }
    });
}

// upload image
const fileInput = document.getElementById("file-upload");
const uploadText = document.getElementById("upload");

fileInput.addEventListener("change", function () {
    if (fileInput.files.length > 0) {
        uploadText.classList.add("hidden"); 
        fileInput.classList.remove("invisible"); 
    }
});
