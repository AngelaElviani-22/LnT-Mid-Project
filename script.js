const menu = document.querySelector('.menu input');
const nav = document.querySelector('nav ul');

menu.addEventListener('click', function() {
    nav.classList.toggle('slide');
});

const nama = document.querySelectorAll('#name path');
for(let i=0; i<nama.length; i++){
    console.log(`Letter ${i} is ${nama[i].getTotalLength()}`);
}

const form= document.querySelector('#contact_content');

let name = form.elements.namedItem("name");
let email = form.elements.namedItem("email");
let linkedin = form.elements.namedItem("linkedin");
let comment = form.elements.namedItem("comment");

name.addEventListener('input', validate);
email.addEventListener('input', validate);

form.addEventListener('send', function(e) {
    e.preventDefault();

    alert('Submitted!');
});

function validate (e) {
    console.log(e.target.name);
}