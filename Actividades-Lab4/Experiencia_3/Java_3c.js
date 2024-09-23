function exampleFunction() {
    const x = "declared inside function"; // x can only be used in exampleFunction
    console.log("Inside function");
    console.log(x);
  }
  console.log(x); // Causes error
  
  const x = "declared outside function";
  exampleFunction();
  function exampleFunction() {
    console.log("Inside function");
    console.log(x);
  }
  console.log("Outside function");
  console.log(x);
  
  function f() {
    try {
      console.log(0);
      throw 'bogus';
    } catch (e) {
      console.log(1);
      return true; // este return es suspendido
      console.log(2); // no se alcanza
    } finally {
      console.log(3);
      return false; // sobrescribe el return anterior
      console.log(4); // no se alcanza
    }
    console.log(5); // no se alcanza
  }
  console.log(f()); // Imprime: 0, 1, 3, false
  