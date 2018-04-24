fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function (collection, iteratee) {
      for (const key in collection) {
        iteratee(collection[key], key, collection);
        }
        return collection;
    },

    map: function(collection, iteratee) {
      const array = [];
      for (const key in collection ) {
        const newElement = iteratee(collection[key], key, collection);
        array.push(newElement);
        }
        return array;
    },

    reduce: function(collection, iteratee, acc) {
      let newAcc = acc;

      for (const key in collection ) {
        newAcc = iteratee(newAcc, collection[key], collection);
      }

      return newAcc;
    },

    find: function(collection, predicate) {
      for (const key in collection ) {
        if (predicate(collection[key], key, collection)){
          return true;
        }
      }
      return false;
    },

    filter: function(collection, predicate) {
      const newArray = []
      for (const key in collection ) {
        if (predicate(collection[key], key, collection)){
          newArray.push(collection[key]);
        }
      }
        return newArray;
    },

    size: function(collection) {
      let counter = 0;
      for (const key in collection) {
        counter += 1;
      }
      return counter;
    },

    first: function (array, n) {
      if (n) {
        return array.slice(0, n);
      } else {
        return array[0];
      }
    },

    last: function (array, n) {
      if (n) {
        return array.slice(-n);
      } else {
        return array[array.length-1];
      }
    },

    compact: function (array) {
      const trueValues = []
      for (const value of array){
        if (value) {
          trueValues.push(value)
        }
      }
      return trueValues;
    },

    sortBy: function (array, iteratee) {
      // return array.slice().sort( function(a, b) {
      //   return iteratee(a) - iteratee(b);
      // });

      const newArray = [];

      for (const ele of array) {
        newArray.push(iteratee(ele));
      }

      return newArray.sort(function(a,b) { return a-b; });
    },

    flatten: function(array, shallow) {
      function flattener(arr) {
        const flat = [];

        for (let i = 0; i < arr.length; i++) {
          const ele = arr[i];

          if (ele instanceof Array) {
            flat.push(flattener(ele));
          } else {
            flat.push(ele);
          }
        }

        return flat;
      }

      if (shallow) {

      } else {
        flattener(array);
      }
    }


  }
})()

fi.libraryMethod()
