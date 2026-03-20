function scrollToProjects() {
  const projectSection = document.getElementById("projects");
  if (projectSection) {
    projectSection.scrollIntoView({
      behavior: "smooth"
    });
  }
}

function sendMessage() {
  alert("Message sent successfully!");
}

/* typing effect */

const text = "I build websites and web applications.";
let i = 0;

function typing() {
  const typingElement = document.getElementById("typing");

  if (!typingElement) return;

  if (i < text.length) {
    typingElement.innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 60);
  }
}

/* run typing effect after page loads */
window.onload = function () {
  typing();
};
