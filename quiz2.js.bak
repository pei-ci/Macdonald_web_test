var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://52.170.64.214/api/foodtype_en.php",
  "method": "GET",
  
}
$.ajax(settings).done(function (response) {
  console.log(response);
  $("#contain").append($("<img/>").attr("src",response[0].img ));
  $("#contain").append(response[0].name);
});

