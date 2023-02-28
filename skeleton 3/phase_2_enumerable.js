Array.prototype.myEach = function(callback) {
    for(let i = 0; i < this.length; i++){
        callback(this[i]);
    }
};

function addNums(num, num1) {
    return num + num1
};

// [0,1,2].myEach(addTwo)

// console.log(addTwo(2))

Array.prototype.myMap = function(callback) {
    const result = [];
    this.myEach(function(el){ result.push(callback(el)) } );
    return result;
    
}

my_arr1 = [1,2,3,4,5]

// console.log(my_arr1.myMap(addTwo))


Array.prototype.myReduce = function(callback, acc=0) {
    if (acc) {
    this.myEach(function(el) {acc = callback(acc, el)});
    return acc;
    } else {
        acc = this[0];
        this.slice(1).myEach(function(el) {acc = callback(acc, el)});
        return acc;
     }

}

// console.log(my_arr1.myReduce(addNums));

