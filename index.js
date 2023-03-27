//  only someone click it, the alert would show up.
// document.querySelectorAll("button")[0].addEventListener("click",function(){
//     alert("I got clicked1!");
// });

// ❌this is directly call function, i do not need to click  the alert would be show up.
// document.querySelector("button").addEventListener("click",handleClick());

// function handleClick(){
//     alert("I got clicked!");
// }
// document.querySelectorAll("button")[1].addEventListener("click",function(){
//     alert("I got clicked2!");
// });

// document.querySelectorAll("button")[2].addEventListener("click",function(){
//     alert("I got clicked3!");
// });
// document.querySelectorAll("button")[3].addEventListener("click",function(){
//     alert("I got clicked4!");
// });
// document.querySelectorAll("button")[4].addEventListener("click",function(){
//     alert("I got clicked5!");
// });
// document.querySelectorAll("button")[5].addEventListener("click",function(){
//     alert("I got clicked6!");
// });
// document.querySelectorAll("button")[6].addEventListener("click",function(){
//     alert("I got clicked7!");
// });

//Detecting Buttom Press

for (let i = 0 ; i < document.querySelectorAll(".drum").length; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
       
        var buttonInnerHTML = this.innerHTML;
        //function 中的 key 继承的是 buttonInnerHTML 的内容
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
        }
        ) };


//Detecting Keyboard Press

document.addEventListener("keypress",function(event) {
    //function 中的 key 继承的是 event.key 的内容
    makeSound(event.key);
    buttonAnimation(event.key);
});


function makeSound(key){
    switch (key) {
        case "w":
            let crash = new Audio ("sounds/crash.mp3");
            crash.play();
            break;

        case "a":
            let kick_bass = new Audio ("sounds/kick-bass.mp3");
            kick_bass.play();
            break;

        case "s":
            let snare = new Audio ("sounds/snare.mp3");
            snare.play();
            break;

         case "d":
            let tom1 = new Audio ("sounds/tom-1.mp3");
            tom1.play();
            break;
         case "j":
            let tom2 = new Audio ("sounds/tom-2.mp3");
            tom2.play();
            break;

         case "k":
            let tom3 = new Audio ("sounds/tom-3.mp3");
            tom3.play();
            break;

         case "l":
            let tom4 = new Audio ("sounds/tom-4.mp3");
            tom4.play();
            break;


        default:console.log();
           
    }
}

function buttonAnimation(currentKey) {
    let activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout (function(){
        activeButton.classList.remove("pressed");
    },100);
}