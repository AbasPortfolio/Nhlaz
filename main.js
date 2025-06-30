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
    hamburger.classList.toggle("ri-close-large-line")
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
const activeLink = () => {
    const sections = document.querySelectorAll("section");
    const navLink = document.querySelectorAll(".nav-link");

    let current = "home"
    sections.forEach(section => {
        const sectionTop = section.offsetTop;

        if(this.scrollY >= sectionTop - 60){
            current = section.getAttribute("id")
        }
    })
    navLink.forEach(item => {
        item.classList.remove("active")
        if(item.href.includes(current)){
            item.classList.add("active")
        }
    })
}

window.addEventListener("scroll",activeLink)

/*~~~~~~~~~~~~~~~ SCROLL REVEAL ANIMATION ~~~~~~~~~~~~~~~*/


/* ------------------ Email Js ---------- */
const sendEmail = () =>{
    


    // Initialize EmailJS with your Public Key
    emailjs.init("aH2XWXsT_f5r4vq-1"); // Replace with your actual Public Key from EmailJS dashboard

    // Define template parameters
    var templateParams = {
        to_name: 'Nhlaz Health and Beauty', // Dynamic variable for the recipient's name
        from_name: 'Email Subscriber',  // Dynamic variable for the sender's name
        message_html: emailField // Dynamic variable for the email body
    };
    var emailField = document.getElementById("email").value;
    // Send the email
    emailjs.send('service_ucduwqu', 'template_o9gjywv', templateParams)
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Email sent successfully!');
    }, function(error) {
        console.log('FAILED...', error);
        alert('Email sending failed. Please check the console for details.');
    });
}
sendEmail();