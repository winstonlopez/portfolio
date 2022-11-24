'use strict'

//code to put all nav li element inside a span then move the anchor tag outside
let list = navbar.querySelectorAll('li');
for(let i = 0; i < list.length; i++){
    let span = document.createElement('span');
    list[i].before(span);
    span.append(list[i]);
}

