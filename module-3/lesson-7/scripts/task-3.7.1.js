const buttons = document.querySelectorAll('button.selection')

const allImages = document.querySelectorAll('main .image-selections .images');

function toggleActiveClass( active ) {
    buttons.forEach( function (button)  {
        button.classList.remove('active');
    });
    active.classList.add('active')

};

function toggleImages( dataclass ){
    if( dataclass === 'all') {
        allImages.forEach( function ( imgIndex) {
            imgIndex.style.display = 'flex';
        } );
    } else {
        allImages.forEach( function( imgIndex ) {
            if(imgIndex.dataset.class === dataclass) {
                imgIndex.style.display = 'flex';
            } else {
                imgIndex.style.display = 'none';
            }
        });
    }
};

buttons.forEach( function(button) {
    button.addEventListener('click', function() {
        toggleActiveClass(button)
        toggleImages(button.dataset.class);
        })
});
