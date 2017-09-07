function validarFormulario(form)
{
	
	if(form.usuario.value==''){
		alert('El usuario no puede ser vacio.')
		return false;
	}
	
	if(form.clave.value==''){
		alert('El password no puede ser vacio.')
		return false;
	}
	
	return true;
	
}