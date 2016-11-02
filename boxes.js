$('document').ready(function() {
  alert('Ready for DOM Manipulation');
  $('#secretBox').css('background', 'white');
  $('#secretBox').append("<h1>This is the Secret Box</h1>");
  $('#row1 > .box').addClass('boxType3');
  $('#row3 >.box:last-child').hide();
  $('.boxType1').css("background-color", 'white');
  $('#row2 > .box:first-child')

});
