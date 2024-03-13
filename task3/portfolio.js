// var typed=new typed(".text",{
//     String:["Frontend Developer","Web developer"],
//     typespeed:100,
//     backspeed:100,
//     backDelay:1000,
//     loop:true
// })
const text = "Frontend Developer.";
const speed = 50;
const loopDelay = 1000; // Delay before restarting the animation in milliseconds

function typeWriter(text, index) {
    if (index < text.length) {
        document.getElementById('typed-text').innerHTML += text.charAt(index);
        index++;
        setTimeout(function () {
            typeWriter(text, index);
        }, speed);
    } else {
        setTimeout(function () {
            document.getElementById('typed-text').innerHTML = ''; // Clear the text
            typeWriter(text, 0); // Restart the animation
        }, loopDelay);
    }
}

typeWriter(text, 0);
