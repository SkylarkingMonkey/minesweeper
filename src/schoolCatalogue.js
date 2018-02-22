class School {
  constructor(name, level, numberOfStudents){
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

  get name(){
    return this._name;
  }

  get level(){
    return this._level;
  }

  get numberOfStudents(){
    return this._numberOfStudents;
  }

  set numberOfStudents(number){
    if(typeof number === 'string'){
      console.log('Invalide input: numberOfStudents must be set to a Number');
    } else {
    return this._numberOfStudents = number;
    }
  }

  quickFacts(){
    console.log('${this._name} educates ${this._numberOfStudents} students, typically between the ages of  ${this._level}');

  }

  static pickSubstituteTeacher(substituteTeachers){
    return sutituteTeachers[Math.floor(Math.random()*substituteTeachers.length)];
  }
}

class Primary extends School {
  constructor(name, numberOfStudents, pickupPolicy){
    super(name);
    super(level) = 'primary';
    super(numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }

  get pickupPolicy(){
    return this._pickupPolicy;
  }
}

class Middle extends School {
  constructor(name, level, numberOfStudents){
    super(name);
    super(level) = 'middle';
    super(numberOfStudents);
  }
}

class High extends School {
  constructor(name, level, numberOfStudents){
    super(name);
    super(level) = 'high';
    super(numberOfStudents);
    this._sportsTeam = [];
  }

  get sportsTeams(){
    return this._sportsTeams;
  }
}

const lorraineHansbury = new Primary('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
console.log(lorraineHansbury.quickFacts());
