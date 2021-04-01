function math(expression, num1, num2) {
  if (expression==='+') return num1+num2
  if (expression==='-') return num1-num2
  if (expression==='*') return num1*num2
  if (expression==='/') return num1/num2
}

function convertToArray (equation) {
  let currNum = ""
  const expressions = ['*', '/', '+', '-']
  const array = []

  for(let i=0; i<equation.length; i++) {
    const currChar = equation[i]
    if(!expressions.includes(currChar)) currNum +=currChar
    else {
      array.push(currNum)
      array.push(currChar)
      currNum = ""
    }
    if (i===equation.length-1) array.push(currNum)
  }
  return array;
}

function evalutate (arrayOfExpressions, expression){
  const stack = []
  
  for(let i =0; i < arrayOfExpressions.length; i++){
    const currElem = arrayOfExpressions[i]
    if(expression.includes(currElem)){
      const lastElem = stack.pop()
      const nextElem = arrayOfExpressions[i+1]
      const total = math(currElem, Number(lastElem), Number(nextElem))
      stack.push(total.toString())
      i++;
    } else stack.push(currElem)
  }
  return stack;
}

function findTotal (arrayOfExpressions){
  const array = convertToArray(arrayOfExpressions)
  const expression1 = evalutate(array, ['*', '/'])
  const expression2 = evalutate(expression1, ['+', '-'])
  return Number(expression2[0])
}

module.exports = {findTotal}