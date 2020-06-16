let images = document.getElementsByTagName('a');

$('.myInput').on('keyup', function() {
  let search = $(".myInput").val().toLowerCase();
  for (var i = 0; i<images.length; i++) {
    let description = $('a').eq(i).attr("title");
  if (description.toLowerCase().indexOf(search) > -1) 
      {
    images[i].style.display =""; 
    }
  else {
      images[i].style.display = "none";
    }
  }
});

  
