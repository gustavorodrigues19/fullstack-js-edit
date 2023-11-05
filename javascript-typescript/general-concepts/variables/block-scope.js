function varTest() {
  var x = 1;
  console.log("var test");
  if (true) {
    var x = 2;
    console.log(x);
  }
  console.log(x);
  console.log("--------------------");
}

function letTest() {
  let x = 1;
  console.log("let test");
  if (true) {
    let x = 2;
    console.log(x);
  }
  console.log(x);
}

varTest();
letTest();
