module.exports = function toReadable (number) {
    const newObj = {  
        0: 'zero',
         1: 'one',
         2: 'two',
         3: 'three',
         4: 'four',
         5: 'five',
         6: 'six',
         7: 'seven',
         8: 'eight',
         9: 'nine'
       } 
       
       
       const newObjTwo = {  
        10: 'ten',
         11: 'eleven',
         12: 'twelve',
         13: 'thirteen',
         14: 'fourteen',
         15: 'fifteen',
         16: 'sixteen',
         17: 'seventeen',
         18: 'eighteen',
         19: 'nineteen',
         20: "twenty",
         30: "thirty",
         40: "forty",
         50: "fifty",
         60: "sixty",
         70: "seventy",
         80: "eighty",
         90: "ninety",
     
       } 
       
       const newNumberString = String(number).split('') 
       
       for(let i = 0; i < newNumberString.length; i++) {   
        
       if(newNumberString.length === 1) {
       
           //const test = `${newNumberString[0]}0`
           
           const test2 = `${newNumberString[0]}`
           
           return `${newObj[test2]}`
           //`${newObjTwo[test]} hundred ${newObj[test2]}`
           } 
       /*if(newNumberString.length === 2) {
       
           const test = `${newNumberString[20]}`
           
           const test2 = `${newNumberString[2]}`
           
           return `${newObj[test2]} ${newObjTwo[test]}`    
        */  
       }
     }
     console.log(toReadable(1))

