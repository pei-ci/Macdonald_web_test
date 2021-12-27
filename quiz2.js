/*var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://macdonald.eastus.cloudapp.azure.com/api/foodtype.php",
  "method": "GET",
  
}
$.ajax(settings).done(function (response) {
  console.log(response);
  $("#contain").append($("<img/>").attr("src",response[0].img ));
  $("#contain").append(response[0].name);
});*/
$.post({
        url:"https://pei-ci.github.io/Madonald2/quiz2.html",
        },function(jsonResult){
            //let result = JSON.parse(jsonResult);
            //if(result['sucess']==='true'){
                console.log(jsonResult[0].id);
				$("#contain").append($("<img/>").attr("src",jsonResult[0].img ));
				$("#contain").append(jsonResult[0].name);
        }
    );
