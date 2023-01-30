const validator = {
  maskify(creditCard) {
    if (creditCard.length < 5) return creditCard;
    const last4Characters = creditCard.substr(-4);
    const maskingCharacters = creditCard.substr(0, creditCard.length - 4).replace(/\d/g, '#').replace(/[a-z]/g, '#');
    return `${maskingCharacters}${last4Characters}`;
  },
  //los metodos dentro de un objeto se separan en comas 
  isValid(creditCardNumber) {
        
    // ej: creditCardNumber = '6666'
    const array  = creditCardNumber.split('')
    // array =['6','6','7','8']
    const card = array;   
    // card = ['6','6','7','8']
    const cambio = card.reverse();
    // cambio = ['8','7','6','6']
    const multiready = []

    for (let i = 0; i < cambio.length; i++){
      if (i % 2 === 1) { 
        const multiplicacion = cambio[i] * 2
        multiready.push(multiplicacion)
      }
      else {
        multiready.push(cambio[i])
      }
    }

    // multiready = ['8',14,'6',12]  
    const str = multiready.toString().split(',');
    // str = ['8','14','6','12']  
    let total = 0;

    for (let i = 0; i < str.length; i++){
     
    
      if (parseInt(str[i]) >= 10) { 
        const numero = str[i].split('');
        const arrayEntero = numero.map( x => parseInt(x));
        const suma = arrayEntero[0] + arrayEntero[1];
        // suma = 5

        
        total = total + suma
        

      }
      else {
       

        total = total + parseInt(str[i])
        
      } 

    
    }

    if ((total % 10) === 0) {
      return true
    }
    else{
      return false
    }
    // is creditCardNumber valid?

  }
}
export default validator;
