$( document ).ready(function() {

	$("#enviar_rsv").on("click", function(e){
		e.preventDefault();

		var error		= false;
		var msj 		= "";
		var flag_max    =0;
		var flag_min    =0;
		var nombre 		= $("input[name='nombre']").val();
		var personas 		= $("#personasfield").attr("value");;
		var telefono 		= $("input[name='telefono']").val();
		var alergias 		= $("input[name='alergias']").val();
		var asistencia_evento1  =$("input[name='asistencia_evento1']:checked").val();
		var asistencia_evento2  =$("input[name='asistencia_evento2']:checked").val();
		var idinvitado  =$("input[name='idinvitados']").val();
		//console.log(idinvitado);
		



		if(!error && nombre == ""){			error = true;	msj = "El campo nombre es requerido";	}
		if(!error && personas == 0){			error = true;	msj = "El campo # de personas es requerido";	}
		if(!error && telefono == ""){			error = true;	msj = "El campo telefono es requerido";	}
		if(!error && alergias == ""){			error = true;	msj = "El campo alergias es requerido";	}
		if(!error && asistencia_evento1 == undefined){			error = true;	msj = "El campo de asistencia EVENTO1 es requerido";	}
		if(!error && asistencia_evento2 == undefined){			error = true;	msj = "El campo de asistencia EVENTO2 es requerido";	}
		

		if(personas!=''){
			max=$("#personas").attr('max');
			min=1;
			if(personas>max){
				error=true;
				msj="El maximo de personas asignadas es de "+max;
				flag_max=1;
			}
			if(personas<min){
				error=true;
				msj="El minimo de personas es "+min;		
				flag_min=1;		
			}

		}

		if(!error){

			var data = {};
			data.nombre = nombre;
			data.personas = personas;
			data.telefono = telefono;
			data.alergias = alergias;
			data.asistencia_evento1 = asistencia_evento1;
			data.asistencia_evento2 = asistencia_evento2;
			data.idinvitado=idinvitado;

			$.ajax({
				url: "_send.php",
				type: "POST",
				data: data,
				error: function(e){
					console.log(e);
					//alert("Error", "Experimenta");
				},
				success: function(result){
					//console.log(result);
					alert("Tus datos han sido enviados con éxito");
					$("input[name='nombre']").val("");
					$("input[name='personas']").val("");
					$("input[name='telefono']").val("");
					$("input[name='alergias']").val("");
					$('input[name="asistencia_evento1"]').attr('checked', false);
					$('input[name="asistencia_evento2"]').attr('checked', false);
					$("input[name='idinvitados']").val("");
					
					

				}
			});

		}else{
			//console.log(msj);
			alert(msj);
			if(flag_max==1){
				$("#personas").val(max);
			}
			if(flag_min==1){
				$("#personas").val(min);
			}
		}



	});

		$(".plus-container").click(function () {
			actual=$("#personasfield").attr("value");
			actual=parseInt(actual);
			actual++;
			$("#personasfield").attr("value",actual);
			$("#personasfield").text(actual);
			var max = jQuery("#personas").val();
			if(actual>=max){
				$("#personasfield").attr("value",max);
				$("#personasfield").text(max);
			}
  	});
		$(".minus-container").click(function () {
			actual=$("#personasfield").attr("value");
			actual=parseInt(actual);
			actual--;
			if(actual>=0){
				$("#personasfield").attr("value",actual);
				$("#personasfield").text(actual);
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
