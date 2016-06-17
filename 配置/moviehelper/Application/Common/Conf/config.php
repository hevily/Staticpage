<?php
$oldDir = getcwd();
include dirname(dirname(dirname(dirname(dirname(__FILE__)))))."/usr/dbconfig.php";
chdir($oldDir);
if ($_SERVER ["SERVER_ADDR"] == "::1") {
	return array (
			'LANG_SWITCH_ON' => true, // 开启语言包功能
			'URL_MODEL'             =>  2,
			'LANG_AUTO_DETECT' => false, // 自动侦测语言 开启多语言功能后有效
			'LANG_LIST' => 'zh-cn', // 允许切换的语言列表 用逗号分隔
			'VAR_LANGUAGE' => 'l', // 默认语言切换变量
			'SHOW_PAGE_TRACE' => false,
				
			'db_type' => 'mysqli',
			'db_user' => 'root',
			'db_pwd' => '',
			'db_host' => 'localhost',
			'db_prefix'=>'',
			'db_port' => '3306',
			'db_name' => 'bjmaildb',
			'db_charset' => 'utf8',
			
			'DB_CONFIG2' => array (
					'db_type' => 'mysqli',
					'db_user' => EmldbUser,
					'db_pwd' => EmldbPass,
					'db_host' => EmldbHost,
					'db_port' => '3306',
					'db_name' => EmldbName,
					'db_charset' => 'utf8',
			),
			
			// 模板
			'DEFAULT_THEME' => 'default' ,
			'SESSION_AUTO_START'    =>  true,    // 是否自动开启Session
	);
} else {
	return array (
			'URL_CASE_INSENSITIVE'  =>  false,   // 默认false 表示URL区分大小写 true则表示不区分大小写
			'URL_MODEL'             =>  2,       // URL访问模式,可选参数0、1、2、3,代表以下四种模式：
			// 0 (普通模式); 1 (PATHINFO 模式); 2 (REWRITE  模式); 3 (兼容模式)  默认为PATHINFO 模式
			'SHOW_PAGE_TRACE' => false,
				
			'db_type' => 'mysqli',
			'db_user' => dbUser,
			'db_pwd' => dbPass,
			'db_host' => dbHost,
			'db_prefix'=>'',
			'db_port' => '3306',
			'db_name' => dbName,
			'db_charset' => 'utf8',
			
			'DB_CONFIG2' => array (
					'db_type' => 'mysqli',
					'db_user' => EmldbUser,
					'db_pwd' => EmldbPass,
					'db_host' => EmldbHost,
					'db_port' => '3306',
					'db_name' => EmldbName,
					'db_charset' => 'utf8',
			),
	
			'LANG_SWITCH_ON' => true, // 开启语言包功能
			// 模板
			'DEFAULT_THEME' => 'default',
			'SESSION_AUTO_START'    =>  true,    // 是否自动开启Session
			
	);
}

