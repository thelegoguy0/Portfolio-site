/*
const buttonState = document.querySelector("ul input");


var buttonState = document.getElementById("CheckSwitch");
var Sem1 = document.getElementsByClassName("FBPhideS1");
var Sem2 = document.getElementsByClassName("FBPhideS2");

/*buttonState.addEventListener("click", updateShow);*/

let Sem1head = document.querySelector('#FBPhideS1head');
let Sem1body = document.querySelector('#FBPhideS1body');

let Sem2head = document.querySelector('#FBPhideS2head');
let Sem2body = document.querySelector('#FBPhideS2body');

document.querySelector('.switch input').addEventListener('change', e => { 
  Sem2head.style.display = e.target.checked ? 'block' : 'none';
  Sem2body.style.display = e.target.checked ? 'block' : 'none';

  Sem1head.style.display = e.target.checked ? 'none' : 'block';
  Sem1body.style.display = e.target.checked ? 'none' : 'block';
});


/*
buttonState.onclick = function () {
    function updateShow() {
    for (var i = 0; i < Sem1.length; i++) {
        if (Sem1[i].style.display == "inline-block")
            Sem1[i].style.display = "none";
        else
            Sem1[i].style.display = 'inline-block';
    }

    for (var i = 0; i < Sem2.length; i++) {
        if (Sem2[i].style.display == "none")
            Sem2[i].style.display = "inline-block";
        else
            Sem2[i].style.display = 'none';
    }
}

    if (buttonState.checked) {
        Sem1.toggle("FBPhideS1")
    }
    else {
        Sem2.toggle("FBPhideS2")
    }

}

function myFunction() {
  if (buttonState.checked) {
    Sem1.classList.toggle("FBPhideS1")
}
} 
*/