window.onload = function(){
    let wrapper=document.querySelector(".wrapper")
    let counter=0

    setInterval(slide, 5000)
    function slide(){

        wrapper.style.left = `${counter*-100}%`;
        counter >= 2 ? counter = 0 : counter++ ? wrapper.style.transition="all linear 1s" : wrapper.style.transition="all linear 0.3s"
    }

    let btn = document.querySelector("#asd")
    document.querySelector("#asd").addEventListener('click', offset)
    function offset(e){
            if (e.target.id === 'radioBtn1') {
                counter = 0;
                wrapper.style.left = `${counter*-100}%`
                wrapper.style.transition="all linear 1s"
            }
            if (e.target.id === 'radioBtn2') {
                counter = 1;
                wrapper.style.left = `${counter*-100}%`
                wrapper.style.transition="all linear 1s"
            }
            if (e.target.id === 'radioBtn3') {
                counter = 2;
                wrapper.style.left = `${counter*-100}%`
                wrapper.style.transition="all linear 1s"
            }
    }
}





