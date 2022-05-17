    let inValue = document.registrationForm.ageInputId.oninput;
    
    inValue = function(){
    document.registrationForm.ageOutputId.value = document.registrationForm.ageInputId.value;        
    }

    let menuBtn = document.querySelector('.nav__menu-btn');
    let menu = document.querySelector('.nav__mobile-menu');
    
    menuBtn.addEventListener('click', function (){
    menu.classList.toggle('active');
    })