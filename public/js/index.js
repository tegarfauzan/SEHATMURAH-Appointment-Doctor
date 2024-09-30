// SWIPER
var categoriesSwiper = new Swiper(".categoriesSwiper", {
    slidesPerView: "auto", // Adjust number of slides based on card width
    freeMode: true,
    spaceBetween: 8,
    slidesOffsetAfter: 16,
    slidesOffsetBefore: 16,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
var cardsSwiper = new Swiper(".cardsSwiper", {
    slidesPerView: "auto", // Adjust number of slides based on card width
    freeMode: true,
    spaceBetween: 16,
    slidesOffsetAfter: 16,
    slidesOffsetBefore: 16,
});

// TABS
const tabs = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".content");
const updateTabStyles = (tab, isActive) => {
    tab.classList.toggle("active-tab", isActive);
    tab.classList.toggle("bg-[#2C40FF17]", isActive);
    tab.classList.toggle("text-[#2C40FF]", isActive);
    tab.classList.toggle("font-bold", isActive);
    tab.classList.toggle("border", !isActive);
    tab.classList.toggle("border-[#F1F1F1]", !isActive);
    tab.classList.toggle("bg-[#FFFFFF]", !isActive);
    tab.classList.toggle("font-semibold", !isActive);
    tab.classList.toggle("text-[#757C98]", !isActive);
};
tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        const targetTab = tab.getAttribute("data-target-tab");

        tabs.forEach((t) => updateTabStyles(t, false)); // Nonaktifkan semua tab
        contents.forEach((c) => c.classList.add("hidden")); // Sembunyikan semua konten

        updateTabStyles(tab, true); // Aktifkan tab yang dipilih
        document.querySelector(targetTab).classList.remove("hidden"); // Tampilkan konten yang sesuai
    });
});
