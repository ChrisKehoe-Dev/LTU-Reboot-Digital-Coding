console.log('Hello')

let paragraphs = document.querySelectorAll('p');

console.log ( paragraphs )

let paragraph3 =  paragraphs[3]
    paragraph3.style.border = " 4px dashed navy ";
    paragraph3.style.padding = "20px";
    

let logo = document.querySelector('img')
    logo.setAttribute( 'src', 'https://images.pexels.com/photos/54306/underwater-divers-helmet-diver-historically-54306.jpeg' )
    
let lists = document.querySelectorAll('li');
    for (liIndex = 0; liIndex < lists.length; liIndex++){
        if(liIndex % 2 == 1 ) {lists[liIndex].style.color = 'red'}
        else {lists[liIndex].style.color = 'blue'}
    }