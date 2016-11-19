/**
* This function makes a call to an api to retrieve a quote and calls the specified callback if the request is successful
* @param successCb the callbak to be called if the data is retrieved successfully
*/
function getData(successCb) {
  $.ajax({
    headers: {
      'X-Mashape-Key': 'FiFQuOefUWmshkF7RgU7quiwj4Axp1SyuvmjsneuFASeDltMch',
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
    success: successCb
  });
}
$(function() {
  $('#new_quote').click(function() {
    //call the getData function and pass an anonymous function as a parameter
    getData(function(res) {
      console.log('result', res)
      var randomColor = "#" + Math.random().toString(16).substr(-6);
      //change colors
      $('body').css('backgroundColor', randomColor);
      $('.color').css('color',randomColor);
      $('.btn-custom').css('backgroundColor',randomColor);
      var q = JSON.parse(res);
      var currentQuote = q.quote;
      var currentAuthor = q.author;
      $('#placeholder').html('<blockquote style="font-size:30px">' +currentQuote + '</blockquote>' + '<p style="text-align:right">' +'-'+ currentAuthor + '</p>'); //append the retrieved quote to the page
    })
  });
});