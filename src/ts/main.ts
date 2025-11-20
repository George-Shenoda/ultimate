import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

let toggle_sidebar = document.querySelector("header .toggle-sidebar");
let sidebar = document.querySelector(".sidebar") as HTMLDivElement;
let content_area = document.querySelector(".content-area") as HTMLDivElement;
let toggle_submenus = document.querySelectorAll(".toggle-submenu");

if (toggle_sidebar) {
    toggle_sidebar.addEventListener("click", () => {
        if (sidebar && content_area) {
            sidebar.classList.toggle("no-sidebar");
            content_area.classList.toggle("no-sidebar");
        }
    });
}

if (toggle_submenus) {
    toggle_submenus.forEach((toggle_submenu) => {
        toggle_submenu.addEventListener("click", () => {
            toggle_submenu.children[0].classList.toggle("down");
            toggle_submenu.nextElementSibling?.classList.toggle("show")
        });
    });
}
