function validarFormulario(form)
{
	if(form.mensaje.value.length > 0) {
		return true;
	} else {
		alert('Ingresa un mensaje...');
		return false;
	}
}