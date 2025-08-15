$( document ).ready(function() {

	$("#enviar_rsv_transporte").on("click", function(e){
		e.preventDefault();

		var error		= false;
		var msj 		= "";
		var nombre 		= $("input[name='nombre']").val();
		var personas 		= $("input[name='personas']").val();
		var telefono 		= $("input[name='telefono']").val();
		var asistencia 		= $("input[name='asistencia']").val();
		/*var asistencia  =$("input[name='asistencia']:checked").val();*/


		if(!error && nombre == ""){			error = true;	msj = "El campo nombre es requerido";	}
		if(!error && personas == ""){			error = true;	msj = "El campo # de personas es requerido";	}
		if(!error && telefono == ""){			error = true;	msj = "El campo telefono es requerido";	}
		if(!error && asistencia == ""){			error = true;	msj = "El campo asistencia es requerido";	}


		if(!error){

			var data = {};
			data.nombre = nombre;
			data.personas = personas;
			data.telefono = telefono;
			data.asistencia = asistencia;
			/*data.asistencia = asistencia;*/

			$.ajax({
				url: "_send_transporte.php",
				type: "POST",
				data: data,
				error: function(e){
					console.log(e);
					//alert("Error", "Experimenta");
				},
				success: function(result){
					console.log(result);
					alert("Tus datos han sido enviados con éxito");
					$("input[name='nombre']").val("");
					$("input[name='personas']").val("");
					$("input[name='telefono']").val("");
					$("input[name='asistencia']").val("");
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
