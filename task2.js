//task2.1
 function square(number, pattern) {
    let squarePattern = '';
    for (let i = 0; i < number; i++) {
      for (let j = 0; j < number; j++) {
        squarePattern += pattern;
        if(pattern === undefined){
          squarePattern = squarePattern.replace(pattern, '#');
        }
      }
      squarePattern += '\n';
    }
    console.log(squarePattern.trim());
  }
  square(3, '*');
  //task2.2
  function triangle(number, mode) {
    let trianglePattern = '';
    const n = Math.abs(number);
    if (number >= 0 && mode === 'left') {
      for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
          trianglePattern += '#';
        }
        trianglePattern += '\n';
      }
    }
    if(number >=0 && mode === 'right'){
      for (let i = 0; i<= n; i++){
        for(let j = 0; j < n - i ; j++){
          trianglePattern += ' ';
        }
        for ( let k = 0 ; k < i; k++){
          trianglePattern += '#'; 
        }
        trianglePattern += '\n'; 
      }
  
    }
    if(number >= 0 && mode === 'isosceless'){
      for (let i = 0; i <= n; i++) {
        for (let j = 1; j <= n - i; j++) {
          trianglePattern += ' ';  
        }
        for (let k = 0; k < 2 * i - 1; k++){
          trianglePattern += '#';
        }
        trianglePattern += '\n';
      }  
  
    }
    if (number < 0 && mode === 'left') {
      for (let i = n; i >= 1; i--) {
        for (let j = 1; j <= i; j++) {
          trianglePattern += '#';
        }
        trianglePattern += '\n';
      }
    }
    if (number < 0 && mode === 'right') {
      for (let i = 0; i <= n- 1; i++) {
        for (let j = 0; j < i; j++) {
          trianglePattern += ' ';
        }
        for(let k = 0; k < n - i; k++ ){
          trianglePattern += '#';
        }
        trianglePattern += '\n';
      }
    }
    if (number < 0 && mode === 'isosceless') {
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
          trianglePattern += ' ';
        }
        for(let k = 0; k < 2 * (n-i) - 1; k++){
          trianglePattern += '#'
        }
        trianglePattern += '\n';
  
      }
  
    }
    console.log(trianglePattern);
  } 
  triangle(3,'right');
  
