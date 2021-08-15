const btn_on = document.querySelector('#on')
const btn_off = document.querySelector('#off')
const lamp = document.querySelector('.myimg')

const lampOn = ()=> lamp.src='img/lampada-on.png'
const lampOff= ()=> lamp.src='img/lampada-off.png'

btn_on.addEventListener('click', lampOn)
btn_off.addEventListener('click', lampOff)
lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseleave', lampOff)