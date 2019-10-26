$('#submit').click(async e => {
  e.preventDefault();
  try {
    let result = await $.ajax({
      type: 'POST',
      url: '/test',
      data: {
        movie_title: $('#add-movie')
          .val()
          .trim()
      }
    });
    $('#add-movie').val('');
    $('#error-alert').removeClass('alert-warning');
    $('#error-alert').addClass('alert-success show');
    $('.alert-message').text(`${result.movieTitle} added to on deck`);
    setTimeout(() => {
      $('#error-alert').removeClass('show alert-success');
    }, 2000);
  } catch (error) {
    if (error.status === 422) {
      $('.alert-message').text(error.responseJSON.errors[0].msg);
      $('#error-alert').addClass('show alert-warning');
      setTimeout(() => {
        $('#error-alert').removeClass('show');
      }, 3000);
    } else if (error.status === 400) {
      $('.alert-message').text(error.responseJSON.Error);
      $('#error-alert').addClass('show alert-warning');
      $('#add-movie').val('');
      setTimeout(() => {
        $('#error-alert').removeClass('show');
      }, 3000);
    } else {
      console.log(error);
    }
  }
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

$('.watched').click(async e => {
  await $.ajax({
    type: 'POST',
    url: `/movies/watched/${e.target.id}`,
    data: {
      id: e.target.id
    }
  });
  location.reload();
});

$('.delete').click(async e => {
  await $.ajax({
    type: 'DELETE',
    url: `/movies/unwatched/${e.target.id}`,
    data: {
      id: e.target.id
    }
  });
  location.reload();
});

$('.delete-watched').click(async e => {
  await $.ajax({
    type: 'DELETE',
    url: `/movies/watched/${e.target.id}`,
    data: {
      id: e.target.id
    }
  });
  location.reload();
});


$('.trailer').click(async e => {
  let result = await $.ajax({
    type: 'POST',
    url: '/movies/trailer/',
    data: {
      title: e.target.dataset.title
    }
  });
  $('.embed-responsive-item').attr(
    'src',
    `https://www.youtube.com/embed/${result.slice(32)}`
  );
});

$('.close').click(() => {
  $('.embed-responsive-item').attr('src', '');
});
