url = "https://dog.ceo/api/breeds/image/random";

function fotoperro(){
	fetch(url)
	.then(function(response){ 
		return response.json();
	})
	.then(function(data) {
		mostrarperro(data.message)
	})
	.catch(function(error){
		console.log("error: "+ error);
	});
}

function mostrarperro(foto_url){
	document.getElementById("foto").src = foto_url;
}