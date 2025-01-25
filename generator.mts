function* g() {
  console.log("a");
  yield 1;
  console.log("b");
  yield 2;
  console.log("c");
  yield 3;
  console.log("d");
}

const generator = g();
for (const value of generator) {
  console.log(value);
}
