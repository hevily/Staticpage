<?php 
/**
 * 本地配置
 */
return array(
		'SHOW_PAGE_TRACE' 		=> false,
		'id_user'           => 4,
		//DB
		'DB_TYPE' 			=> 'mysqli',
		'DB_NAME' 			=> 'bjmaildb',
		'DB_CHARSET'	 	=> 'utf8',
		'DB_PREFIX'	 		=> 'ec_',
		'DB_HOST'			=> 'localhost',
		'DB_PORT'			=> '3306',
		'DB_USER' 			=> 'root',
		'DB_PWD'			=> '',
		
		'DB_CONFIG2' => array (
				'DB_TYPE' => 'mysqli',
				'DB_USER' => 'root',
				'DB_PASS' => 'power123',
				'DB_HOST' => 'localhost',
				'DB_NAME' => 'bjfiledb'
		),
// 		'DB_CONFIG3' => array (
// 				'DB_TYPE' => 'mysqli',
// 				'DB_USER' => 'root',
// 				'DB_PASS' => 'power123333',
// 				'DB_HOST' => 'localhost',
// 				'DB_NAME' => 'bjfiledb'
// 		),
		
		//PATH
		'SITE_BASEURL'		=>($_SERVER['REQUEST_SCHEME']?:"http")."://".$_SERVER['HTTP_HOST'].'/bjmovie01/', //网站URL绝对地址的基本地址
		'SITE_BASEPATH'		=>'bjmovie01/', //安装目录
);
?>