var display = document.querySelector(".display")
var startBtn = document.querySelector("#start-btn")
var resetBtn = document.querySelector("#reset-btn")
var intervalList = document.querySelector("#interval-list")
var start = false;
var [ hh, mm, ss, jj ] =  [ 0 ,0, 0, 0 ]
var interval = 0

function start1(){
    if(start == false){
        interval =  setInterval(countStart,15)
        startBtn.innerHTML = `Stop` 
        startBtn.classList.remove("start-btn")
        startBtn.classList.add("stop-btn")
        start = true
    }else if(start == true){
        startBtn.innerHTML = `Start` 
        startBtn.classList.remove("stop-btn")
        console.log("Hellooooo 222")
        clearInterval(interval)
        display.innerHTML = (`${hh} : ${mm} : ${ss} : ${jj}`)
        intervalList.innerHTML += `<p class="interval-list" >  ${hh} : ${mm} : ${ss} : ${jj}  </p> `
        start = false
    }
}
function reset(){
    [ hh, mm, ss , jj ] =  [ 0 ,0, 0, 0 ]
    clearInterval(interval)
    display.innerHTML = (`${hh} : ${mm} : ${ss} : ${jj}`)
    intervalList.innerHTML = ""

}
function countStart(){
            jj++
            if(jj>99){
            jj = 0
            ss++
          if(ss>59){
            ss = 0
            mm++
            if(mm>59){
            mm = 0
            hh++
            }
      }
    }
      display.innerHTML = (`${hh} : ${mm} : ${ss} : ${jj}` )
}