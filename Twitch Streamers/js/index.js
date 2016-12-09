$(document).ready(function() {
  var status, checker, link;

  function getData(channel) {
    $.ajax({
      type: 'GET',
      url: 'https://api.twitch.tv/kraken/channels/' + channel,
      headers: {
        'Client-ID': '8cqljyjng93j6den3jpyya49gv4a8y3'
      },
      success: function(data) {
        console.log(data);
        checker = checkOnline(data);
        if (data.display_name === 'ESL_SC2') {
          esl(checker, data)
        } else if (data.display_name === "FreeCodeCamp") {
          fcc(checker, data);
        } else {
          test(checker, data);
        }
      }
    });

  }
  getData('esl_sc2');
  getData('freecodecamp')
  getData('test');

  function checkOnline(channel) {
    if (channel.status == null) {
      status = 'offline'
    } else {
      status = 'online'
    }
    return status;
  }

  function esl(channel, data) {
    styles();
    if (channel == 'online') {
      $('span.eslc').append(data.status);
       $('.e').wrapInner('<a href="'+data.url+'"target="_blank"/>');
    } else
      $('span.eslc').append('Offline');
    
    $('.e').wrapInner('<a href="'+data.url+'"target="_blank"/>');

  }

  function fcc(channel, data) {
    styles();
    if (channel == 'online') {
      $('span.freecc').append(data.status);
       $('.f').wrapInner('<a href="'+data.url+'"target="_blank"/>');
    } else
      $('span.freecc').append('Offline');
  }

  function test(channel, data) {
    styles();
    if (channel == 'online') {
      $('span.test').append(data.status);
       $('.t').wrapInner('<a href="'+data.url+'"target="_blank"/>');
    } else
      $('span.test').append('Offline');
  }

  function styles() {
    $('.test,.freecc,.eslc').addClass('info');
  }
});