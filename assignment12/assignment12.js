

let a;
document.getElementById('rollButton').onclick=function(){
    a = Math.floor(Math.random() * 10) + 0;
    document.getElementById("alabel").innerHTML = a;

}

let b;
document.getElementById('roll').onclick=function(){
    b = Math.floor(Math.random() * 10) + 0;
    document.getElementById("blabel").innerHTML = b;

}

let c;
document.getElementById('scroll').onclick=function(){
    c = Math.floor(Math.random() * 10) + 0;
    document.getElementById("clabel").innerHTML = c;

}

let d;
document.getElementById('bro').onclick=function(){
    d = Math.floor(Math.random() * 10) + 0;
    document.getElementById("dlabel").innerHTML = d;
}

let e;
document.getElementById('br').onclick=function(){
    e = Math.floor(Math.random() * 10) + 0;
    document.getElementById("elabel").innerHTML = e;
}

let f;
document.getElementById('b').onclick=function(){
    f = Math.floor(Math.random() * 10) + 0;
    document.getElementById("flabel").innerHTML = f;
}

let g;
document.getElementById('g').onclick=function(){
    g = Math.floor(Math.random() * 10) + 0;
    document.getElementById("glabel").innerHTML = g;
}

let h;
document.getElementById('h').onclick=function(){
    h = Math.floor(Math.random() * 10) + 0;
    document.getElementById("hlabel").innerHTML = h;
}

let i;
document.getElementById('i').onclick=function(){
    i = Math.floor(Math.random() * 10) + 0;
    document.getElementById("ilabel").innerHTML = i;
}

let j;
document.getElementById('j').onclick=function(){
    j = Math.floor(Math.random() * 10) + 0;
    document.getElementById("jlabel").innerHTML = j;
}






window.onload = function () {
  
    var seconds = 00; 
    var tens = 00; 
    var appendTens = document.getElementById("tens")
    var appendSeconds = document.getElementById("seconds")
    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');
    var Interval ;
  
    buttonStart.onclick = function() {
      
      clearInterval(Interval);
       Interval = setInterval(startTimer, 10);
    }
    
      buttonStop.onclick = function() {
         clearInterval(Interval);
    }
    
  
    buttonReset.onclick = function() {
       clearInterval(Interval);
      tens = "00";
        seconds = "00";
      appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
    }
    
     
    
    function startTimer () {
      tens++; 
      
      if(tens <= 9){
        appendTens.innerHTML = "0" + tens;
      }
      
      if (tens > 9){
        appendTens.innerHTML = tens;
        
      } 
      
      if (tens > 99) {
        console.log("seconds");
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
      }
      
      if (seconds > 9){
        appendSeconds.innerHTML = seconds;
      }
    
    }
    
  
  }






