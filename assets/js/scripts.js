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
    console.log(window.scrollY);
    document.querySelector('.aboutMe').style.animationName = "comeFromLeft";
    document.querySelector('.aboutMe').style.animationDuration = "10s";
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

