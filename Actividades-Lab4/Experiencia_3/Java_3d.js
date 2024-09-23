function UserException(message) {
    this.message = message;
    this.name = 'UserException';
  }
  
  function getMonthName(mo) {
    mo--; // Ajustar el número del mes para el índice del array (1 = Ene, 12 = Dic)
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    if (months[mo] !== undefined) {
      return months[mo];
    } else {
      throw new UserException('InvalidMonthNo'); // Lanza una excepción personalizada
    }
  }
  
  let monthName;
  try {
    const myMonth = 15; // 15 está fuera del rango, lo que genera una excepción
    monthName = getMonthName(myMonth);
  } catch (e) {
    monthName = 'unknown';
    console.error(e.message, e.name); // Muestra el mensaje y el nombre de la excepción
  }
  