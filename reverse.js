const sentance='Monwar Hossain Khokon';
// 1 no solution


// let reverse=''
// for(const letter of sentance){
//  reverse=letter+reverse;
    
//  }
// console.log(reverse)

// 2 no solution

// let reverse=''
// for(let i=0;i<sentance.length;i++){
//     const letter=sentance[i]
//     reverse=letter+reverse
// }
// console.log(reverse)

// shortcut

const reverse=sentance.split('').reverse().join('');
console.log(reverse)