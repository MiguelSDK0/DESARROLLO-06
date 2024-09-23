//1. Agregar propiedades a los objetos de a su proyecto utilizando iniciadores de objetos.
const persona = {
    nombre: "Juan",
    edad: 30
};
persona.profesion = "Ingeniero";
console.log(persona); 

//2. Agregar objetos a su proyecto utilizando métodos constructores.
function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}
const juan = new Persona("Juan", 30);
juan.profesion = "Ingeniero";
console.log(juan);
  
//3. Agregar objetos a su proyecto utilizando el método object.create().
const prototipoPersona = {
    saludar: function() {
      console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
  };
const ana = Object.create(prototipoPersona);
ana.nombre = "Ana";
ana.edad = 25;
ana.profesion = "Doctora";
console.log(ana);
  