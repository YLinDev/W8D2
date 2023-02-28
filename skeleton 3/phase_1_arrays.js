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
    for(let i=0; i <= this.length - 2; i++) {
        for(let j=i+1; j <= this.length -1; j++) {
            if(this[i]+this[j]===0) {
                result.push([i,j]);
            }
        }
    }
    return result;
}
// console.log(my_two_sum_arr.two_sum())

Array.prototype.tranpose = function() {
    const store = this 
    const result = [];
    for(let i = 0; i < store[0].length; i++){
        const temp = [];
        for(let j = 0; j < store.length; j++){
            temp.push(store[j][i]);
        }
        result.push(temp);
    }
    return result;
}

//console.log([[0,1,2],[2,4,6]].tranpose()) //[[0,2],[1,4],[2,6]]

