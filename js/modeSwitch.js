const btn = document.getElementById("mode"); // Targetting Button
const respmodebtn = document.getElementById("resp-mode"); // Targetting Button
// Code For Dark Mode
const darkMode = () => {
  btn.style.transform = "rotate(180deg)";
  respmodebtn.style.transform = "rotate(180deg)";
  document.body.classList.add("dark");
  // For Navbar
  document.getElementById("navbar").style.color = "white";
  document.getElementById("navbar").style.backgroundColor = "#1f2937";
  // For Resp Navabar
  document.getElementById("respNavbar").style.color = "white";
  document.getElementById("respNavbar").style.backgroundColor = "#1f2937";
  try {
    // For Content
    var content = document.getElementsByClassName("content");
    for (let i = 0; i < content.length; i++) {
      content[i].style.color = "purple";
    }
    var section = document.getElementsByClassName("sectionBg");
    for (let i = 0; i < section.length; i++) {
      section[i].style.backgroundColor = "#1e293b";
    }
    // For Buttons Of Home
    document.getElementsByClassName('btn-1')[0].style.color = '#4b5563'
    document.getElementsByClassName('btn-1')[0].style.backgroundColor = '#f3f4f6'
  } catch (error) {
    console.log(error)
  }

  try {
    // For Contact Me Form
    document.getElementById('about').style.backgroundColor = "#1e293b";
    // For Contact Me Form
    document.getElementById('services').style.backgroundColor = "#1e293b";
    // For Contact Me Form
    document.getElementById('contact').style.backgroundColor = "#1e293b";
  } catch (error) {
    console.log(error)
  }
  // for footer section
  document.getElementsByTagName("footer")[0].style.backgroundColor = "#1f2937";
  document.getElementsByTagName("footer")[0].style.color = "white";

  // writing in localstorage
  localStorage.setItem("darkMode", "true");
  console.log("Dark : true")
};
// Code For Light Mode
const lightMode = () => {
  btn.style.transform = "rotate(360deg)";
  respmodebtn.style.transform = "rotate(-180deg)";
  document.body.classList.remove("dark");
  // For Navbar
  document.getElementById("navbar").style.color = "#000000";
  document.getElementById("navbar").style.backgroundColor = "white";
  // For Navbar
  document.getElementById("respNavbar").style.color = "#000000";
  document.getElementById("respNavbar").style.backgroundColor = "white";
  // For Content
  try {
    var content = document.getElementsByClassName("content");
    for (let i = 0; i < content.length; i++) {
      content[i].style.color = "black";
    }
    var section = document.getElementsByClassName("sectionBg");
    for (let i = 0; i < section.length; i++) {
      section[i].style.backgroundColor = "white";
    }
    // For Buttons Of Home
    document.getElementsByClassName('btn-1')[0].style.color = 'white'
    document.getElementsByClassName('btn-1')[0].style.backgroundColor = '#111827'
  } catch (error) {
    console.log(error)
  }

  try {
    // For Contact Me Form
    document.getElementById('about').style.backgroundColor = "white";
    // For Contact Me Form
    document.getElementById('services').style.backgroundColor = "white";
    // For Contact Me Form
    document.getElementById('contact').style.backgroundColor = "white";
  } catch (error) {
    console.log(error)
  }

  // for footer section
  document.getElementsByTagName("footer")[0].style.backgroundColor = "white";
  document.getElementsByTagName("footer")[0].style.color = "grey";

  // writing in localstorage
  localStorage.setItem("darkMode", "false");
  console.log("Dark : false")
};
// Toggling When Button Is Pressed
btn.onclick = () => {
  let md = document.body.classList.contains("dark");
  if (md == true) {
    lightMode();
  } else {
    darkMode();
  }
};
respmodebtn.onclick = () => {
  let md = document.body.classList.contains("dark");
  if (md == true) {
    lightMode();
  } else {
    darkMode();
  }
};
// Checking From Local Storage
let m = localStorage.getItem("darkMode");
console.log(m);
if (m === "true") {
  darkMode();
} else {
  lightMode();
}