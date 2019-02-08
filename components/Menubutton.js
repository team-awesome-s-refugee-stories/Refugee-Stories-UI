class Menubutton {
    constructor(element) {
        // console.log(element);

        this.button = element;

        this.shown = false;

        this.nav = document.querySelector("nav");

        this.button.addEventListener("click", () => {
            this.toggleContent();
        });
    }

    toggleContent() {
        // Toggle the ".menu-hidden" class off and on
        if (this.shown) {
            this.button.classList.add("fa-bars");
            this.button.classList.remove("fa-times");
            this.nav.classList.add("menu-hidden");
            this.nav.classList.remove("menu-shown");
            this.shown = false;
        } else {
            this.button.classList.remove("fa-bars");
            this.button.classList.add("fa-times");
            this.nav.classList.remove("menu-hidden");
            this.nav.classList.add("menu-shown");
            this.shown = true;
        }
    }
}
// Menu Button Obeject Here

let menuButton = new Menubutton(document.querySelector(".menu-button"));

Array.from(document.querySelectorAll("nav a")).forEach(
    menuButtons => (menuButtons.style.backgroundColor = "white")
);
