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
    let array  = creditCardNumber.split('')
    // array =['6','6','7','8']
    let card = array;   
    // card = ['6','6','7','8']
    let cambio = card.reverse();
    // cambio = ['8','7','6','6']
    let multiready = []

    for (let i = 0; i < cambio.length; i++){
      if (i % 2 == 1) { 
        let multiplicacion = cambio[i] * 2
        multiready.push(multiplicacion)
      }
      else {
        multiready.push(cambio[i])
      }
    }

    // multiready = ['8',14,'6',12]  
    var str = multiready.toString().split(',');
    // str = ['8','14','6','12']  
    let total = 0;

    for (let i = 0; i < str.length; i++){
      console.log('if',parseInt(str[i]) >= 10)
    
      if (parseInt(str[i]) >= 10) { 
        let numero = str[i].split('');
        let arrayEntero = numero.map( x => parseInt(x));
        let suma = arrayEntero[0] + arrayEntero[1];
        // suma = 5

        console.log('suma', suma);
        total = total + suma
        console.log('total', total)

      }
      else {
        console.log('str', str[i])
        console.log('int', parseInt(str[i]))

        total = total + parseInt(str[i])
        console.log('else')
      } 

      console.log(total)
    }

    if ((total % 10) == 0) {
      return true
    }
    else{
      return false
  }
    // is creditCardNumber valid?

  }
}
export default validator;
