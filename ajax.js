const  xhr = new XMLHttpRequest();

let submit=document.getElementById("btn");
submit.onclick =function (){
	let VAL=document.getElementById("search").value;

	xhr.open("GET","https://www.omdbapi.com/?t="+VAL+"&apikey=d4a3b67c");
	xhr.onloadend = postAjaxFunction;
	xhr.send()
};

let postAjaxFunction = function () {
    if (xhr.status === 200) {
   	let response = JSON.parse(xhr.responseText);
        console.log(response);
        
        let Moviename=document.getElementById("Moviename" );
 		Moviename.innerHTML= "movie name-"+response.Title ;
 		
 		let Director_name=document.getElementById("Director_name" );
        Director_name.innerHTML="Director name-" +response.Director;
        
        let year=document.getElementById("year" );
        year.innerHTML= "Rileej year-" +response.Year;
        
        let Rating=document.getElementById("Rating" );
        Rating.innerHTML="Rating" +response.Ratings[0].Value;
    } else {
    
    }
};

