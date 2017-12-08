<?php 
if(APP_STATUS === 'local'){
	return [];
}else{
	return include dirname(dirname(dirname(dirname(dirname(__FILE__)))))."/usr/estoresDb.php";	
}

?>