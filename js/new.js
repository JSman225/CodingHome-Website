window.onscroll = function (e) {  
    if (document.documentElement.scrollTop > 0){
        document.getElementById('navbar').style.height = "80px";
    }
    if (document.documentElement.scrollTop == 0){
        document.getElementById('navbar').style.height = "96px";
    }
}
function arrow(){
    document.getElementById("section-2").scrollIntoView({
        behavior: "smooth"
    });
}
var open = false;
function menu(){
    if (!open){
        disableScroll();
        document.getElementById('menu').classList.remove("hidden");
        open = true;
    }
    else{
        enableScroll();
        document.getElementById('menu').classList.add("hidden");
        open = false;
    }
}
/*/////////////////////////////
    PREVENT USER SCROLLING
/////////////////////////////*/

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

  
// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}




