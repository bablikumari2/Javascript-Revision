

// var url = 'https://www.econdb.com/api/series/RPUCUS/?format=json'
// async function getData(){
//     const res = await fetch(url);
// const data = await res.json()
// console.log(data.data)
// }
// getData()


// var a = 10;
// function test(){
//     console.log(a)
//     var a =20;
//     console.log(a)
// }
// test()

// output = undefined 
//    20


// the variables declared inside a function are hoisted to the top. Hence variable a declared inside the test function is 
// avaiable in the first console statement . But its value is not defined yet,hence its is undefined.

// var test = function(){
//     console.log(10)
// }

// function test(){
//     console.log(20)
// }
// test()
// test()   output=10

// during runtime the test variable is assigned an anonymous function which overrides the named function test.
// that why its prints 10;


// var name = 'zone'
// var obj={
//     name:"babli",
//     showName:function(){
//         console.log(this.name)
//         setTimeout(function(){
//             console.log(this.name)
//         },3000)
//     }

// }
// obj.showName()

// var arr =[4,3,2,1]
// var rev = arr.reverse();
// console.log(rev)

// x=10
// var x
// console.log(x)

