// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// You should use: document.body, element.childNodes, and element.classList
// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {

  var element = arguments[1] || document.body;
  var result = [];

// if the element has the className inside it
  if (element.classList && element.classList.contains(className)) {
    result = result.concat(element); 
  }
// if the element has children, 
  if (element.childNodes) {
  //if it does, run function again
    for (var i = 0; i < element.childNodes.length; i++) {
      result = result.concat(getElementsByClassName(className, element.childNodes[i])); 
    }
    
  }
  return result;
};



//[]