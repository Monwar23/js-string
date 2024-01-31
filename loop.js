const college={
    name:'VNC',
    class : ['11','12'],
    events:['science fair','dev fair'],
    color:'blue',
    result:'top'
}
let myOb=Object.keys(college)
    for(const key of myOb){
        console.log(key,'|',typeof(college[key]))
    }
    