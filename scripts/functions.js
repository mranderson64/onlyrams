var mailSend = document.getElementsByClassName('mailSend')[0];
var replaceSrc = function () {
	x = document.getElementsByClassName('lazy-load-me');
	for (i = 0; i < x.length; i++){
		if (x[i].getBoundingClientRect().top < window.innerHeight) {
			img = x[i]
			if(window.innerWidth < 850 && x[i].getAttribute('mobi-src') != null){
				lazySRC = x[i].getAttribute('mobi-src');
			}else{
				lazySRC = x[i].getAttribute('desk-src');		
			}
			if(x[i].tagName == 'VIDEO'){
				x[i].canPlayType("video/mp4");
				x[i].src = lazySRC;
				x[i].load();
				x[i].onload = x[i].play();
				x[i].classList.remove("lazy-load-me");
			}else{
				x[i].src = lazySRC;
				x[i].classList.remove("lazy-load-me");
			}
		}
	}
};
replaceSrc();
window.addEventListener('scroll', replaceSrc, false);

function contact(){
	event.preventDefault()
	email = document.getElementsByName('email')[0].value;
	name = document.getElementsByName('name')[0].value;
	message = document.getElementsByName('message')[0].value;
	mail = 'https://onlyrams.co.uk/mail?email='+email+'&name='+name+'&message='+message;
	xhttp = new XMLHttpRequest();
	xhttp.open("GET", mail, true);
	xhttp.send();
	xhttp.onreadystatechange = function() {
		document.getElementById("exceptions").innerHTML = this.getResponseHeader("form-response");
	}
}
if(mailSend){
	mailSend.addEventListener('click', contact, false)
}