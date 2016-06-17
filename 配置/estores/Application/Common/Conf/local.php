<?php
/**
 * 本地配置
 */
return array(
        'SHOW_PAGE_TRACE'       => false,
		'SHOW_ERROR_MSG'        =>  true,
		'ERROR_MESSAGE'  =>    '发生错误',
        'USER_ID_STORE'=>'5534',
        'USER_ID'=>'5534',
        //DB
        'DB_TYPE'           => 'mysqli',
        'DB_NAME'           => 'bjmaildb',
        'DB_CHARSET'        => 'utf8',
        'DB_PREFIX'         => 'ec_',
        'DB_HOST'           => 'localhost',
        'DB_PORT'           => '3306',
        'DB_USER'           => 'root',
        'DB_PWD'            => '',
        
        'DB_CONFIG2' => array (
                'DB_TYPE' => 'mysql',
                'DB_USER' => 'root',
                'DB_PASS' => '',
                'DB_HOST' => 'localhost',
                'DB_NAME' => 'bjfiledb'
        ),
        
        //PATH
        'SITE_BASEURL'      =>($_SERVER['REQUEST_SCHEME']?:"http")."://".$_SERVER['HTTP_HOST'].'/statichtml/bjmovie01/', //网站URL绝对地址的基本地址
		'SITE_BASEURL'      =>"https://shop.yshjie.com/statichtml/bjmovie01/", //网站URL绝对地址的基本地址
        'SITE_BASEPATH'     =>'statichtml/bjmovie01/', //安装目录
);