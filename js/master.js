for (let i = 1; i < 101 ; i++) {
    let n
    n = i
    if (n % 15 === 0) {
        console.log("FizzBuzz");
        n = 'FizzBuzz'
    } else if (n % 5 === 0) {
        console.log("Buzz");
        n = 'Buzz'
    } else if (n % 3 == 0){
        console.log("Fizz");
        n = 'Fizz'
    } else {
        console.log (n);
        n = n
    }

    let boxString = '<div class="box padding-right ">' + n + '</div>'
    document.getElementById('container-big').innerHTML += boxString
}


