/*~~~~~~~~~~~~~~~ TOGGLE BUTTON ~~~~~~~~~~~~~~~*/
const navMenu = document.getElementById("nav-menu");
const navLink = document.querySelectorAll("#nav-link");
const hamburger = document.getElementById("hamburger");

    hamburger.addEventListener("click", () =>{
    navMenu.classList.toggle("left-[0]")
    hamburger.classList.toggle("ri-close-large-line")
})

navLink.forEach(link => {
    link.addEventListener("click",()=>{
        navMenu.classList.toggle("left-[0]")
    hamburger.classList.toggle("ri-close-large-line text-[#d0c7c4]")
    })
});
/*~~~~~~~~~~~~~~~ SHOW SCROLL UP ~~~~~~~~~~~~~~~*/
window.addEventListener("scroll",() =>{
    const scrollUpBtn = document.getElementById("scroll-up");

    if(this.scrollY >= 250){
        scrollUpBtn.classList.remove("-bottom-1/2");
        scrollUpBtn.classList.add("bottom-4");
    }else{
        scrollUpBtn.classList.add("-bottom-1/2");
        scrollUpBtn.classList.remove("bottom-4");
    }
});

/*~~~~~~~~~~~~~~~ CHANGE BACKGROUND HEADER ~~~~~~~~~~~~~~~*/
window.addEventListener("scroll",() =>{
    const header = document.getElementById("navbar");

    if(this.scrollY >= 50){
        header.classList.add("border-b", "border-slate-300");
    }else{
        header.classList.remove("border-b", "border-slate-300");
    }
})

/*~~~~~~~~~~~~~~~ SWIPER ~~~~~~~~~~~~~~~*/
const swiper = new Swiper('.swiper',{

    speed: 400,
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    //pagination
    /*pagination: {
        el: '.swiper-pagination',
        clickable: true
    },*/
    grabCurser: true,
    breakpoints: {
        640: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    }
});

/*~~~~~~~~~~~~~~~ SCROLL SECTIONS ACTIVE LINK ~~~~~~~~~~~~~~~*/


/*~~~~~~~~~~~~~~~ SCROLL REVEAL ANIMATION ~~~~~~~~~~~~~~~*/


/* ===================== EMAIL JS ======================== */
const contactForm = document.getElementById('contact-form')
const contactMessage = document.getElementById('contact-message')
const sendMail = (e)=>{
      e.preventDefault()

    //serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_s0dx2e8', 'template_athtn9s','#contact-form', '0tUMGK-9-kPheyyXA').then(()=>{
        // Show sent message
        contactMessage.textContent = 'Message sent successfully!!!'
        // Remove message after 5s
        setTimeout(() =>{
            contactMessage.textContent = ''
        }, 5000)
        // Clear the input fields
        contactForm.reset()
    }, () =>{
        // Show error message
        contactMessage.textContent = 'Message not sent (service error)'
    })
}

contactForm.addEventListener("submit", sendMail)
