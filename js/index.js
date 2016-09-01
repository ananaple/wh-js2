var n=Number (prompt("input number",""));

function fib(n) {
   
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 1;
  
  
  return fib(n-1) + fib(n-2);
}

console.log (fib(n-1))
