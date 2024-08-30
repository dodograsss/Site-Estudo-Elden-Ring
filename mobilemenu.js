class MobileMenu {
    constructor(menu, navlist, navlinks) {
        this.menu = document.querySelector(menu);
        this.navlist = document.querySelector(navlist);
        this.navlinks = document.querySelectorAll(navlinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animatedLinks() {
        this.navlinks.forEach((link, index) => {
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
        });
    }

    handleClick() {
        this.navlist.classList.toggle(this.activeClass);
        this.animatedLinks();
    }

    addClickEvent() {
        this.menu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.menu) {
            this.addClickEvent();
        }
        return this;
    }
}

{const mobileMenu = new MobileMenu(
    ".Mmenu", // Corrigi o seletor aqui
    ".navlist",
    ".navlist li"
);
mobileMenu.init();}

let count = 1;
document.getElementById("rad1").checked = true
setInterval(function(){
nextimage();
},5000)
function nextimage(){
    count++
    if(count>3){
        count=1;
    }
    document.getElementById("rad"+count).checked = true;
}