/**
 * Scoreboard Homework
 * @author Tristan Gaeta
 */

// vars
 var who = 'Away';
 var inning = '1';
 const img = document.querySelector('img');

 const sounds = ['buildup.mp3','charge1.mp3','charge2.mp3']
 const images = ['megaphone.png','ups.png']

//Add button listeners
let whoButton = document.getElementById('Who');
whoButton.addEventListener('change',()=>{
    who = whoButton.value;
});

let inningButton = document.getElementById('Inning');
inningButton.addEventListener('change',()=>{
    inning = inningButton.value;
});

let runsUpButton = document.getElementById('Runs+');
runsUpButton.addEventListener('click',()=>{
    let box = document.getElementById(who+inning);
    let oldScore = parseInt(box.innerHTML);
    box.innerHTML = oldScore+1;

    box = document.getElementById(who+'R')
    oldScore = parseInt(box.innerHTML);
    box.innerHTML = oldScore+1;
});

let runsDownButton = document.getElementById('Runs-');
runsDownButton.addEventListener('click',()=>{
    let box = document.getElementById(who+inning);
    let oldScore = parseInt(box.innerHTML);
    if(oldScore==0){
        return;
    }
    box.innerHTML = oldScore-1;

    box = document.getElementById(who+'R')
    oldScore = parseInt(box.innerHTML);
    box.innerHTML = oldScore-1;
});

let soundButton = document.getElementById('Sound');
soundButton.addEventListener('click',()=>{
    let sound = sounds[Math.floor(Math.random()*sounds.length)]
    let audio = new Audio("sounds/"+sound);
    audio.play();

    img.src = "images/"+images[Math.floor(Math.random()*images.length)]
})

let songButton = document.getElementById('Song');
songButton.addEventListener('click',()=>{
    let audio = new Audio("sounds/chickendance.mp3");
    audio.play();

    img.src = "images/sdchicken.jpg"
});