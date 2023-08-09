
function text(){
  document.getElementById("parg");
}
  function ChangeText(){
    let text = document.getElementById("parg1");
    text.innerText = "with beautiful flowers and good smell";
  }
function inFontSize(){
    let size = 45;
    let text = document.getElementById("parg1");
    text.style.fontSize = "20px";
  }
  function deFontSize(){
    let text = document.getElementById("parg1");
    text.style.fontSize = "10px";
  }

  
  function changeTColor(){
    let pargtext = document.getElementById("parg1");
    pargtext.style.backgroundColor = "LavenderBlush";
    pargtext.style.color = "LightBlue";

  }
  
  
  function changeImg(a){
    let img = document.getElementById("img");
    if (img.src.match("./img/f1.jpg")) {
        img.src = "./img/f2.jpg";
    }else{
        img.src = "./img/f1.jpg"
    }
    
}

function text(){
    let date = new Date();
    alert(date);
}

function Massage() {
    let mass = prompt("Don't give up");
    let parg3 = document.getElementById("parg3");
    parg3.innerText = mass
}