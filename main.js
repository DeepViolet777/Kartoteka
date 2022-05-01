window.onload = function () {
  window.setInterval(function () {
    const date = new Date();
    let time = new Date().toLocaleTimeString("ru-RU", {
      hour12: false,
    });

    document.querySelector(".clock").textContent = time;
  });


  let btns = document.getElementsByClassName('more-arrow_btn');
  //console.log(btns)

  /*btns.forEach(btn => {
    btn.addEventListener('click', function () {
      btn.classList.toggle('btn_active');
    });
  });*/
for (let i = 0; i < btns.length; i++) {
   btns[i].addEventListener('click', function () {
    
  this.classList.toggle('btn_active');

  let docBtn = this.parentNode.querySelector('.document-btn');
  docBtn.classList.toggle('document-btn_active');
  console.log(docBtn)

  let names = this.parentNode.querySelector('.company-old_names')
  if (names.style.maxHeight){
    names.style.maxHeight = null;
  } else {
    names.style.maxHeight = names.scrollHeight + 'px';
  }
 
    //let names = document.querySelector('company-old_names')
   });
  };

};