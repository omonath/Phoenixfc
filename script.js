// ================== POPUP FORM CONTROLS ==================
const showBtn = document.getElementById('showFormBtn');
const popup = document.getElementById('membershipPopup');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('closePopup');

showBtn.addEventListener('click', () => {
    popup.style.display = 'block';
    overlay.style.display = 'block';
});

closeBtn.addEventListener('click', closePopup);
overlay.addEventListener('click', closePopup);

function closePopup() {
    popup.style.display = 'none';
    overlay.style.display = 'none';
}

// ================== FORM VALIDATION ==================
var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var positionError = document.getElementById("position-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");

function toggleCheck(id, show) {
    document.getElementById(id).style.display = show ? 'block' : 'none';
}

function validateName() {
    const name = document.getElementById('contact-name').value.trim();
    if (!name) { nameError.innerHTML = 'Name is required'; toggleCheck('name-check', false); return false; }
    if (!/^[A-Za-z]+\s[A-Za-z]+$/.test(name)) { nameError.innerHTML = 'Write full name'; toggleCheck('name-check', false); return false; }
    nameError.innerHTML = ''; toggleCheck('name-check', true); return true;
}

function validatePhone() {
    const phone = document.getElementById('contact-phone').value.trim();
    if (!phone) { phoneError.innerHTML = 'Phone no is required'; toggleCheck('phone-check', false); return false; }
    if (!/^[0-9]{11}$/.test(phone)) { phoneError.innerHTML = 'Phone no should be 11 digits'; toggleCheck('phone-check', false); return false; }
    phoneError.innerHTML = ''; toggleCheck('phone-check', true); return true;
}

function validateEmail() {
    const email = document.getElementById('contact-email').value.trim();
    if (!email) { emailError.innerHTML = 'Email is required'; toggleCheck('email-check', false); return false; }
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) { emailError.innerHTML = 'Email invalid'; toggleCheck('email-check', false); return false; }
    emailError.innerHTML = ''; toggleCheck('email-check', true); return true;
}

function validatePosition() {
    const position = document.getElementById('position').value;
    if (!position) { positionError.innerHTML = "Please select a position"; toggleCheck('position-check', false); return false; }
    positionError.innerHTML = ''; toggleCheck('position-check', true); return true;
}

function validateMessage() {
    const msg = document.getElementById('contact-message').value.trim();
    const left = 30 - msg.length;
    if (left > 0) { messageError.innerHTML = `${left} more character(s) required`; toggleCheck('message-check', false); return false; }
    messageError.innerHTML = ''; toggleCheck('message-check', true); return true;
}

function validateForm() {
    if (!validateName() || !validatePhone() || !validateEmail() || !validatePosition() || !validateMessage()) {
        submitError.style.color = 'red';
        submitError.style.display = 'block';
        submitError.innerHTML = 'Fix your errors to submit';
        setTimeout(() => submitError.style.display = 'none', 3000);
        return false;
    }

    const submitBtn = document.getElementById("submitBtn");
    submitBtn.disabled = true; 
    submitBtn.innerHTML = "Submitting...";

    submitError.style.color = 'green';
    submitError.innerHTML = 'Form submitted successfully ✅';

    setTimeout(() => {
        document.getElementById("contact-form").reset();
        ['name','phone','email','position','message'].forEach(id => toggleCheck(`${id}-check`, false));
        nameError.innerHTML = ""; phoneError.innerHTML = ""; emailError.innerHTML = "";
        positionError.innerHTML = ""; messageError.innerHTML = ""; submitError.style.display = "none";
        submitBtn.disabled = false; submitBtn.innerHTML = "Submit";
        popup.style.display = 'none'; overlay.style.display = 'none';
    }, 1500);

    return true;
}

// ================== TRAINING CALENDAR ==================
document.addEventListener("DOMContentLoaded", function () {
    const calendar = document.getElementById("calendar");
    const trainingInfo = document.getElementById("trainingInfo");

    const trainingTimes = {
        1: "Monday — 5:00 PM to 7:00 PM",
        2: "Tuesday — 5:00 PM to 7:00 PM",
        3: "Wednesday — 5:00 PM to 7:00 PM",
        4: "Thursday — 5:00 PM to 7:00 PM",
        6: "Saturday — 7:00 AM to 10:00 AM"
    };

    for (let day = 1; day <= 30; day++) {
        const dayBox = document.createElement("div");
        dayBox.textContent = day;

        dayBox.addEventListener("click", () => {
            const weekday = new Date(2025, 0, day).getDay(); 
            const time = trainingTimes[weekday];

            if (time) {
                trainingInfo.style.display = "block";
                trainingInfo.textContent = `Training on this day: ${time}`;
            } else {
                trainingInfo.style.display = "block";
                trainingInfo.textContent = "No training on this day.";
            }
        });

        calendar.appendChild(dayBox);
    }
});

// ================== GOOGLE MAP TOGGLE ==================
const map = document.getElementById("contactMap");
map.addEventListener("click", () => {
    map.classList.toggle("map-large");
});

// ================== MOBILE MENU ==================
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const closeMobile = document.querySelector(".close-mobile");

hamburger.addEventListener("click", () => { mobileMenu.style.display = "flex"; });
closeMobile.addEventListener("click", () => { mobileMenu.style.display = "none"; });
