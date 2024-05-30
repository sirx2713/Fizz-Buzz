let output = [];
let count = 1;

function fizzbuzz() {

    if (count % 3 === 0 || count % 5 === 0){
        output.push("fizz");
    }
    else {
        output.push(count);
    }
    count++;
    console.log(output);
}