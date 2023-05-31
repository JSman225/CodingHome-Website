function displaySidebar(){
    document.getElementById('sidebar-container').style.display = "block";
    document.getElementById('sidebar-container').style.opacity = "1";
    document.getElementById('main-container').style.width ='80%';
    document.getElementById('main-container').style.float ='right';
    document.getElementById('main-container').style.marginRight ='5%';
}
function disableSidebar(){
    document.getElementById('sidebar-container').style.display = "none";
    document.getElementById('sidebar-container').style.opacity = "0";
    document.getElementById('main-container').style.width ='90%';
    document.getElementById('main-container').style.float ='unset';
    document.getElementById('main-container').style.marginRight ='0';
}
function yourAccount(){
    displaySidebar();
    document.getElementById("menu-element-1").style.opacity = "0";
    document.getElementById("menu-element-1").style.visibility = 'hidden';
    document.getElementById("menu-element-2").style.opacity = "0";
    document.getElementById("menu-element-2").style.visibility = 'hidden';
    document.getElementById("menu-element-3").style.opacity = "0";
    document.getElementById("menu-element-3").style.visibility = 'hidden';
    document.getElementById("menu-element-4").style.opacity = "0";
    document.getElementById("menu-element-4").style.visibility = 'hidden';
    document.getElementById('yourAccount').style.visibility = "visible";
    document.getElementById('yourAccount').style.opacity = "1";
}
function hideYourAccount(){
    document.getElementById('yourAccount').style.visibility = "hidden";
    document.getElementById('yourAccount').style.opacity = "0";
}
function home(){
    disableSidebar()
    hideYourAccount()
    document.getElementById("menu-element-1").style.opacity = "1";
    document.getElementById("menu-element-1").style.visibility = 'visible';
    document.getElementById("menu-element-2").style.opacity = "1";
    document.getElementById("menu-element-2").style.visibility = 'visible';
    document.getElementById("menu-element-3").style.opacity = "1";
    document.getElementById("menu-element-3").style.visibility = 'visible';
    document.getElementById("menu-element-4").style.opacity = "1";
    document.getElementById("menu-element-4").style.visibility = 'visible';
}

function greyBackground(){
    document.getElementById('greyBackground').classList.toggle("gone");
}
function username(){
    greyBackground()
    document.getElementById('changeUsername').classList.toggle("notGone");
}
function passoword(){
    greyBackground()
    document.getElementById('changePassword').classList.toggle("notGone");
}
function email(){
    greyBackground()
    document.getElementById('changeEmail').classList.toggle("notGone");
}
function picture(){
    greyBackground()
    document.getElementById('changeProfilePicture').classList.toggle("notGone");
}