const trigger = () => {
    // console.log("hello");
    // console.log(document.querySelector('#menu').classList.contains("fa-bars"));
    if(document.querySelector('#menu').classList.contains("fa-bars")){
        document.querySelector('.navbar').style.display = "block";
        document.querySelector('#menu').classList.remove("fa-bars");
        document.querySelector('#menu').classList.add("fa-times");
    }else{
        document.querySelector('.navbar').style.display = "none";
        document.querySelector('#menu').classList.remove("fa-times");
        document.querySelector('#menu').classList.add("fa-bars");
    }
}


// Typing Effect Start

var options = {
  strings: ["A Programmer" , "A Web Developer" , "An Engineer"],
  loop: true,
  typeSpeed: 50,
  backSpeed: 15,
  backDelay: 200,
};

var typed = new Typed('.typing', options);


// Typing Effect End

// <!-- tilt js effect starts -->
  // <!-- tilt js effect ends -->

setInterval(() => {
  if(window.scrollY>=400){
    // animation-name: comeFromLeft;
    document.querySelector('.aboutMe').style.animationName = "comeFromLeft";
    document.querySelector('.aboutMe').style.animationDuration = "4s";
  }
  if(window.scrollY>=800){
    document.querySelector('.skills_container').style.animationName = "comeFromRight";
    document.querySelector('.skills_container').style.animationDuration = "2s";
  }
  if(window.scrollY>=350){
    if(document.querySelector('.goTotop').classList.contains('hide')){
      document.querySelector('.goTotop').classList.remove('hide')
      document.querySelector('.link').classList.remove('hide')
    }
  }else{
    document.querySelector('.goTotop').classList.add('hide')
    document.querySelector('.link').classList.add('hide')
  }
}, 1000);


// Cursor 
var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');
var a = document.querySelectorAll('a');

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + 'px';
  cursorinner.style.top = y + 'px';
});

document.addEventListener('mousedown', function(){
  cursor.classList.add('click');
  cursorinner.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function(){
  cursor.classList.remove('click')
  cursorinner.classList.remove('cursorinnerhover')
});

a.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hover');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
  });
})