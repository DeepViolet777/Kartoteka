window.onload = function () {
    window.setInterval(function () {
        const date = new Date();
        let time = new Date().toLocaleTimeString("ru-RU", {
          hour12: false,          
        });
     
        document.querySelector(".clock").textContent = time;
    });
}