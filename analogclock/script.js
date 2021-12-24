// CALL A CERTAIM FUNCTION EVERY SECOND
setInterval(setClock, 1000)

// SET DATA ATTRIBUTES FROM HTML
const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

// FUNCTION TO SET CLOCK
function setClock() {
    const currentDate = new Date() // new date Constructor
    const secondsRatio = currentDate.getSeconds() / 60 // SECONDS RATIO IS % OF A MIN EG: .5 = 30 SEC .75 = 45 SEC
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
}
    
// Function to Set the Rotation and Rotation properly in CSS

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

// Set Clock as Soon as Page Loads
setClock()