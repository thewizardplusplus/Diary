<?php
	/**
	 * @var StatsController $this
	 * @var array $data
	 * @var int $index
	 * @var CListView $widget
	 */
?>

<div class = "panel panel-success media achievement-view">
	<div class = "media-left">
		<canvas
			class = "media-object"
			width = "64"
			height = "64"
			data-jdenticon-hash = "<?= CHtml::encode($data['hash']) ?>">
		</canvas>
	</div>
	<div class = "media-body">
		<h4 class = "media-heading">
			<time title = "<?= DateFormatter::formatDate($data['date']) ?>"><?=
				DateFormatter::formatMyDate($data['date'])
			?></time>:
			достижение &laquo;<?= $data['name'] ?>&raquo;
		</h4>
		<p>
			Выполнял пункт <strong>&laquo;<?= $data['point'] ?>&raquo;</strong>
			в течение <strong><?= $data['days'] ?></strong>.
		</p>
	</div>
</div>
