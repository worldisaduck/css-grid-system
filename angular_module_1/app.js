(function () {
	'use strict';

	angular.module('LunchCheck', [])
	.controller('LunchCheckController', LunchCheckControll);

	function LunchCheckControll ($scope) {
		$scope.dishesList = '';
		$scope.placeholder = 'list comma separated dishes you usually have for lunch';
		$scope.countDishes = function (string) {
			var dishesList = string.split(/[\s,]+/);
			var dishesAmount = dishesList.length;
			if (dishesList[0] == '') {
				$scope.message = 'Please enter data first.';
				$scope.status = 'red';
			} else if (dishesAmount <= 3) {
				$scope.message = 'Enjoy!';
				$scope.status = 'green';
			} else {
				$scope.message = 'Too Much!';
				$scope.status = 'green';
			}
		}
	}

})();