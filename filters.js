angular
   .module("filtersModule", [])
   
   .filter("test", function () {
       return function (input, fil) {
           if (!fil)
               return input;
           var test = function (el, idx, array) {
               return el.priority == fil;
           }
           return input.filter(fil);
       };
   });