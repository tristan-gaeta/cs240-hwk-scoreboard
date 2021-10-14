/**
 * Scoreboard Homework
 * @author Tristan Gaeta
 */

// vars
 var who = 'Away';
 var inning = '1';

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