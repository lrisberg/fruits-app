$(document).ready(() => {

  $('form').submit((event) => {
    event.preventDefault();

    let fruitName = $('input').val();

    var request = {
      contentType: 'application/json',
      data: JSON.stringify({
        fruitName: fruitName
      }),
      dataType: 'json',
      type: 'POST',
      url: '/fruits'
    };

    $.ajax(request)
      .done(() => {
        window.location.href = 'fruits';
      })
      .fail(() => {
        console.error('FAIL');
      });
  });
})
