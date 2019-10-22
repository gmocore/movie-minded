$('#submit').click(e => {
  e.preventDefault();
  $.ajax({
    type: 'POST',
    url: '/test',
    data: {
      movie_title: $('#add-movie')
        .val()
        .trim()
    }
  })
    .then(result => {
      $('#add-movie').val('');
      $('#error-alert').removeClass('alert-warning');
      $('#error-alert').addClass('alert-success show');
      $('.alert-message').text(`${result.movieTitle} added to on deck`);
      setTimeout(() => {
        $('#error-alert').removeClass('show alert-success');
      }, 2000);
    })
    .catch(error => {
      if (error.status === 422) {
        $('.alert-message').text(error.responseJSON.errors[0].msg);
        $('#error-alert').addClass('show alert-warning');
        setTimeout(() => {
        $('#error-alert').removeClass('show');
        
        }, 3000);
      }
    });
});

$('#nav-search-btn').click(e => {
  e.preventDefault();
  $.ajax({
    type: 'POST',
    url: '/test',
    data: {
      movie_title: $('#nav-search')
        .val()
        .trim()
    }
  })
    .then(result => {
      $('#nav-search').val('');
    })
    .catch(error => {
      if (error.status === 422) {
        $('.alert-message').text(error.responseJSON.errors[0].msg);
        $('#error-alert').addClass('show alert-warning');
        setTimeout(() => {
        $('#error-alert').removeClass('show');
        
        }, 3000);
      }
    });
});

$('.watched').click(e => {
  $.ajax({
    type: 'POST',
    url: `/movies/watched/${e.target.id}`,
    data: {
      id: e.target.id
    }
  }).then(result => {
    location.reload();
  });
});

$('.delete').click(e => {
  $.ajax({
    type: 'DELETE',
    url: `/movies/unwatched/${e.target.id}`,
    data: {
      id: e.target.id
    }
  }).then(result => {
    location.reload();
  });
});

