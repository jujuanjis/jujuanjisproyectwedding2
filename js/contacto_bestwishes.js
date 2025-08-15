$( document ).ready(function() {

	$("#enviar_rsv_bestwishes").on("click", function(e){
		e.preventDefault();

		var error		= false;
		var msj 		= "";
		var tunombre 		= $("input[name='tunombre']").val();
		var mensaje 		= $("textarea[name='mensaje']").val();
		/*var telefono 		= $("input[name='telefono']").val();
		var asistencia 		= $("input[name='asistencia']").val();*/
		/*var asistencia  =$("input[name='asistencia']:checked").val();*/


		if(!error && tunombre == ""){			error = true;	msj = "El campo tunombre es requerido";	}
		if(!error && mensaje == ""){			error = true;	msj = "El campo mensaje es requerido";	}
		/*if(!error && telefono == ""){			error = true;	msj = "El campo telefono es requerido";	}
		if(!error && asistencia == ""){			error = true;	msj = "El campo asistencia es requerido";	}*/


		if(!error){

			var data = {};
			data.tunombre = tunombre;
			data.mensaje = mensaje;
			/*data.telefono = telefono;
			data.asistencia = asistencia;*/
			/*data.asistencia = asistencia;*/

			$.ajax({
				url: "_send_bestwishes.php",
				type: "POST",
				data: data,
				error: function(e){
					console.log(e);
					//alert("Error", "Experimenta");
				},
				success: function(result){
					console.log(result);
					alert("Tu mensaje ha sido enviado con éxito a los novios <3");
					$("input[name='tunombre']").val("");
					$("textarea[name='mensaje']").val("");
					/*$("input[name='telefono']").val("");
					$("input[name='asistencia']").val("");*/
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
