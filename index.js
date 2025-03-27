const decreasebttn = document.getElementById("DecreaseBTTN");
const resetbttn = document.getElementById("ResetBTTN");
const increasebttn = document.getElementById("IncreaseBTTN");
const countlebel = document.getElementById("countlebel");
let count = 0;

increasebttn.onclick = function(){
    count++;
    countlebel.textContent = count;
}

decreasebttn.onclick = function(){
    count--;
    countlebel.textContent = count;
}

resetbttn.onclick = function(){
    count = 0;
    countlebel.textContent = count;
}
