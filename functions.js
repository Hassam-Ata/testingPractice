function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
function reverseString(str){
    return str.split('').reverse().join('');
}
const calculator={
    add:(a,b)=>a+b,
    subtract:(a,b)=>a-b,
    multiply:(a,b)=>a*b,
    divide:(a,b)=>{
        if(b===0){
          return('Denominator cannot be 0');

        }
        return Math.round((a/b)*10)/10
    }

}
function caesarCipher(str,shiftFactor=0){
  if(str){
    let encryptedStr=''
    for(let i=0;i<str.length;i++){
      encryptedStr+=String.fromCharCode((((str.charCodeAt(i)-97)+shiftFactor)%26)+97);
    }
    return encryptedStr;
  }
  return "Enter string for encryption";


}





module.exports = {capitalize,reverseString,calculator,caesarCipher};