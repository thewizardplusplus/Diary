<?php

class AccessCodeForm extends CFormModel {
	public $access_code;

	public function rules() {
		return array(
			array('access_code', 'required'),
			array('access_code', 'validateAccessCode', 'skipOnError' => true)
		);
	}

	public function attributeLabels() {
		return array('access_code' => 'Код доступа');
	}

	public function validateAccessCode() {
		if ($this->access_code != Yii::app()->session['ACCESS_CODE']) {
			$this->addError('access_code', 'Неверный код доступа.');
		}
	}
}
