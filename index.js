// for(var i=0;i<document.querySelector(".drum").length;i++){
//     document.querySelectorAll("button")[i].addEventListener("click",function (){
//         alert("I HAVE BEEN Clicked");
//     });
// }
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        /* we used trim() method to remove white space and get the inner text */
        let btext = this.querySelector("span").textContent.trim();
        /* we used the playsound method to make sound by click */
        playSound(btext);
        playAnimation(btext);
        
    });
}
/* for the click by mouse  */
function playSound(key){
    switch(key){
        case "w":
            /*create object of sound and play  */
            new Audio("./sounds/crash.mp3").play();
            break;

        case "a":
            /*create object of sound and play  */
            new Audio("./sounds/kick-bass.mp3").play();
            break;
        case "s":
            /*create object of sound and play  */
            new Audio("./sounds/snare.mp3").play();
            break;
        case "d":
            /*create object of sound and play  */
            new Audio("./sounds/tom-1.mp3").play();
            break;
        case "j":
            /*create object of sound and play  */
            new Audio("./sounds/tom-2.mp3").play();
            break;
        case "k":
            /*create object of sound and play  */
            new Audio("./sounds/tom-3.mp3").play();
            break;
        case "l":
            /*create object of sound and play  */
            new Audio("./sounds/tom-4.mp3").play();
            break;
    }


}
/* to detect keyboard sound */
document.addEventListener("keydown",function(Event){
    playSound(Event.key);
    playAnimation(Event.key);


});
/*
generate animation to website */
function playAnimation(currentkey){
    /* make active bt */
    var activebutton=document.querySelector("."+currentkey);
    /* use the pressed class to draw the animation */
    activebutton.classList.add("pressed");
    /* remove the animation to form delay */
    setTimeout(function (){
        activebutton.classList.remove("pressed");
    },100);

}

/*
use of call back method in js
A callback function in JavaScript is a function that is passed as an argument to another function, and is executed later, usually after some operation is completed.

Think of it as:::

“Here’s a function — call it when you finish your job.”
function greet(name, callback) {
    console.log("Hello " + name);
    callback();  // Call the callback function
}

function sayGoodbye() {
    console.log("Goodbye!");
}

Pass sayGoodbye as a callback
greet("Alice", sayGoodbye);


 */
