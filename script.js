const message = document.getElementById("message")


/*
1. Split message words and store it in an array.
2. Display in CONSOLE the number of elements in the array and the most frequent word in the array
*/

var array=[];

function submit(){
    var input= document.getElementById('inputText').value;

    array=input.split(",");

    console.log(array);

    
}





function theMostFrequentWord(array) {

    let messageWords = []
    let theMostFrequentWord;
    let numberOfWordsInTheMessage = 0;
    count=0;
    vl=1;
    
  for (var i = 0; i < array.length; i++) {
            for (var j = i; j < array.length; j++) 
            {
              if (array[i] == array[j]) 
              count++;
            }
              if (vl < count) 
            {
                vl = count;
                theMostFrequentWord = array[i];
            }
        
    
            return theMostFrequentWord;
        }

    
    console.log(Object.keys(array).length);//numberOfWordsInTheMessage
}

console.log(`The most frequent word of the message is "${theMostFrequentWord}"`)
console.log(`The number of words in the message is ${numberOfElementsInTheArray}`)


var phrase=['A wizard is never late, nor is he early. He arrives precisely when he means to. (c) Gandalf The Grey','We must all face the choice between what is right and what is easy. (c) Albus Dumbledore','You are a wizard, Harry (c) Hagrid']

function randomQuote(){
    var randomNum= Math.floor(Math.random()*(phrase.length));
    document.getElementById('randomPhrase').innerHTML=phrase[randomNum];

}


