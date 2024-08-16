let menuBar = document.getElementById("menuBar"),
    mobileNav = document.getElementById("mobile-nav"),
    closeNav = document.getElementById("closeMenu"),
    teamNavItem = document.getElementById("teamNavItem"),
    teamNavSubMenu = document.getElementById("teamNavSubMenu");

// Show the submenu when the mouse is over the teamNavItem
teamNavItem.addEventListener("mouseenter", () => {
    teamNavSubMenu.classList.remove("hidden");
});

// Hide the submenu when the mouse leaves the teamNavItem or the submenu
teamNavItem.addEventListener("mouseleave", () => {
    teamNavSubMenu.classList.add("hidden");
});

teamNavSubMenu.addEventListener("mouseenter", () => {
    teamNavSubMenu.classList.remove("hidden");
});

teamNavSubMenu.addEventListener("mouseleave", () => {
    teamNavSubMenu.classList.add("hidden");
});

// Toggle the mobile navigation
menuBar.addEventListener("click", () => {
    mobileNav.classList.remove("hidden");
});

closeNav.addEventListener("click", () => {
    mobileNav.classList.add("hidden");
});
