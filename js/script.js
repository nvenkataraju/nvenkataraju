const header = document.querySelector("header");
window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 100);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('open');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('open');
};

var typed=new Typed('.auto-type',{
	strings:["","Freelancer.","MERN Stack Developer.","Blockchain Enthusiastic.","React Native Developer."],
	typeSpeed:150,
	backSpeed:150,
	loop:true
})

function sendMail(){
	var params={
		name: document.getElementById("name").value,
		email:document.getElementById("email").value,
		message:document.getElementById("message").value,
	}
}