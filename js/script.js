let keybord=Array.from(document.querySelectorAll(".insid-piano>li"));
let audio=new Audio()
const playtune =(key)=>{
    audio.src=`tunes/${key}.wav`
    audio.play()
}
keybord.map((elem)=>{
    elem.addEventListener("click",()=>{
      let key = elem.getAttribute("data-key");
      console.log(key);
      playtune(key)
    })
})