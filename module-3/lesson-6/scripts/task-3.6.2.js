let domPara = document.querySelector('#domTest');

let paragraph = document.createElement('p');

let pText = document.createTextNode("Hey, how you doing, sorry you cant get through, if you leave your name and your number, I'll get back to you");

paragraph.appendChild( pText);

domPara.appendChild(paragraph);
