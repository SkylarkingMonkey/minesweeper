class Media {
  constructor(title){
    this._name = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get name() {
    return this._name;
  }

  get isCheckedOut(){
    return this._isCheckedOut;
  }

  get ratings(){
    return this._ratings;
  }

  getAverageRating(title){
    let ratingsum = this._ratings.reduce((currentSum, rating) => currentSum+ rating, 0);
    return ratingsum/this._ratings.length;
  }

  toggleCheckedOutStatus(){
    if (this._isCheckedOut === true){
      return this._isCheckedOut = false;
    } else if (this._isCheckedOut === false){
      return this._isCheckedOut = true;
    }
  }

  addRating(rating){
    return this._ratings.push(rating);
  }
}

class Book extends Media {
  constructor(title, author, pages){
    super(title);
  //  super(isCheckedOut);
  //  super(ratings);
    this._author = author;
    this._pages = pages;
  }

  get author(){
    return this._author;
  }

  get pages(){
    return this._pages;
  }
}


class Movie extends Media {
  constructor(title, director, runTime){
    super(title);
  //  super(isCheckedOut);
  //  super(ratings);
    this._director = director;
    this._runTime = runTime;
  }

  get director(){
    return this._director;
  }

  get runTime(){
    return this._runTime;
  }
}


class CD extends Media {
  constructor(title, isCheckedOut, ratings, artist, songs){
    super(title);
//    super(isCheckedOut);
//    super(ratings);
    this._artist = artist;
    this._songs = songs;
  }

  get artist(){
    return this._artist;
  }

  get songs(){
    return this._songs;
  }
}

const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544);
historyOfEverything.toggleCheckedOutStatus();
console.log(historyOfEverything._isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

const speed = new Movie('Speed', 'Jan de Bont', 116);
speed.toggleCheckedOutStatus();
console.log(speed._isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());
