// uniq
my_arr = [1,2,3,4,4,5]
my_two_sum_arr = [-1, 1, -3, 4, 3, 5, -4]

Array.prototype.uniq = function() {
    const result = [];
    this.forEach(el => {
        if (!result.includes(el)) {
            result.push(el);
        }
    })
    return result;
};

// or

// uniq without fat arrow

// Array.prototype.uniq = function() {
//     result = [];
//     this.forEach(function(el) {
//         if (!result.includes(el)) {
//             result.push(el);
//         }
//     })
//     return result;
// };

Array.prototype.two_sum = function() {
    const result = [];
    for(let i=0; i < this.length - 2; i++) {
        for(let j=i+1; j < this.length -1; j++) {
            if(this[i]+this[j]===0) {
                result.push([i,j]);
            }

        }

    }
    return result
}


console.log(my_two_sum_arr.two_sum())