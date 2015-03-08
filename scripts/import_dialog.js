var ImportDialog = {};

$(document).ready(
	function() {
		var import_dialog = $('.import-dialog');
		var import_date = $('.import-date', import_dialog);
		var ok_button = $('.ok-button', import_dialog);

		ImportDialog = {
			show: function(date, ok_button_handler) {
				import_date.text(date);

				ok_button.off('click');
				ok_button.click(ok_button_handler);

				import_dialog.modal('show');
			},
			hide: function() {
				import_dialog.modal('hide');
			}
		};
	}
);