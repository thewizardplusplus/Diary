<?php
	/**
	 * @var StatsController $this
	 */

	Yii::app()->getClientScript()->registerCssFile(
		Yii::app()->request->baseUrl
			. '/chap-links-library-timeline/timeline-theme.css'
	);

	Yii::app()->getClientScript()->registerScriptFile(
		'https://www.google.com/jsapi',
		CClientScript::POS_HEAD
	);
	Yii::app()->getClientScript()->registerScriptFile(
		Yii::app()->request->baseUrl
			. '/chap-links-library-timeline/timeline-min.js',
		CClientScript::POS_HEAD
	);
	Yii::app()->getClientScript()->registerScriptFile(
		Yii::app()->request->baseUrl
			. '/chap-links-library-timeline/timeline-locales.js',
		CClientScript::POS_HEAD
	);
	Yii::app()->getClientScript()->registerScriptFile(
		CHtml::asset('scripts/stats_projects.js'),
		CClientScript::POS_HEAD
	);

	$this->pageTitle = Yii::app()->name . ' - Статистика: проекты';
?>

<header class = "page-header">
	<h4>Статистика: проекты</h4>
</header>

<div class = "stats-view projects"></div>
