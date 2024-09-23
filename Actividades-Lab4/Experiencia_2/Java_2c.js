var globalVar = "global";
function funcionExterna() {
    var varExterna = "externa";
    console.log(globalVar);
    console.log(varExterna)
    function funcionInterna() {
        var varInterna = "interna";
        console.log(globalVar);
        console.log(varExterna);
        console.log(varInterna);
    }
    funcionInterna();
}
funcionExterna();

