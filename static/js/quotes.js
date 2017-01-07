function setRandomeQuote(){
    $.getJSON("static/quotes.json",function(json){
        randomIndex = Math.floor(Math.random()*json.length)
         $("#quote").text(json[randomIndex].phrase);
         $("#signature").text(json[randomIndex].signature);
    })
}

$(window).load(function(){
    setRandomeQuote();
});


$("#next").click(setRandomeQuote);