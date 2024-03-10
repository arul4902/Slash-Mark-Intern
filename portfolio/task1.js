/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* menu show */
/* validate if constant exist */
if(navToggle){
  navToggle.addEventListener('click', () =>{
    navMenu.classList.add('show-menu')
  })
}
/* MENU HIDDEN */
/* validate if constant exist */
if(navClose){
  navClose.addEventListener('click', () =>{
    navMenu.classList.remove('show-menu')
  })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    //when we click on each nav__link, we remove show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () =>{
    const header = document.getElementById('header')

    this.scrollY >= 50 ? header.classList.add('blur-header')
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeaderr)

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
     contactMessage = document.getElementById('contact-message')

     const sendEmail = (e) =>{
      e.preventDefault()


      // serviceID - templateID - #form - publicKey 
      emailjs.sendForm('service_yzzo3ys','template_k6eu7kr','#contact-form')
      .then(() =>{
        //show sent message
        contactMessage.textContent = 'Message sent successfully  ✅'

       //Remove message after five seconds
       setTimeout(() =>{
        contactMessage.textContent = ''
       }, 5000)

       //clear input fields
       contactForm.reset()

      }, () =>{
        //show error message
        contactMessage.textContent = 'Message not sent (service error) ❌'
      })
     }

     contactForm.addEventListener('submit', sendEmail)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollup = () =>{
  const scrollup = document.getElementaryById('scroll-up')
  this.scrollY >= 350 ? scrollup.classList.add('show-scroll')
                  : scrollup.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollup)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
  const scrollY = window.pageYOffset

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
    sectionTop = current.offsetTop = 50,
    sectionId = current.getAttribute['id'],
    sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      sectionsClass.classList.add('active-link')
    }else{
      sectionsClass.classList.remove('active-link')
    }
  })
}

/*=============== SCROLL REVEAL ANIMATION ===============*/