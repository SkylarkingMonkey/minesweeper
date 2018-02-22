const menu = {
	_courses: {
		_appetizers: [],
		_mains: [],
		_desserts: [],
		get appetizers() {
			return this._appetizers;
		},
		set appetizers(appetizerIn) {
			this._appetizers = appetizerIn;
		},
		get mains() {
			return this._mains;
		},
		set mains(mainsIn) {
			this._mains = mainsIn;
		},
		get desserts() {
			return this._desserts;
		},
		set desserts(dessertsIn) {
			this._desserts = dessertsIn;
		},
	},
	get courses() {
		return {
			appetizers: this._courses.appetizers,
			mains: this._courses.mains,
			desserts: this._courses.desserts,
		}


	},
	addDishToCourse(courseName, dishName, dishPrice) {
		const dish = {
			dishName: dishName,
			dishPrice: dishPrice,
		//	get dishName() {
//				return this._dishName;
//			},
//			set dishName(dishName){
//				return this._dishName = dishName;
//			},
//			get dishPrice(){
//				return this._dishPrice;
//			},
//			set dishPrice(dishPrice){
//				return this._dishPrice = dishPrice;
//			},

		};
		return this.courses[courseName].push(dish);
	},

	getRandomDishFromCourse(courseName) {
		const dishes = this._courses[courseName];
		const randomIndex = Math.floor(Math.random() * dishes.length);
		return dishes[randomIndex];
	},
	generateRandomMeal() {
		const appetizer = this.getRandomDishFromCourse('appetizers');
		const main = this.getRandomDishFromCourse('mains');
		const desserts = this.getRandomDishFromCourse('desserts');
		const totalPrice = appetizer.dishPrice + main.dishPrice + desserts.dishPrice;


		return `Your meal is ${appetizer.dishName}, followed by ${main.dishName}, and the dessert will be ${desserts.dishName}. The price is $${totalPrice}.`;
	}

};
menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
menu.addDishToCourse('appetizers', 'olives', 3);
menu.addDishToCourse('appetizers', 'bread', 3);
menu.addDishToCourse('mains', 'roast lamb', 15);
menu.addDishToCourse('mains', 'amazing sandwich', 35);
menu.addDishToCourse('mains', 'haggis', 10);
menu.addDishToCourse('desserts', 'chocolate orgasm', 100);
menu.addDishToCourse('desserts', 'vanilla eh', 3);
menu.addDishToCourse('desserts', 'hot berry crush', 3);
let meal = menu.generateRandomMeal();
//console.log(menu.courses);
//console.log(menu.appetizers);
console.log(meal);
