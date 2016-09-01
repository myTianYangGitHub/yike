<?php 
	// $url = 'https://moment.douban.com/api/stream/date/2016-08-31?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&format=full&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6';
	$root='https://moment.douban.com/api/stream/date/';
	$last='?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&format=full&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6';
	//php获取时间是time，Y是2016,y是16
	$today=date('Y-m-d',time());
	$url=$root.$today.$last;
	$result = file_get_contents($url);
	echo $result;
 ?>