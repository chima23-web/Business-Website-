const menuButton = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

if (menuButton && navMenu) {
    menuButton.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
}
const getStartedButton =
document.getElementById("get-started");
const button =
document.getElementById("our-services");
if (getStartedButton) {
getStartedButton.addEventListener("click", function() {
    window.location.href ="contact.html";
});
}

if (button) {
    button.addEventListener("click", function() {
        window.location.href ="services.html";
    });
}

const learnMoreButton =
document.getElementById("learn-more");
if (learnMoreButton) {
    learnMoreButton.addEventListener("click", function() {
        window.location.href ="why-us.html";
    });
}
const viewAllServicesButton =
document.getElementById("view-all-services");
    if (viewAllServicesButton) {
        viewAllServicesButton.addEventListener("click", function() {
            window.location.href ="blog.html";
            
        
    });
}
const viewOurServicesButton =
document.getElementById("view-our-services");
if (viewOurServicesButton) {
    viewOurServicesButton.addEventListener("click", function() {
        window.location.href ="portfolio.html";
    });
}
const readFullArticleButton =
document.getElementById("read-full-article");
if (readFullArticleButton) {
readFullArticleButton.addEventListener("click", function() {
    window.location.href ="why-us.html";
});
}
const viewAllProjectsButton =
document.getElementById("view-all-projects");
if (viewAllProjectsButton) {
    viewAllProjectsButton.addEventListener("click", function() {
        window.location.href ="blog.html";
    });
}
const  contactForm =
document.getElementById("contact-form");
const formMessage =
document.getElementById("form-message");
if (contactForm && formMessage) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Thank you for reaching out to BIZ WEB. Your message has been successfully submitted, and our team will review your inquiry and get back to you shortly");
        contactForm.reset();
    });
    
    
}

