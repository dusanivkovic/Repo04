function main(numOne, numTwo){
    //only change code below this line
    var MyQuotient;
    if(numTwo === 0){
        MyQuotient = 'Divide by 0! Cannot divide by zero!';
    }else{
        MyQuotient = numOne / numTwo;
    }

    //only change code abowe this line
    return MyQuotient ;
}
console.log(main(5.0, 2.0));
console.log(main(16.5, 5.5));
console.log(main(102.0, 25.5));
module.exports = main;