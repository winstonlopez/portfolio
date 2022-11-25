'use strict'

//code to put all nav li element inside a span then move the anchor tag outside
let list = navbar.querySelectorAll('li');
for(let i = 0; i < list.length; i++){
    let span = document.createElement('span');
    list[i].before(span);
    span.append(list[i]);
}

//create event delegation to show/hide small menu

document.addEventListener('click', function(event){
    let id = event.target.closest('div').dataset.toggleId;
    if(!id){
         //if there is no dataset with toggleId attribute, check if there is a hidden attribute
         let menu = document.getElementById("small-screen-menu");
            if(!menu.hidden){
                menu.hidden = true;
            }
         return; 
        }
    let elem = document.getElementById(id);
    elem.hidden = !elem.hidden;
  

})