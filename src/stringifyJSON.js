// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
//check arrays
  if(Array.isArray(obj)){
    var result = "[";
    for (var i = 0; i < obj.length; i++)  {
      if (obj[i] === undefined || typeof obj[i] === 'function') {
        result += 'null';
      }
      if(i === 0) {
        result += stringifyJSON(obj[i]);
      } else {
        result += "," + stringifyJSON(obj[i]);
      }
    }
    return result + "]";
  

//check object
  } else if (typeof obj === 'object' && obj !== null) {
    var result = [];
    for (var key in obj) {
      if (obj[key] === undefined || typeof obj[key] === 'function') {
        continue;
      }
      if (obj[key] !== undefined) {
        result.push(stringifyJSON(key) + ":" + stringifyJSON(obj[key]));
      }
    }
    return "{" + result.join(',') + "}";
  

//check string
  } else if (typeof obj === 'string') {
    return '"' + obj + '"'; 

//check null, number, boolean


  } else {
    if (obj === undefined || typeof obj === 'function') {
      return undefined;
    }
    return "" + obj;
  }
};
