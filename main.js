		 let clearInputField = document.querySelector('#clearInputField');
		 let image_url = document.querySelector('#link');
		
		 
		 function setImage(){
		 	if (image_url.value != "") {
		 		clearInputField.style.display = "block";
		 		let image = document.querySelector('#image');
		 	    image.src = image_url.value;
		 	}else{
		 		alert("Masukan URL IMG nya Cuy")
		 	}
		 }


		 function clearField(){
		 	image_url.value = "";
		 	clearInputField.style.display = "none";
		 }

         
		 function Download_btn(){
		 	let url = image_url.value;
		 	if (url != "") {
		 	   let filename = url.substring(url.lastIndexOf('/')+1);
		 	   saveAs(url, filename);
		 	}else{
		 		alert("Masukan URL IMG nya Cuy")
		 	}
		 	
		 }