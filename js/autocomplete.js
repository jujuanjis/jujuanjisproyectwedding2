$( document ).ready(function() {
    
        $( "#nombre" ).autocomplete({
            source: function( data, cb ) {	 
                $.ajax({
                    url:'./invitados-autocompletado.php',
                    method: 'GET',
                    dataType: 'json',
                    data: {
                        name:  data.term,
                        
                    },
                    success: function(res){
                        console.log(res);
                        var result;
                        result = [
                            {
                                label: 'No se encontraron resultados para '+data.term,
                                value: ''
                            }
                        ];

                        if (res.length) {
                            
                            result = $.map(res, function(obj){
                                var arr = obj.split("|");
                                return {
                                    label: arr[0],
                                    value: arr[0],
                                    data : obj
                                };
                            });
                        }
                        cb(result);
                    }
                });
            },
            autoFocus: true,	      	
            minLength: 3,
            select: function( event, ui ) {
                var resArr, rowNo;
                
                

                resArr = ui.item.data.split("|");	
                //console.log(resArr);
            
                $('#nombre').val(resArr[0]);
                $('#personas').val(resArr[1]);
                $('#idinvitado').val(resArr[2]);
                max=resArr[1];
                $("#personas").attr({
                    "max" : max,
                 });
                 $("#personasfield").text(resArr[1]);
                $("#personasfield").val(resArr[1]);
                $("#personasfield").attr({
                    "value": resArr[1]
                    });
                $("#personasfield").attr({
                    "max" : max,
                 });
                
            }		
        });

        

        
    
});