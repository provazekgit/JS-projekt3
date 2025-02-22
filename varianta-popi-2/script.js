//************************* */
// responsivní navigace 
//************************ */
const menuIcon = document.querySelector(".menu-icon")
const menuList = document.querySelector("nav")
const hamburgerIcon = document.querySelector(".fa-solid")

// menuIcon.addEventListener("click", () => {
//     console.log("Bylo kliknuto")
// })

menuIcon.addEventListener("click", () => {
    if (hamburgerIcon.classList[1] === "fa-bars") {
        hamburgerIcon.classList.add("fa-xmark")
        hamburgerIcon.classList.remove("fa-bars")
        menuList.style.display = "block"  // menu
    } else {
        hamburgerIcon.classList.add("fa-bars")
        hamburgerIcon.classList.remove("fa-xmark")
        menuList.style.display = "none"  // menu
    }
})

//************************* */
// dark light mode
//************************ */ 
const switcher = document.querySelector('.switch input');
const header = document.querySelector('header');
const themeText = document.querySelector('.switcher-description p');
const themeIcon = document.querySelector('.switcher-description i');

// Funkce pro nastavení tmavého režimu
const darkMode = () => {
    themeText.textContent = 'Dark Mode';
    themeIcon.classList.replace('fa-sun', 'fa-moon');
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark'); // Uložit volbu do localStorage
}

// Funkce pro nastavení světlého režimu
const lightMode = () => {
    themeText.textContent = 'Light Mode';
    themeIcon.classList.replace('fa-moon', 'fa-sun');
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light'); // Uložit volbu do localStorage
}

// Přepínání režimu při změně přepínače
const switchTheme = (event) => {
    if (event.target.checked) {
        darkMode();
    } else {
        lightMode();
    }
}

// Načtení preferovaného režimu z localStorage při načtení stránky
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        if (savedTheme === 'dark') {
            switcher.checked = true;
            darkMode();
        } else {
            switcher.checked = false;
            lightMode();
        }
    } else {
        // Pokud není nic uloženo, použij světlý režim jako výchozí
        document.documentElement.setAttribute('data-theme', 'light');
        switcher.checked = false;
        lightMode();
    }
});

// Přidání event listeneru na přepínač
if (switcher) {
    switcher.addEventListener('change', switchTheme);
}

//*************************** */
// bottom button
//************************** */
document.addEventListener('DOMContentLoaded', () => {
    const scrollToTopButton = document.getElementById('scrollToTop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopButton.classList.add('show');
        } else {
            scrollToTopButton.classList.remove('show');
        }
    });

    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

//************************* */
// formulář + validace
//************************* */
// Výběr formuláře a vstupních polí
const formular = document.querySelector("form");

// Pro kontaktní formulář
const fullName = document.querySelector(".fullName");
const email = document.querySelector(".email");
const tel = document.querySelector(".tel");
const message = document.querySelector(".message");

// Pro přihlašovací formulář
const password = document.querySelector(".password");
const confirmPassword = document.querySelector(".confirmPassword");

// Notifikace chyb pro oba formuláře
const notName = document.querySelector(".notificationName");
const notEmail = document.querySelector(".notificationEmail");
const notTel = document.querySelector(".notificationTel");
const notMessage = document.querySelector(".notificationMessage");
const notPassword = document.querySelector(".notificationPassword");
const notConfirmPassword = document.querySelector(".notificationConfirmPassword");

// Notifikace pro úspěšné odeslání
const successMessage = document.querySelector(".notificationSuccess");

// Při odeslání formuláře
formular.addEventListener("submit", (event) => {
    event.preventDefault();

    // Skrytí všech notifikací na začátku
    document.querySelectorAll("p[class^='notification']").forEach(el => el.style.display = "none");

    // Zjištění, o jaký typ formuláře jde
    const isContactForm = document.querySelector(".message") !== null;
    const isLoginForm = document.querySelector(".password") !== null;

    let isValid = true;

    // Validace kontaktního formuláře
    if (isContactForm) {
        if (fullName.value.trim() === "") {
            notName.style.display = "block";
            isValid = false;
        }
        if (email.value.trim() === "") {
            notEmail.style.display = "block";
            isValid = false;
        }
        if (message.value.trim() === "") {
            notMessage.style.display = "block";
            isValid = false;
        }
        console.log("Kontaktní formulář odeslán");
    }

    // Validace přihlašovacího formuláře
    if (isLoginForm) {
        if (fullName.value.trim() === "") {
            notName.style.display = "block";
            isValid = false;
        }
        if (email.value.trim() === "") {
            notEmail.style.display = "block";
            isValid = false;
        }
        if (password.value.trim() === "") {
            notPassword.style.display = "block";
            isValid = false;
        }
        if (confirmPassword.value.trim() === "") {
            notConfirmPassword.style.display = "block";
            isValid = false;
        }
        if (password.value.trim() !== confirmPassword.value.trim()) {
            notConfirmPassword.style.display = "block";
            notConfirmPassword.textContent = "Hesla se neshodují!";
            isValid = false;
        }
        console.log("Přihlašovací formulář odeslán");
    }

    // Pokud je formulář validní, zobrazíme úspěšnou zprávu
    if (isValid) {
        successMessage.style.display = "block";
        successMessage.textContent = "Formulář byl ověřen!";
        formular.reset(); // Vyčistí formulář
    }
});



