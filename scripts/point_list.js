var PointList = {};

$(document).ready(
	function() {
		var point_list = $('#point-list');
		var UpdatePointList = function() {
			Selection.hideAgePointsButton();
			point_list.yiiGridView(
				'update',
				{
					url:
						location.pathname
							+ location.search
							+ location.hash
				}
			);
		};
		var RequestToPointList = function(url, data) {
			$.extend(data, CSRF_TOKEN);
			point_list.yiiGridView(
				'update',
				{
					type: 'POST',
					url: url,
					data: data,
					success: function() {
						UpdatePointList();
					}
				}
			);
		};

		$.editable.addInputType(
			'bootstrapped-line-edit',
			{
				element : function() {
					var block = $('<div class = "input-group"></div>');
					$(this).append(block);

					var input = $('<input class = "form-control" />');
					input.on('click', function() { return false; });
					block.append(input);

					return input;
				},
				buttons: function(settings, original) {
					var form = this;
					var block = $(form).find('.input-group');
					var submit_button = $(
						'<a class = "input-group-addon" href = "#">'
							+ '<span class = "glyphicon glyphicon-floppy-disk">'
							+ '</span>'
						+ '</a>'
					);
					var cancel_button = $(
						'<a class = "input-group-addon" href = "#">'
							+ '<span class = "glyphicon glyphicon-remove">'
							+ '</span>'
						+ '</a>'
					);

					block.append(submit_button).append(cancel_button);
					submit_button.click(
						function() {
							if (submit_button.attr('type') != 'submit') {
								form.submit();
							}

							return false;
						}
					);
					cancel_button.click(
						function() {
							var reset = $.editable.types[settings.type].reset;
							if (!$.isFunction(reset)) {
								reset = $.editable.types['defaults'].reset;
							}

							reset.apply(form, [settings, original]);

							return false;
						}
					);
				}
			}
		);

		PointList = {
			move: function(url) {
				RequestToPointList(
					url,
					{ 'Point[order]': $.url(url).param('order') }
				);
				return false;
			},
			editing: function(link) {
				var element_id =
					'point-text-'
						+ $.url($(link).attr('href')).param('_id');
				$('#' + element_id).trigger(element_id + '-edit');

				return false;
			},
			deleting: function(link) {
				var url = $(link).attr('href');
				var text = $('#point-text-' + $.url(url).param('_id'))
					.data('text');
				if (text != '') {
					text =
						'пункт <strong>&laquo;'
							+ text
							+ '&raquo;</strong>';
				} else {
					text = 'пункт-разделитель';
				}
				DeletingDialog.show(
					text,
					function() {
						DeletingDialog.hide();
						RequestToPointList(url, {});
					}
				);

				return false;
			},
			initialize: function() {
				$('.point-text').each(
					function(id, item) {
						item = $(item);
						item.editable(
							item.data('update-url'),
							{
								type: 'bootstrapped-line-edit',
								event: item.attr('id') + '-edit',
								name: 'Point[text]',
								data: item.data('text'),
								submitdata: CSRF_TOKEN,
								onblur: 'ignore',
								indicator:
									'<img src = "'
										+ item.data('saving-icon-url')
										+ '" alt = "Сохранение..." />',
								placeholder: '',
								callback: UpdatePointList,
								onerror: function(settings, original, xhr) {
									AjaxErrorDialog.handler(xhr);
									original.reset();
								}
							}
						);
					}
				);

				$('.dropdown-menu a[class^=state]').click(
					function() {
						var link = $(this);
						RequestToPointList(
							link.parent().parent().data('update-url'),
							{ 'Point[state]': link.data('state') }
						);

						return false;
					}
				);
			},
			afterUpdate: function() {
				PointList.initialize();
			}
		};

		PointList.initialize();
	}
);
