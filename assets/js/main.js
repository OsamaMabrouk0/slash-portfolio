/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


const stars = document.querySelectorAll("#star");

stars.forEach((star) => {
  let duration = Math.random() * (1.2 - 0.6) + 0.6;
  star.style.animation = `stars ${duration}s infinite linear`;
});

window.addEventListener("load", () => {
  const preloader = document.querySelector(".preloader");
  preloader.classList.add("preload-finish");
});

document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const storedTheme = localStorage.getItem('theme');
    const storedCheckboxState = localStorage.getItem('checkboxState');

    if (storedTheme) {
        body.classList.add(storedTheme);
    }

    if (storedCheckboxState === 'checked') {
        const switchContainer = document.getElementById('switch__container');
        switchContainer.click(); // قم بتحريك الزر لتفعيل أو إيقاف التبديل
    }
});

const switchButton = document.getElementById("switch__container");

switchButton.addEventListener("click", () => {
    const body = document.body;

    if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
        localStorage.setItem('theme', 'light-mode');
    } else {
        body.classList.remove("light-mode");
        body.classList.add("dark-mode");
        localStorage.setItem('theme', 'dark-mode');
    }

    const themeSwitchCheckbox = document.getElementById('theme-switch-checkbox');
    if (themeSwitchCheckbox.checked) {
        localStorage.setItem('checkboxState', 'checked');
    } else {
        localStorage.setItem('checkboxState', 'unchecked');
    }
});
// العناصر
const userIcon = document.getElementById('user-icon');
const overlay = document.getElementById('overlay');
const loginForm = document.getElementById('login-form');

// عند النقر على أيقونة المستخدم
userIcon.addEventListener('click', () => {
  overlay.style.display = 'block';
  loginForm.style.display = 'block';
});

// عند النقر على زر تسجيل الدخول
function login() {
  // يمكنك إضافة الشيفرة هنا للتحقق من بيانات تسجيل الدخول
  // والتحكم في ما إذا كانت صحيحة أم لا
  // لهدف التمرن، سأترك هذا كوظيفة فارغة
  // يمكنك استبدالها بالكود الخاص بك
  console.log('تم تسجيل الدخول!');
  
  // قم بإخفاء خلفية الضباب ونافذة تسجيل الدخول
  overlay.style.display = 'none';
  loginForm.style.display = 'none';
}
function closeOverlay() {
    document.getElementById("overlay").style.display = "none";
  }
  


  

  function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
    document.querySelector('.projects-container').classList.add('blur-background');
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
    document.querySelector('.projects-container').classList.remove('blur-background');
}


window.addEventListener("load", () => {
    const preloader = document.querySelector(".preloader");
    preloader.classList.add("preload-finish");
  });
  
  

  