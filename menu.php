

    <!-- Wrap all page content here -->
    <div id="wrap">

      <?php include 'header.php';?>

      <!-- Begin page content -->
      <div class="container">
    <?php
    	require_once './ClienteForm.php';
      
      $form = new ClienteForm();

		if(!empty($_POST)) {	//venimos por post?

		if($form->procesar($_POST)) {	//procesó OK?
			header("Location: procesar.php");	//redirect
			die();
		}
	}
       ?>
       
        <p class="lead">Bienvenido al sistema, .......</p>
         <?php
		   require('form_vista.php')
		  ?>
      </div>
    </div>

    
	<?php include 'footer.php';?>

 
