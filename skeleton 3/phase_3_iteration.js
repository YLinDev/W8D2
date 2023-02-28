Array.prototype.bubbleSort = function() {
    
    let sortable = true;
    while (sortable) {
        sortable = false;
        for (let i = 0; i < this.length; i++)  {

            if (this[i] > this[i + 1]){
                let temp = this[i]
                this[i] = this[i+1];
                this[i+1] = temp;
                sortable = true;
            }
        }
    }
    return this;
}

exp_arr = [5, 4, 5, 1, 1, 1, 3, 10, 1, 12]


// console.log(exp_arr.bubbleSort())
// console.log(exp_arr[10])
// console.log(exp_arr[10] > 4)

String.prototype.subStrings = function() {
    const result = []
    if (this.length < 2){
        result.push(this);
        return result;
    };

    for (let i=0; i < this.length; i++) {
      for ( let j = i; j <= this.length; j++) {
        sub = this.slice(i, j);
        if (sub.length) {
            result.push(sub);
        }
      }
    }
    return result;
}

const my_string = "apple"

// console.log(my_string.subStrings())
console.log(my_string.slice(4,5))