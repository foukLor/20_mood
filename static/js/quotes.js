function setRandomeQuote(){
    $.getJSON("quotes.json" + '&callback=?',function(json){
        randomIndex = Math.floor(Math.random()*json.length)
         $("quote").text(json[randomIndex].phrase);
    })
}
var quote = $('p.quote');

$(document).ready(function(){
    setRandomeQuote();
});


$("next").click(setRandomeQuote);