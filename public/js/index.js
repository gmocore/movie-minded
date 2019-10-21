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
      $('.added-movie-text').text('movie added on deck')
      setTimeout(() => {
      $('.added-movie-text').text('')
        
      }, 2000);
    })
    .catch(error => console.log(error));
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
      location.assign('/movies/unwatched');
    })
    .catch(error => console.log(error));
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
