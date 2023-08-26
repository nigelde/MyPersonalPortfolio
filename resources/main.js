
function showModal(button, modal, close) {
    button.onclick = function() {
        modal.style.display = "block";
        close.onclick = function() {
            modal.style.display = "none";
        }
    }
}




let htmlModal = document.getElementById("html-modal");
let html = document.getElementById("html-btn");
let span1 = document.getElementsByClassName("close")[0];

showModal(html, htmlModal, span1);

let cssModal = document.getElementById("css-modal");
let css = document.getElementById("css-btn");
let span2 = document.getElementsByClassName("close")[1];

showModal(css, cssModal, span2);

let jsModal = document.getElementById("js-modal");
let js = document.getElementById("js-btn");
let span3 = document.getElementsByClassName("close")[2];

showModal(js, jsModal, span3);

let bootstrapModal = document.getElementById("bootstrap-modal");
let bootstrap = document.getElementById("bootstrap-btn");
let span4 = document.getElementsByClassName("close")[3];

showModal(bootstrap, bootstrapModal, span4);

let wordpressModal = document.getElementById("wordpress-modal");
let wordpress = document.getElementById("wordpress-btn");
let span5 = document.getElementsByClassName("close")[4];

showModal(wordpress, wordpressModal, span5);