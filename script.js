function scrollToProjects(){

document.getElementById("projects").scrollIntoView({
behavior:"smooth"
});

}

function sendMessage(){

alert("Message sent successfully!");

}

/* typing effect */

const text="I build websites and web applications.";
let i=0;

function typing(){

if(i<text.length){

document.getElementById("typing").innerHTML+=text.charAt(i);

i++;

setTimeout(typing,60);

}

}

typing();