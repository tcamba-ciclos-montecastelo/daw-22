var giveMePi = document.getElementById('show-pi')
var app = document.getElementById('app')
var colorChanger = document.getElementById('color-changer')
var colorInput = document.getElementById('color-value')
var message = document.getElementById('message')
var clock = document.getElementById('clock')

var colorChangeHistory = []
var time = new Date()
clock.innerHTML = time.toTimeString().split(' ')[0]

giveMePi.addEventListener('click', (e) => {
    message.innerHTML = Math.PI
})

function changeColor(color){
    clock.style.color = color
    console.log(color)
    colorChangeHistory.push(color)
}

colorChanger.addEventListener('click', () => {
    changeColor(colorInput.value)
    colorInput.value = ''
})

colorInput.addEventListener('keydown', (e) => {
  if(e.key === "Enter"){
    changeColor(colorInput.value)
    colorInput.value = ''
  }
})

function update(){
    time = new Date()
    clock.innerHTML = time.toTimeString().split(' ')[0]
    //console.log('Color Changed History: ', colorChangeHistory.length)
}

window.setInterval(update, 1000)

//HW
//make a new area to show color changed history and delete repeated color
