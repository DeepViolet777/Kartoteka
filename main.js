window.onload = function(){
    window.setInterval(function(){
     const date = new Date();
     let hours = date.getHours();
     let min = date.getMinutes();
     let sec = date.getSeconds();

     let myClock = hours + ":" + min +":"+ sec;
     document.querySelector(".clock").textContent = myClock;
    

    });

}