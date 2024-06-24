links = {
    "0" : "/article/fire-alarm.html",
    "1" : "/article/horse-prowess.html",
    "2" : "/article/jwtf.html",
    "3" : "/article/bot-chelors-degree.html",
    "4" : "/article/markdown-mayhem.html",
    "5" : "/article/east-west-client.html",
    "6" : "/article/automagical-bug-net.html"
}

var main = document.getElementsByClassName( "main-card" )[ 0 ]
var cards = document.getElementsByClassName( "card" )

// Add Eventlisteners to Cards
for (let i = 0; i < cards.length; i++) {
    let _card = cards[ i ];
    _card.addEventListener( "click", function() {
        let move_to = links[ _card.id ];
        window.location = move_to
    } )
}

// Add Eventlisteners to the main_card
main.addEventListener( "click", function() {
    let move_to = links[ main.id ];
    window.location = move_to
})