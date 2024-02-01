const str='Rocky vai saradin bou er sathe ktha ble. Rate kore abr nak o dake.'

const str1=str.split(' ')
console.log(str1)
const str2 = str1.map(word => word.charAt(0).toUpperCase() + word.slice(1));

const str3=str2.join(' ')
console.log(str3)
