window.onload = function(){
    let wrapper=document.querySelector(".wrapper")
    let counter=0



    setInterval(slide, 5000)
    function slide(){
        // for (let radio of document.querySelectorAll('[type="radio"]')) {
        //     radio.checked = false;
        //   }   

        wrapper.style.left = `${counter*-100}%`;
        counter >= 2 ? counter = 0 : counter++ ? wrapper.style.transition="all linear 1s" : wrapper.style.transition="all linear 0.3s"
        // console.log(counter)
    }

    let btn = document.querySelector("#asd")
    document.querySelector("#asd").addEventListener('click', offset)
    function offset(e){
        // if(e.target.type === 'radio'){
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
        // }
    }

    // radioBtn1
    
    // for (let radio of document.querySelectorAll('[type="radio"]')) {
    //     console.log(radio)
    //     if(document.querySelector(".headerBackgroundA")){
    //         radio.checked = true;
    //     }    
    //     if(document.querySelector(".headerBackgroundB")){
    //         radio.checked = true;
    //     }  
    //     if(document.querySelector(".headerBackgroundC")){
    //         radio.checked = true;
    //     }  
    // }
}




