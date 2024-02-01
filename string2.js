const name='Monwar Hossaain Khokon AA bosss'
let count=0;
for(let i=0;i<name.length;i++){
    if(name[i].includes('a') || name[i].includes('A') ){
        count++
    }
}
console.log(count)

