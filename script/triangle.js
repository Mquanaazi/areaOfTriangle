let base= document.querySelectorAll('input')[0]
let height= document.querySelectorAll('input')[1]
let area= document.querySelectorAll('input')[2]
let culc= document.querySelector('button')
 
function triangleArea() {
    let a = ((1/2)*base.value)* height.value;
    area.value = a;
  }

  culc.addEventListener('click',triangleArea)






// function calculate(value1,value2){
    //     answer=(input1.value*(1/2))*input2.value
    //     area.value=answer.tofixed(2)
    // }
    // function area(base,height) {
    //     return ((1/2)*base)* height;
    // }

    



// base.oninput=function(){
// let z=(parseFloat(base.value)*(1/2))*height.value
// area.value=parseFloat(z.toFixed(2));
// let y=(parseFloat(area.value)-(base.value))
// height.value=parseFloat(y.toFixed(2))

// }

// height.oninput=function(){
//     let area=(parseFloat(x.value)(1/2))*(y.value)
//     x.value=parseFloat(area.toFixed(2));
//     let y=(parseFloat(z.value)-(x.value))
    
//     }

// z.oninput=function(){
//         let z=(parseFloat(x.value)(1/2))*(y.value)
//         X.value=parseFloat(z.toFixed(2));
//         let y=(parseFloat(z.value)-(x.value))
        
//         }



