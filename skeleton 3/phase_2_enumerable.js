Array.prototype.myEach = function(callback) {
    for(let i = 0; i < this.length; i++){
        console.log(callback(this[i]));
    }
}

function addTwo(num) {
    return num + 2
}

[0,1,2].myEach(addTwo)

// console.log(addTwo(2))