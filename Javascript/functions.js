console.log("Hello");

// Callback function

// High order func, because it is receiving a func
function sumn(a, b, c) {
  const result = a + b;
  c(result);
}

function displaySum(result) {
  const h2 = document.querySelector("h2");
  h2.innerText = result;
}

sumn(20, 30, displaySum);
