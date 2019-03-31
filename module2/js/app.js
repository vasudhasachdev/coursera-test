(function () {
"use strict";

var app = angular.module('ShoppingListCheckOff', []);

app.controller('ToBuyController', ['$scope','ShoppingListCheckOffService', function(a,b) {
//getListToBuy();
// function getListToBuy(){
//       a.List1= b.getList1();
//     };
//     var list = a.List1;
//       a.submit =  function(itemName){
// 		  alert('i side submit '+itemName);
//       a.name=itemName;
//     a.List1=  b.updateLists(list,a.name);
//
// 	};
//a.ShoppingService = b;
a.toBuyItems = b.toBuyItems();
console.log("2  a.toBuyItems" + b.toBuyItems());

a.removeItem = function(item){
  b.removeItem(item);
}
  }
  ]

  );

app.controller('AlreadyBoughtController', ['$scope', 'ShoppingListCheckOffService',function(c,d) {

c.shoppingService = d;
c.alreadyBoughtItems = d.alreadyBoughtItems();
  // c.List2= d.getList2();
  // console.log("  c.List2 "+ c.List2)
    }
    ]

);

app.factory('ShoppingListCheckOffService',function(){
   var toBuyItems = [{name: "Cookies", quantity: 10},
                     {name: "Bagels", quantity: 12},
                     {name: "Donuts", quantity: 15},
                     {name: "Muffins", quantity: 10}];

                    //var toBuyItems = ["Cookies","Bagels"];
  var alreadyBoughtItems = [];

  var shoppingService = {};
return{


     addItem : function(item) {
         alreadyBoughtItems.push(item);
     },
     removeItem : function(item) {
         var index = toBuyItems.indexOf(item);
         toBuyItems.splice(index, 1);
         this.addItem(item);
     },
     toBuyItems : function() {
       return toBuyItems;
        // console.log("toBuyItems "+toBuyItems);
     //}     // alreadyBoughtItems : function() {
     //     alreadyBoughtItems ;
   },
   alreadyBoughtItems : function() {
  return     alreadyBoughtItems ;
  //   return shoppingService;
}
}   });




///old code
// 	this.getList1 = function() {
//     var obj1 = {name: "Cookies", quantity: 10},
//     obj2 = {name: "Bagels", quantity: 12},
//     obj3 = {name: "Donuts", quantity: 15},
//     obj4 = {name: "Muffins", quantity: 10};
//     var list = [obj1, obj2, obj3,obj4];
//
// 	 return list
// 	    }
//
// 	this.getList2 = function() {
// 	 return [
//       ];
// 	    }
//
//   this.updateLists = function(list,item){
//     console.log(item);
//     var index = list.indexOf(item);
//       console.log(index);
//   var newList = list.splice(index,1);
// this.getList2 = newList;
// //console.log(this.getList2().length);
//   console.log(this.getList2);
//
// return newList;
//
// //     for (var i=0; i<this.getList1().length;i++) {
// alert("itemToRemove222   "+this.getList1().name);
//       if (this.getList1().name === item) {
//         this.getList1().splice(i,1); // removes the matched element
//         i = this.getList1().length;  // break out of the loop. Not strictly necessary
//       }
//     }



  //}







})();
