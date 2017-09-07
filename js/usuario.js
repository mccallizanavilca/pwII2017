function edicion_cliente(ver)
{
	if(ver) {
		$("#datos_cliente").show();
	} else {
		$("#datos_cliente").hide();
		$("#datos_cliente input").val('');
		
	}

}

function hacer_todo_esto(){
	$("#btnGuardar").click(function(){
		var nombre_cliente = $("#nc").val();
		if(nombre_cliente == "" ){
			alert('Nombre de cliente no valido.');
		} else {
		
			$("#frmNuevo").submit();
			
			
			
		}
	});
	
	
	
	$("a.btnEditarConAjax").click(function(e){		
		e.preventDefault();
		var valor_ha_enviar = $(this).data('idcliente');
		$.get('obtener_cliente.php','id='+valor_ha_enviar,function(datos_devueltos){
			var datos = JSON.parse(datos_devueltos);
			$("#datos_cliente input#nombre_cliente").val(datos.res.nombre_cliente);
			$("#datos_cliente input#idcliente").val(datos.res.idcliente);
			
			edicion_cliente(true);
		});		
	});
	
	$("button#guardar_edicion").click(function(){
		$(this).attr('disabled','disabled');
		var idcliente = $("#datos_cliente input#idcliente").val();
		var nombre_cliente = $("#datos_cliente input#nombre_cliente").val();
		if(idcliente.length > 0 && nombre_cliente.length > 0) {
		
			$.post('guardar_datos_cliente.php',{id:idcliente,nombre:nombre_cliente}, function(respuesta){
				var datos = JSON.parse(respuesta);
				if(datos.res==1){
					console.log('OK');
					edicion_cliente(false);
					location.reload();
				} else {
					console.log('NOK');
					alert('No se pudo guardar los datos');
				}
				
				$(this).removeAttr('disabled');
				
			});
			
		}
		
		
	});
	
	
	
	$('#adicionar_con_ajax').click(function(e){
		e.preventDefault();
		$("#nuevo_cliente").show();		
	});
	
	$('#nuevo_cliente form#frmNuevo button#btnGuardarCancelar').click(function(){
		$("#nuevo_cliente").hide();	
	});
	
	
	$("#nuevo_cliente form#frmNuevo button#btnGuardarNuevo").click(function(){
		$(this).attr('disabled','disabled');		
		var nombre_cliente = $("#nuevo_cliente form#frmNuevo input#nombre_cliente").val();
		var estado_cliente = $("#nuevo_cliente form#frmNuevo select#estado option:selected").val();
		
		if(nombre_cliente.length >0 && estado_cliente.length >0){
			$.post('guardar_nuevo_cliente.php',{nombres:nombre_cliente,estado:estado_cliente}, function(respuesta){
				var datos = JSON.parse(respuesta);
				if(datos.res && datos.res == 'OK'){
					location.reload();
				} else {
					$("#nuevo_cliente form input").val('');
					$("#nuevo_cliente").hide();	
					alert('No se pudo guardar los datos');
				}
				
				$(this).removeAttr('disabled');
				
			});
		}
		
		
	});
	
	
	
	
}

$(document).ready(hacer_todo_esto);


/*
function verificaFormulario(){
	var nombre_cliente = document.getElementById('nc').value;	
	if(nombre_cliente=='' ){
		alert('Nombre de cliente no valido.');
		return false;
	}
	return true;
}
*/
