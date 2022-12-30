class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header>
                <a href="index.html">Olivia's portfolio</a>
                <nav>
                    <button type="button" onclick="toggleSideNav(this)" class="burgerButton">
                        <div class="bar1"></div>
                        <div class="bar2"></div>
                        <div class="bar3"></div>
                    </button>
                    
                    <div id="mySidenav" class="sidenav">
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="coding.html">Coding</a></li>
                            <li><a href="design.html">Design</a></li>
                            <li><a href="cv.html">Resume</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        `
    }
}

class MyFooter extends HTMLElement {
    connectedCallback() {
        const d = new Date();
        let year = d.getFullYear();

        this.innerHTML = `
            <footer>
                <h2>&copy; ${year} Emmie Olivia Kristiansen</h2>
            </footer>
        `
    }
}

customElements.define('my-header', MyHeader)
customElements.define('my-footer', MyFooter)

function burgerAnimation(x) {}

function toggleSideNav(menu) {

    const sidenavWidth = getComputedStyle(document.querySelector(".sidenav")).width

    if (sidenavWidth == "0px") {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginRight = "250px";
    }
    else {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginRight= "0";
    }

    //menu.classList.toggle is the animation for the burgermenu
    menu.classList.toggle("change");
}

//Animation for header logo
var i = 0;
var txt = "Olivia's portfolio";
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
