document.addEventListener("DOMContentLoaded", () => {
    const aboutPictures = document.querySelectorAll(".about-picture");
    
    aboutPictures.forEach((aboutPicture) => {
        aboutPicture.addEventListener("dblclick", (e) => {
            const heartIcon = document.createElement("i");
            heartIcon.classList.add("fas", "fa-heart", "heart-animation");
            const x = e.clientX - aboutPicture.getBoundingClientRect().left;
            const y = e.clientY - aboutPicture.getBoundingClientRect().top;

            heartIcon.style.left = `${x}px`;
            heartIcon.style.top = `${y}px`;

            aboutPicture.appendChild(heartIcon);

            setTimeout(() => {
                heartIcon.remove();
            }, 1500);
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const facebookIcon = document.getElementById("facebook-icon");
    const twitterIcon = document.getElementById("twitter-icon");
    const instagramIcon = document.getElementById("instagram-icon");
    const googleIcon = document.getElementById("google-icon");

    facebookIcon.addEventListener("click", () => redirectToSocialMedia("https://www.facebook.com/thienphamcfvn/"));
    twitterIcon.addEventListener("click", () => redirectToSocialMedia("https://twitter.com"));
    instagramIcon.addEventListener("click", () => redirectToSocialMedia("https://www.instagram.com"));
    googleIcon.addEventListener("click", () => redirectToSocialMedia("https://www.google.com"));
});

function redirectToSocialMedia(url) {
    window.location.href = url;
}


document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get form inputs
        const nameInput = document.querySelector('input[name="name"]');
        const emailInput = document.querySelector('input[name="email"]');

        // Validate inputs
        if (nameInput.value.trim() === "" || emailInput.value.trim() === "") {
            alert("Name and email cannot be empty.");
        } else if (!isValidEmail(emailInput.value.trim())) {
            alert("Invalid email format.");
        } else {
            window.location.href = "submit.html";
        }
    });

    // Function to validate email format
    function isValidEmail(email) {
        const emailRegex = /^\S+@gmail\.com$/;
        return emailRegex.test(email);
    }
});


