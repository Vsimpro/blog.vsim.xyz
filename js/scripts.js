links = {
    "0" : "/article/fire-alarm.html",
    "1" : "/article/horse-prowess.html",
    "2" : "/article/jwtf.html",
    "3" : "/article/bot-chelors-degree.html",
    "4" : "/article/fire-alarm.html",
    "5" : "/article/markdown-mayhem.html"
}

var main = document.getElementsByClassName( "main-card" )[ 0 ]
var cards = document.getElementsByClassName( "card" )

for (let i = 0; i < cards.length; i++) {
    let _card = cards[ i ];
    _card.addEventListener( "click", function() {
        let move_to = links[ _card.id ];
        window.location = move_to
    } )
}

main.addEventListener( "click", function() {
    let move_to = links[ main.id ];
    window.location = move_to
})