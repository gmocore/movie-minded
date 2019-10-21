$("#submit").click(e => {
  e.preventDefault();
  $.ajax({
    type: "POST",
    url: "/test",
    data: {
      movie_title: $("#add-movie")
        .val()
        .trim()
    }
  })
    .then(result => {
      console.log(result);
      $("#add-movie").val("");
      $('#error-alert').removeClass('alert-warning');
      $('#error-alert').addClass('alert-success show')
      $('.alert-message').text(`${result.movieTitle} added to on deck`);
      setTimeout(() => {
        $('#error-alert').removeClass('show alert-success');
      }, 2000);
    })
    .catch(error => {
      console.log(error.responseJSON.errors[0].msg);
      if (error.status === 422) {
        $('.alert-message').text(error.responseJSON.errors[0].msg)
        $('#error-alert').addClass('show alert-warning');
        setTimeout(() => {
        $('#error-alert').removeClass('show');
        
        }, 3000);
      }
    });
});

$("#nav-search-btn").click(e => {
  e.preventDefault();
  $.ajax({
    type: "POST",
    url: "/test",
    data: {
      movie_title: $("#nav-search")
        .val()
        .trim()
    }
  })
    .then(result => {
      console.log(result);
      $("#nav-search").val("");
    })
    .catch(error => {
      console.log(error);
      if (error.status === 422) {
        $('.alert-message').text(error.responseJSON.errors[0].msg)
        $('#error-alert').addClass('show alert-warning');
        setTimeout(() => {
        $('#error-alert').removeClass('show');
        
        }, 3000);
      }
    });
});

$(".watched").click(e => {
  console.log(e.target.id);
  $.ajax({
    type: "POST",
    url: `/movies/watched/${e.target.id}`,
    data: {
      id: e.target.id
    }
  }).then(result => {
    console.log(result);
    location.reload();
  });
});

$(".delete").click(e => {
  console.log(e.target.id);
  $.ajax({
    type: "DELETE",
    url: `/movies/unwatched/${e.target.id}`,
    data: {
      id: e.target.id
    }
  }).then(result => {
    console.log(result);
    location.reload();
  });
});

$(".delete-watched").click(e => {
  console.log(e.target.id);
  $.ajax({
    type: "DELETE",
    url: `/movies/watched/${e.target.id}`,
    data: {
      id: e.target.id
    }
  }).then(result => {
    console.log(result);
    location.reload();
  });
});
