

$('#submit').click(e => {
  e.preventDefault();
  $.ajax({
    type: 'POST',
    url: '/test',
    data: {
      movie_title:$('#add-movie').val().trim()
    }
  })
  .then(result => console.log(result))
  .catch(error => console.log(error))
});
