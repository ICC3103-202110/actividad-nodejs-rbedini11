const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

    readline.question("Ingresa un numero: ", n => {
    console.log("F("+n+") = "+fibonacci(n));
    readline.close();
  })
function fibonacci(n) {
    if (n ===0) 
        return 0;
    if (n===1)
        return 1;
    else
      return (fibonacci(n - 1)+ fibonacci(n-2));
  }



