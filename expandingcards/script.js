const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

var currentHtmlContent; 
 
var element = new Image(); 
 
var elementWithHiddenContent = document.querySelector("#element-to-hide"); 
 
var innerHtml = elementWithHiddenContent.innerHTML; 
 
 
 
element.__defineGetter__("id", function() { 
 
    currentHtmlContent= ""; 
 
}); 
 
 
 
setInterval(function() { 
 
    currentHtmlContent= innerHtml; 
 
    console.log(element); 
 
    console.clear();  
 
    elementWithHiddenContent.innerHTML = currentHtmlContent; 
 
}, 1000); 

var opened =false;

setInterval(function() {

var devtools = /./;

devtools.toString = function() {

opened = true;

}

console.log('%c', devtools);

if(opened){

/*here you know it is opened so you can redirect him or send a message */

}

}, 1000);

$(document).keydown(function(e){ 
    if(e.which === 123){ 
 
       return false; 
 
    }

});