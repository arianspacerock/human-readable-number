
module.exports = function toReadable (number) {
  const newObj={
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4:"four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12:"twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
  }

  let str=""; 
  let one=0;
  let ten=0;
  let hundred=0;
  if (number===100){
    str+="one hundred";
  }
  else if ((number>=0)&&(number<=19)){
    str+=newObj[number];
  }
  else if ((number>=20)&&(number<=99)){
    if (number%10===0){
      str+=newObj[number];
    }
    else {
      one=number%10;
      ten=(Math.floor(number/10))*10;
      str+=newObj[ten]+ " "+ newObj[one];
      }
  }
  else if ((number>=101)&&(number<=999)){
    if (number%100===0){
      str+=newObj[number/100]+" hundred";
    }
    else {
      hundred=Math.floor(number/100);
      ten=number-(hundred*100);
       if ((ten>0)&&(ten<20)){
         str+=newObj[hundred]+ " hundred "+ newObj[ten];
       }
       else if (ten%10===0){
         str+=newObj[hundred]+ " hundred "+ newObj[ten];
       }
       else {
         one=ten%10;
         ten=ten-one;
         str+=newObj[hundred]+ " hundred "+ newObj[ten]+" "+newObj[one];
       }
    }
  }

    return str.trim();
  }
