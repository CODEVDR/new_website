const recursiveTyping = () => {
  var typed = new Typed("#heading", {
    strings: ["CodeWithVdr."],
    typeSpeed: 50,
  });
  var typed = new Typed("#skills", {
    strings: [
      "Python",
      "Java",
      "Javascript",
      "Web Development",
      "App Development",
      "Python Tkinter",
      "Data Structures And Algorithms",
      "Mysql",
    ],
    typeSpeed: 50,
    loop: true,
    loopCount: Infinity,
    cursorChar: "|",
  });
  // reference : https://github.com/mattboldt/typed.js/blob/master/README.md#customization
};

// Typing Effect For Services
const recursiveTypingServices = () => {
  var typed = new Typed("#heading", {
    strings: ["CodeWithVdr"],
    typeSpeed: 50,
  });
  var typed = new Typed("#title", {
    strings: ["Services By CodeWithVdr"],
    typeSpeed: 100,
    loop: true,
    loopCount: Infinity,
    cursorChar: "|",
  });
  var typed = new Typed("#servs", {
    strings: [
      "Python Devlopment",
      "Frontend Development",
      "Backend Development",
      "Android Development",
      "Hosting",
      "Server Handling",
      "Free Projects With Source Code",
    ],
    typeSpeed: 50,
    loop: true,
    loopCount: Infinity,
    cursorChar: "|",
  });
  // reference : https://github.com/mattboldt/typed.js/blob/master/README.md#customization
};
if(document.title==="Home | CodeWithVdr"){
  recursiveTyping();
  console.log("This is Hompage")
}
else if(document.title==="Services | CodeWithVdr"){
  recursiveTypingServices();
  console.log("This is Services Page")
}
