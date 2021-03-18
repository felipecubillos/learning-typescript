console.log("inicia el camino!!");
console.log(" Working with core types");
function add(number1, number2) {
    console.log("conociendo el tipo de dato de una variable: ", typeof (number1));
    try {
        if (typeof "hola" === "string") {
            throw new Error("nueva exepcion por x");
        }
    }
    catch (error) {
        console.error("atrapando el error ", error);
    }
    return number1 + number2;
}
console.log("la suma de los numeros : ", add(23, 45));
