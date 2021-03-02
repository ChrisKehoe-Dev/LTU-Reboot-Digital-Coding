let gLink = document.querySelector('a');

gLink.addEventListener('click', function(event) {
    event.preventDefault();
    console.log(event);
    alert('This link is disabled')
})