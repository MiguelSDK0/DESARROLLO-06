console.log(a);
var a;
var innerVar = null;

function outerFunction() {
    var outerVar = "Función externa";

    function innerFunction() {
        var innerVar = "Función interna";
        console.log(outerVar);
        console.log(innerVar);
    }

    innerFunction();
    console.log(innerVar);
}

outerFunction();