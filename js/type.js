const recursiveTyping = () => {
    var typed = new Typed('#heading', {
        strings: ['CodeWithVdr.'],
        typeSpeed: 50,
    });
    var typed = new Typed('#skills', {
        strings: ['Python', 'Java', 'Javascript', 'Web Development', 'App Development', 'Python Tkinter', 'Data Structures And Algorithms', 'Mysql'],
        typeSpeed: 50,
        loop: true,
        loopCount: Infinity,
        cursorChar: '|'
    });
    // reference : https://github.com/mattboldt/typed.js/blob/master/README.md#customization
    // recursiveTyping()
}
recursiveTyping()