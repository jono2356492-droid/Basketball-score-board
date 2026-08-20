let scoreHome = 0
let scoreGuest = 0
let countHome = document.getElementById("counthome")
let countGuest = document.getElementById("countguest")

function addOneHome(){
   scoreHome += 1
   countHome.innerText = scoreHome
}
function addTwoHome(){
   scoreHome += 2
   countHome.innerText = scoreHome
}
function addThreeHome(){
   scoreHome += 3
   countHome.innerText = scoreHome
}
function addOneGuest(){
   scoreGuest += 1
   countGuest.innerText = scoreGuest
}
function addTwoGuest(){
   scoreGuest += 2
   countGuest.innerText = scoreGuest
}
function addThreeGuest(){
   scoreGuest += 3
   countGuest.innerText = scoreGuest
}