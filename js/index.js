window.location.href = "https://codewithvdr.vercel.app";
// For Redirecting To mail
try {
  let btn_1 = document.getElementsByClassName("btn-1")[0];
  btn_1.onclick = () => {
    alert('Redirecting To E-Mail')
    window.location.href = "mailto:code.durgesh86@gmail.com";
  };
} catch (error) {

}

// For Hamburger
let i = 0;
const nav = () => {
  if (i % 2 == 0) {
    document.getElementById("links").style.display = "none";
    document.getElementById("hamburger").classList.add("fa-bars");
    document.getElementById("hamburger").classList.remove("fa-close");
  } else {
    document.getElementById("links").style.display = "flex";
    document.getElementById("hamburger").classList.add("fa-close");
    document.getElementById("hamburger").classList.remove("fa-bars");
  }

  i++;
};
nav(); //For Removing
// For Showing year in Copyright section
const d = new Date();
document.getElementById("year").innerHTML = `&nbsp;${d.getFullYear()}&nbsp;`;

// Form Form Submission
const scriptURL =
  "https://script.google.com/macros/s/AKfycbwyQDZNJx4rirna1Xv_oHnjAD2gFKnAHZOXGe7X9YqudzgLCMJYAomjne1pP6UjLkVyLA/exec";
const form = document.forms["google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) =>
      alert("Thanks for Contacting me..! I Will Contact You Soon...")
    )
    .catch((error) => console.error("Error!", error.message));
});
