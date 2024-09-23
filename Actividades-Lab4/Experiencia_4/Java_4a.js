//1. Agregar objetos a su proyecto utilizando iniciadores de objetos.
const persona = {
    nombre: "Juan",
    edad: 30,
    saludar: function() {
      console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
  };
  persona.saludar();

//2. Agregar objetos a su proyecto utilizando métodos constructores
function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.saludar = function() {
      console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    };
}
const juan = new Persona("Juan", 30);
juan.saludar();

//3. Agregar objetos a su proyecto utilizando el método object.create().
const prototipoPersona = {
    saludar: function() {
      console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
};
const ana = Object.create(prototipoPersona);
ana.nombre = "Ana";
ana.edad = 25;
ana.saludar();