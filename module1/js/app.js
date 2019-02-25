(function () {
"use strict";

var app = angular.module('LunchCheck', []);

app.controller('LunchCheckController', ['$scope', function(a) {

	a.submit =  function(){
	a.WarningText = '';
  if(a.items === undefined){
    alert('Please enter data first');
    return;
  }
		var lunches = a.items.split(',');
		var FourthItem = lunches[3];


		if(a.items == ''){
			alert('Please enter data first');
		}else if(FourthItem === undefined){
			a.WarningText = 'Enjoy!';
		}else if(FourthItem !== undefined && a.items != null){
			a.WarningText = 'Too Much!';
		}
	};
  }
  ]

  );
})();
