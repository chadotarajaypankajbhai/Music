const faqs  = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click",() => {
        faq.classList.toggle("active");
    })
})

let about = document.getElementById("abouts");
let services = document.getElementById("servicess");
let usecases = document.getElementById("usecasess");
let pricing = document.getElementById("pricings");
let contact = document.getElementById("contacts")