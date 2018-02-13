const input = ['bitches be all about that fucking awesome peanut butter'];

const vowels =  ['a', 'e', 'i', 'o', 'u'];

let resultArray = [];

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < vowels.length; j++) {
    
    if (input[i] === vowels[j]) {
      resultArray.push('what in the name of fuck is going on?');
      console.log(resultArray);
    }
  }
}




console.log(resultArray);
