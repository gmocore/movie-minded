

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

$('#nav-search-btn').click(async e => {
  e.preventDefault();
  try {
    await $.ajax({
      type: 'POST',
      url: '/test',
      data: {
        movie_title: $('#nav-search')
          .val()
          .trim()
      }
    });
    $('#nav-search').val('');
    location.assign('/movies/unwatched');
  } catch (error) {
    if (error.status === 422) {
      $('.alert-message').text(error.responseJSON.errors[0].msg);
      $('#error-alert').addClass('show alert-warning');
      setTimeout(() => {
        $('#error-alert').removeClass('show');
      }, 3000);
    }
  }
});

$('.watched').click(e => {
  $.ajax({
    type: 'POST',
    url: `/movies/watched/${e.target.id}`,
    data: {
      id: e.target.id
    }
  }).then(() => {
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
  }).then(() => {
    location.reload();
  });
});

$('.trailer').click(e => {
  $.ajax({
    type: 'POST',
    url: '/movies/trailer/',
    data: {
      title: e.target.dataset.title
    }
  }).then(result => {
    $('.embed-responsive-item').attr('src', `https://www.youtube.com/embed/${result.slice(32)}`);
  });
});

$('.close').click(() => {
  $('.embed-responsive-item').attr('src', '');

});

