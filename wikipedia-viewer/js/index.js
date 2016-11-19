$(function() {
  $('#bar').click(function() {
    $('#bar').hide().fadeOut(1000);
    $('#search_box').show().fadeIn(2000).focus();
    $('a,p').hide();
    $('.btn').show();
  });
  $('#clear').click(function() {
    $('#search_box').val('').focus();
  });
  $('#search_box').keypress(function(e) {
    if (e.which == 13) {
      getData();
    }
  });

  $('#search').click(function() {
    getData();
  });

  function getData() {
    $('.title ,.card').remove();
    var searchQuery = $('#search_box').val();
    $.getJSON('https://en.wikipedia.org/w/api.php?format=json&action=query&list=search&srsearch=' + searchQuery + '&utf8&callback=?', function(data) {
      console.log(data);
      var query = data.query.search;

      for (var i = 0; i < query.length; i++) {

        $('<div class="title"></div>')
          .wrapInner("<a href='http://en.wikipedia.org/wiki/" + encodeURIComponent(query[i].title) + " ' " + "target='_blank'>" + query[i].title + "  </a>").appendTo('body');
          

         $('<div>' + query[i].snippet + '</div>').appendTo('body').addClass('card');;

      }

    });
  }
});