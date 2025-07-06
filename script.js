const faqChild = document.querySelectorAll(".faq__child");
let toggle = false;
faqChild.forEach((faq) => {
  faq.addEventListener("click", (ev) => {
    const img = faq.querySelector("i img");
    const p = faq.querySelector("p");
    if (toggle === true) {
      img.src = "./assets/images/icon-minus.svg";
    } else if (toggle === false) {
      img.src = "./assets/images/icon-plus.svg";
    }
    p.classList.toggle("active");
    toggle = !toggle;
  });
});
