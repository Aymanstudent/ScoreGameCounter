
let plusOneHome = document.getElementById("add-one-home-btn")
let plusTwoHome = document.getElementById("add-two-home-btn")
let plusThreeHome = document.getElementById("add-three-home-btn")

let plusOneGuest = document.getElementById("add-one-guest-btn")
let plusTwoGuest = document.getElementById("add-two-guest-btn")
let plusThreeGuest = document.getElementById("add-three-guest-btn")

let homeScore = document.getElementById("homeScore")
let guestScore = document.getElementById("guestScore")
let counterHome = 0
let counterGuest = 0

    plusOneHome.addEventListener('click', function (){
        counterHome += 1
        homeScore.textContent = counterHome
    })

    plusOneGuest.addEventListener('click', function (){
        counterGuest += 1
        guestScore.textContent = counterGuest
    })

    plusTwoHome.addEventListener('click', function (){
        counterHome += 2
        homeScore.textContent = counterHome
    })

    plusTwoGuest.addEventListener('click', function (){
        counterGuest += 2
        guestScore.textContent = counterGuest
    })

    plusThreeHome.addEventListener('click', function (){
        counterHome += 3
        homeScore.textContent = counterHome
    })

    plusThreeGuest.addEventListener('click', function (){
        counterGuest += 3
        guestScore.textContent = counterGuest
    })

