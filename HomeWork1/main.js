let button = document.getElementById("Button");
let counter = 0;

button.addEventListener("click", function() {
     alert("Ви натиснули кнопку!");
});

function OnMyInput(el){
    if(el.value =="Привет"){
        alert("Приветик!");
    }
}

function OnClickButton(el){
    counter++;
    el.innerHTML="Ви натиснули: " + counter;
}