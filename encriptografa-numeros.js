function convertNumbersToLetters(numbers) {
  const letters = {
    '1': 'a',
    '2': 'b',
    '3': 'c',
    '4': 'd',
    '5': 'e',
    '6': 'f',
    '7': 'g',
    '8': 'h',
    '9': 'i',
    '0': 'j'
  };
  
  let result = '';
  
  for (let i = 0; i < numbers.length; i++) {
    const letter = letters[numbers[i]];
    if (letter) {
      result += letter;
    }
  }
  
  return result;
}

$('#encriptografar').on('click', function(){

  var encript = convertNumbersToLetters($('#numeros').val());
  $('#encriptografado').val(encript);
});