$( document ).ready(function() {

	$("#enviar_cancion").on("click", function(e){
		e.preventDefault();

		var error		= false;
		var msj 		= "";
		var cancion 		= $("input[name='cancion']").val();
		var dedicatoria 		= $("input[name='dedicatoria']").val();
		


		if(!error && cancion == ""){			error = true;	msj = "El campo cancion es requerido";	}
		if(!error && dedicatoria == ""){			error = true;	msj = "El campo # de dedicatoria es requerido";	}
		


		if(!error){

			var data = {};
			data.cancion = cancion;
			data.dedicatoria = dedicatoria;
			

			$.ajax({
				url: "_send_cancion.php",
				type: "POST",
				data: data,
				error: function(e){
					console.log(e);
					//alert("Error", "Experimenta");
				},
				success: function(result){
					console.log(result);
					alert("Tus canción se ha solicitado con éxito");
					$("input[name='cancion']").val("");
					$("input[name='dedicatoria']").val("");
					
				}
			});

		}else{
			alert("Favor de llenar todos los campos", msj);
		}



	});


	jQuery('#qbootstrap-header').css("background-color", "transparent");
  jQuery(window).scroll(function() {
      if (jQuery(window).scrollTop() > 0) {
          jQuery('#qbootstrap-header').css("background-color", "rgba(0,0,0,0.4)");
					jQuery('#qbootstrap-header').css("margin-top", "0");
      } else {
          jQuery('#qbootstrap-header').css("background-color", "transparent");
					jQuery('#qbootstrap-header').css("margin-top", "20px");
      }
	 });
});
