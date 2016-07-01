<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
	<meta name="format-detection" content="telephone=no" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
    <link rel="stylesheet" type="text/css" href="/statichtml/moviehelper/app/Public/base.css" />
    <link rel="stylesheet" type="text/css" href="../css/" />
	<title>first-php-page</title>
</head>
<body>
	<header></header>
	<div class="container">
		<div class="section">
			<?php
			echo "print something here use command - echo";

			$x = 5;
			function localVar()
			{
				global $x;
				$y= 10; // localVar
				echo "<br/>在函数内部测试：<br/>";
				echo "变量X：$x";
				echo "<br/>";
				echo "变量Y：$y";
				echo "<br/>";
				// global $x;
				echo "$x";
				echo "<br/>";
				$x = 10;
				echo "$x";
			}
			localVar();

				echo "<br/>在函数外部测试：<br/>";
				echo "变量X：$x";
				echo "变量Y：$y";


			echo "static volume";
			function test_static_volume()
			{
				static $x = 0;
				$y = $x++;
				echo "<br/>$x";

			}
			for ($i=0; $i < 5; $i++) { 
				test_static_volume();
			}
			?>
		</div>
		<div class="section">

		</div>
	</div>
	<footer></footer>
	<script src="/statichtml/moviehelper/app/Public/jQuery/jquery-2.1.4.min.js"></script>
</body>
</html>