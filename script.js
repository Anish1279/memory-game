function playVideo(){
    const videoContainer = document.getElementById("video-container");
    const youtubeFrame = document.createElement('div');

    youtubeFrame.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/cScUz023JtQ?si=oMGC8PzmzYb1MfZl&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    videoContainer.appendChild(youtubeFrame);
    videoContainer.style.visibility = "visible"
}
const emojis=["😢","😢","🙂","🙂","👹","👹","😍","😍","❤️","❤️","💪","💪","🔥","🔥","🎃","🎃"];
        var shuf_emojis=emojis.sort(() =>(Math.random()>.5)?2:-1);
        for(var i=0;i<emojis.length;i++){
            let box=document.createElement('div')
            box.className='item';
            box.innerHTML=shuf_emojis[i];
            let popup=document.getElementById("popup")
              function openPopup(){
                  popup.classList.add("open-popup");
                 }
              function closepopup(){
              popup.classList.remove("open-popup");
              playVideo();
              }
                              
            box.onclick=function(){
                this.classList.add('boxOpen')
                setTimeout(function(){
                    if(document.querySelectorAll('.boxOpen').length>1){
                        if(document.querySelectorAll('.boxOpen')[0].innerHTML==document.querySelectorAll('.boxOpen')[1].innerHTML){
                            document.querySelectorAll('.boxOpen')[0].classList.add('boxMatch')
                            document.querySelectorAll('.boxOpen')[1].classList.add('boxMatch')
                            document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen')
                            document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen')
                            if(document.querySelectorAll('.boxMatch').length==emojis.length){
                             openPopup();
                            }
                        }
                         else{
                            document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen')
                            document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen')
                        }

                        
                    }
                },500)
            }
            document.querySelector('.game').appendChild(box);
        }
