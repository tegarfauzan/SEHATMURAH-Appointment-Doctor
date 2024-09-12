// tabs
const tabs = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".content");

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        tabs.forEach((t) => {
            t.classList.remove("active-tab", "bg-[#2C40FF17]", "text-[#2C40FF]", "font-bold");
            t.classList.add("border", "border-[#F1F1F1]", "bg-[#FFFFFF]", "font-semibold", "text-[#757C98]");
        });

        contents.forEach((c) => {
            c.classList.add("hidden");
            c.classList.remove("flex");
        });

        tab.classList.add("active-tab", "bg-[#2C40FF17]", "text-[#2C40FF]", "font-bold");
        tab.classList.remove("border", "border-[#F1F1F1]", "bg-[#FFFFFF]", "font-semibold", "text-[#757C98]");

        contents[index].classList.remove("hidden");
        contents[index].classList.add("flex");
    });
});
