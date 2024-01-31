let myObject = {

    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
    };

    let myOb=Object.keys(myObject)
    
    // console.log( typeof(myObject.age))
    for(let key of myOb){

        console.log('key:',key,'|','type:',typeof(myObject[key]))
    }
    