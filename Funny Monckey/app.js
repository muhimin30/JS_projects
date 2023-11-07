const openFace = document.querySelector('.open');
const closeFace = document.querySelector('.close');

//Add Event

openFace.addEventListener('click',function(){
    if(closeFace.classList.contains('close')){
        closeFace.classList.add('active');
        openFace.classList.remove('active');
    }
});
closeFace.addEventListener('click',function(){
    if(openFace.classList.contains('open')){
        openFace.classList.add('active');
        closeFace.classList.remove('active');
    }
})