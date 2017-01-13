(function (){
	'user strict';

	angular.module('ShoppingListCheckOff', [])
	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

	ToBuyController.$inject = ['ShoppingListCheckOffService'];
	function ToBuyController(ShoppingListCheckOffService) {
		var buyCtrl = this;
		buyCtrl.toBuyList = ShoppingListCheckOffService.getToBuyList();
		buyCtrl.markAsBought = function(itemIndex) {
			ShoppingListCheckOffService.markAsBought(itemIndex);
		}
	}

	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtController(ShoppingListCheckOffService) {
		var boughtCtrl = this;
		boughtCtrl.boughtList = ShoppingListCheckOffService.getBoughtList();
	}

	function ShoppingListCheckOffService() {
		var service = this;

		var toBuyList = [
			{name: "Cookies", 			quantity: '2 packs'},
			{name: "Potato Chips", 	 	quantity: '10 packs'},
			{name: "Corn Chips", 	 	quantity: '10 packs'},
			{name: "Sandwich Bread", 	quantity: '7 packs'},
			{name: "Ham", 			 	quantity: '0.4 lbs'},
			{name: "Cheese", 		 	quantity: '0.5 lbs'},
			{name: "Tomatos", 		 	quantity: '1.2 lbs'},
			{name: "Lettuce",		 	quantity: '3 pieces'},
			{name: "Olives", 		 	quantity: '5 cans'}
		];

		var boughtList = [];

		service.markAsBought = function(itemIndex) {
			var boughtItem = toBuyList[itemIndex];
			toBuyList.splice(itemIndex, 1);
			boughtList.push(boughtItem);
		};

		service.getToBuyList = function() {
			return toBuyList;
		};

		service.getBoughtList = function() {
			return boughtList;
		};
	}
})();
