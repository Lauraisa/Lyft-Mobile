$(document).ready(function() {
  $("#countries").msDropdown();
 
  $("#countries").change(function () {
    if ($(this).val() === 'peru' ){
      $('#celInp').val('+51');
      }
    else if ($(this).val() === 'mexico' ){
      $('#celInp').val('+52');
      }
    else if ($(this).val() === 'colombia' ){
      $('#celInp').val('+57');
    }
    else {
      ($(this).val() === 'eu')
      $('#celInp').val('+1');
      }
    })
  });