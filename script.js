"use strict";


//Завдання 1*
var arrey = ['Кот', 'Собака', 'Жираф' ];
var found;
function searchArrayWord(arrey, found){
	for (var i = 0; i < arrey.length; i++) {
		if (found === arrey[i] ){
			return true
		}
	}
	return false
};
console.log(searchArrayWord(arrey, 'Собака'));

//Завдання 2*
var arr = [1, 2, 3, 7, 6, 9];
var average = 0;
for (var i = 0; i < arr.length; i++){
	average += arr[i]
};
var result = average / arr.length;
console.log(result);

//Завдання 3*
var arr2 = [1, 3, 5, 6, 7, 9];
var result = []; 
for(var i = arr2.length-1; i >= 0; i--) {
  result.push(arr2[i]);
};
console.log(result);

//Завдання 4*
var obj = {
	html:'HTML', 
	css: 'CSS', 
	js: 'ECMA'};

var mas = [];
for(var key in obj){
	mas.push(key);
};
console.log(mas);

//Завдання 5*
var obj = {
	'name' : 'Igor',
	'tell' : '+380*********',
	'adress' : 'Poltava',
	'sumPrice' : 0,
	'sumWeight' : 0,
	'purchased' : {
		'1' : {
			'product' : 'Чашка',
			'price' : 100,
			'weight' : 200,
		},
		'2' : {
			'product' : 'Ложка',
			'price' : 30,
			'weight' : 100,
		},
		'3' : {
			'product' : 'Чайник',
			'price' : 550,
			'weight' : 2000,
		},
		'4' : {
			'product' : 'Кружка',
			'price' : 150,
			'weight' : 400,
		}
	}
};
console.log(obj);