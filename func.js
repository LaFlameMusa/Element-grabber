function grabber(name) {
  let elem = document.getElementById(name);
  return elem;
}

function calculate() {
  if (!arguments.length) return 0;
  let res = 1;
  for (let i = 0; i < arguments.length; i++) {
    res *= arguments[i];
  }
  return res;
}
