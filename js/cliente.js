$(document).ready(function(){
    
    $('#btn-adicionar').click(function(){
        $('#modal_cliente form#frmModal input, #modal_cliente form#frmModal select').val('');
        $('#modal_cliente #titulo_accion').html('Adicionando nuevo cliente');
        $('#modal_cliente').modal('show');
    });
    
    
    $('#btn-guardar').click(function(){
        var id_cliente = $("#modal_cliente form#frmModal input#id").val();
        var nombre_cliente = $("#modal_cliente form#frmModal input#nombre_cliente").val();
        var estado_cliente = $("#modal_cliente form#frmModal select#estado option:selected").val() 
            ? $("#modal_cliente form#frmModal select#estado option:selected").val() : '' ;

        if(nombre_cliente.length >0 && estado_cliente.length >0){
            var datos_cliente = $('#modal_cliente form#frmModal').serialize();
            var archivo_procesa = 'guardar_nuevo_cliente.php';
            if(id_cliente.length > 0) {
                archivo_procesa = 'guardar_datos_cliente.php';
            } 
            
            $.post(archivo_procesa,datos_cliente, function(respuesta){
                    var datos = JSON.parse(respuesta);
                    
                    if(datos.res && datos.res == 'OK'){
                            location.reload();
                    } else {
                            $('.modal-body .alert').show();
                    }               

            });
        }
        
        
    });
    
    $('.btn-editar').click(function(e){
        e.preventDefault();
        var valor_ha_enviar = $(this).data('id');
        $.get('obtener_cliente.php','id='+valor_ha_enviar,function(datos_devueltos){
                var datos = JSON.parse(datos_devueltos);
                
                $("#modal_cliente form#frmModal input#nombre_cliente").val(datos.res.nombre_cliente);
                $("#modal_cliente form#frmModal input#id").val(datos.res.idcliente);
                $("#modal_cliente form#frmModal select#estado").val(datos.res.status);

                $('#modal_cliente #titulo_accion').html('Editando cliente');
                $('#modal_cliente').modal('show');
        });
    });
    
    
    $('.btn-eliminar').click(function(e){
        e.preventDefault();
        var valor_ha_enviar = $(this).data('id');
        if(confirm("Desea realmente Eliminar el cliente? \n Los datos no podran ser recuperados. \nSe eliminaran todas las facturas que tenga el cliente.")) {
            
            $.post('eliminar_cliente.php','id='+valor_ha_enviar, function(respuesta){
                    var datos = JSON.parse(respuesta);                    
                    if(datos.res && datos.res == 'OK'){
                            location.reload();
                    } else {
                            alert('No se pudo eliminar el cliente.');
                            return false;
                    }

            });
        
        
        }
        
        
    });
    
    
    
    
});
