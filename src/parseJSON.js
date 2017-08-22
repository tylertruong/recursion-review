// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  //detect type in the string
  if(json[0] === '{') {
     
  }
    //if first character = {, then create new object {}
    var result = {};
    // if first character = [, then create new array []
    result = [];
    // if first character = " OR a number (via charset) OR null OR undefined OR boolean, then create a string "
    return json;
    //if json.charCodeAt(0) <= 57 && >= 48
    //return parseInt(json, 10);
    
  //process whatever is inside the thing
    //remove all white spaces EXCEPT those within quotes

    // [['dsa'], 23, 'dsadas']
// ['dsa', 23]
  var insideArray = json.slice(1, json.length - 1);
  var arrayCounter;
  var stringCounter;
  var objCounter;
  var returnString = '';
  for (var i = 0; i < insideArray.length; i++) {
    //for strings
    if (insideArray[i] === '"' && arrayCounter === 0 && objCounter === 0) {
      stringCounter++;
    } 
    if (stringCounter === 1 && insideArray[i] !== '"') {
      returnString += insideArray[i];
    } 
    if (stringCounter === 2 && insideArray[i] !== '"') {
      result.push(parseJSON(returnString));
      stringCounter = 0;
      returnString = '';
    }
    //for array
    if (insideArray[i] === '[' && stringCounter === 0 && objCounter === 0) {
      arrayCounter++;
    }
    if (arrayCounter !== 0 && insideArray[i] !== '[') {
      returnString += insideArray[i];
    }
    if (insideArray[i] === ']') {
      arrayCounter--;
    }
    if (arrayCounter === 0 && ) {
      result.push(parseJSON('[' + returnString + ']'));
      returnString = '';
    }
    //for object
    if (insideArray[i] === '{' && stringCounter === 0 && arrayCounter === 0) {
      objCounter++;
    }
    if (objCounter !== 0 && insideArray[i] !== '{') {
      returnString += insideArray[i];
    }
    if (insideArray[i] === '}') {
      objCounter--;
    }
    if (objCounter === 0) {
      result.push(parseJSON('{' + returnString + '}'));
      returnString = '';
    }
  }//each element/value in array is seperated by a comma
      //detect each comma, and then for each
      //use counter
      //make variable returnString = ''
        //loop through each character
          // if the character is '
            //stringCounter++
          //if stringCounter value = 1,
            // returnString += character;
          //if stringCounter value = 2;
            // run parseJSON function on returnString, then push result into array
            // reset stringCounter to 0
            // return string = ''
                    
        // if character is [
        //counter arrayCounter++;
         
        
        // if character is ]
        // counter arrayCounter--;            

        // if counter arrayCounter !== 0;
          //returnString += character;
        // if counter arrayCounter === 0;
        // run parseJSON function on returnString and push result into array.
        // returnstring = '';

        // if character is {
        //counter objCounter++;
         
        
        // if character is }
        // counter objCounter--;            

        // if counter objCounter !== 0;
          //returnString += character;
        // if counter objCounter === 0;
        // run parseJSON function on returnString and push result into array.
        // returnstring = '';

        // if arrayCounter === 0 && stringCounter === 0 && objectCounter === 0
          // if character !== ,
            // returnString += character;
          // if character === ,
            //parsejson return string, push result into array  
};
