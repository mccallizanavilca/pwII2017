
<!DOCTYPE html>
<html lang="en">
  <head>
 
    <title>Formulario</title>

    <!-- Bootstrap core CSS -->
    <link href="css/bootstrap.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="css/index.css" rel="stylesheet">


  </head>

  <body>
  
  
  
  
  
  

  

	  <?php if($form->tieneErrores()) { ?> 
	  <div class="alert alert-danger">
		<a class="close" data-dismiss="alert" href="#" aria-hidden="true">&times;</a>
		<?php echo 'error' ?>
      </div>
	  <?php } ?>
	  

	
      <form class="form-signin" action='#' method='post'>
        <h2 class="form-signin-heading">FORMULARIO</h2>

        <?php $tiene_error = $form->tieneError('apellido') ? "has-error" : ""; ?>
         <div class="form-group <?php echo $tiene_error; ?>">
        <input type="text" name="apellido" class="form-control" placeholder="apellido" autofocus id="apellido" >
        <span class="alert-danger"><?php echo $form->getError('apellido'); ?></span>
        </div>


        <?php $tiene_error = $form->tieneError('nombre') ? "has-error" : ""; ?>
          <div class="form-group <?php echo $tiene_error; ?>">
           <input type="text" name='nombre' class="form-control" placeholder="nombre" id="nombre">        
           <span class="alert-danger"><?php echo $form->getError('nombre'); ?></span>
         </div>


       <!--<?php $tiene_error = $form->tieneError('fecha') ? "has-error" : ""; ?>-->
       <div class="form-group <?php echo $tiene_error; ?>">   
        <div class='input-group date' id='fecha'>
        <input type="date" name="fecha" class="form-control" placeholder="Fecha Nacimiento" autofocus id="Fecha Nacimiento" value="<?php echo $form->getValor("fecha"); ?>">
        </div>
        <span class="alert-danger"><?php echo $form->getError('fecha'); ?></span>
      </div>
                                




      <?php $tiene_error = $form->tieneError('localidad') ? "has-error" : ""; ?>
           <div class="form-group <?php echo $tiene_error; ?>">

            <select class="custom-select mb-2 mr-sm-2 mb-sm-0 form-control" name="localidad" id="localidad">
            <option value=""></option> 
                 <?php foreach ($form->localidad as $key => $item): ?>
                 <option value="<?php echo $key; ?>" <?php echo $form->getSelected('localidad', $key); ?>><?php echo $item; ?></option> 
                 <?php endforeach; ?>
           
            </select>
                                        <span class="alert-danger"><?php echo $form->getError('localidad'); ?></span>
      </div>


       
        
        
        
      <?php $tiene_error = $form->tieneError('activo') ? "has-error" : ""; ?>
                                <div class="form-group <?php echo $tiene_error; ?>" >
                                    <div class="checkbox">
                                        <label>
                                            <input type="checkbox" name="activo" id="activo" value="1" <?php echo $form->getChecked('activo'); ?>>

                                            
                                            
                                            Activo
                                        </label>
                                    </div>
                                    
        

         <button class="btn btn-lg btn-primary btn-block" type="submit" >Guardar</button>
        
      </form>

    </div> <!-- /container -->



