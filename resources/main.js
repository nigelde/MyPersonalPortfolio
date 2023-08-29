
function showModal(button, modal) {
    button.onclick = function() {
        modal.style.display = "block";
        button.innerHTML = "See less";
        button.onclick = function() {
            modal.style.display = "none";
            button.innerHTML = "See more";
            showModal(button, modal);
        }
    }
}

let htmlModal = document.getElementById("html-modal");
let html = document.getElementById("html-btn");

showModal(html, htmlModal);


let cssModal = document.getElementById("css-modal");
let css = document.getElementById("css-btn");

showModal(css, cssModal);

let jsModal = document.getElementById("js-modal");
let js = document.getElementById("js-btn");

showModal(js, jsModal);

let bootstrapModal = document.getElementById("bootstrap-modal");
let bootstrap = document.getElementById("bootstrap-btn");

showModal(bootstrap, bootstrapModal);

let wordpressModal = document.getElementById("wordpress-modal");
let wordpress = document.getElementById("wordpress-btn");

showModal(wordpress, wordpressModal);