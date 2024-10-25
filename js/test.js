// function myfunc(){}
//     let age = prompt("возраст")
//     let b = null
//     if(age < 18){
//         b = false
//     }else{
//         b = true
//         document.write("ах ты шалунишка что хочеш смотреть :))")

//     }
//     a = null
//     if(b == false){
//         a = confirm("этот сайт создан для совершеналетних вам есть 18 ?")
//     }
//     if (a == false){
        // document.write("вышел отсюда")
//     }else if(a == true){
//         document.write("ах ты шалунишка что хочеш смотреть :))")
//     }

// myfunc()    


// function myfunc() {
//     let b =null
//     let a = null
//     let age = prompt("Возраст?");
    
//     b = (age < 18) ? true : document.write("Ах ты шалунишка, что хочешь смотреть :))", )
    
//     b = (b == false) ? null : a = confirm("этот сайт создан для совершеналетних вам есть 18 ?")
    
//     a = (a == true) ?document.write("ах ты шалунишка что хочеш смотреть :))"):document.write("вышел отсюда")   
// }
// myfunc();

// let a = prompt("first")
// let b = prompt("asecond")
// function minby(a ,b){
//     if(a > b){
//         return(b)
//     }else if(a < b){
//         return(a)
//     }else{
//         return("чет не то")
//     }
// }

// document.write(minby(a,b))

// let x = prompt("first")
// let z = prompt("asecond")

// function pow(z,x){
//     x **=z
//     return(x)
// }
// document.write(pow(z,x))



//                                                                    GG
// let father = 40;
// let son = 12
// function old(father, son) {
//     return (father - 2 * son);
// }
// console.log(old(father,son));





// let n = 123
// let ncr =""
// function nn(n){
//     for (let i = 0; i < n; i++) {
//     if (i % 2 == 0){
//         document.write(i + ", ")
//     }
//     }
//     return(ncr)
// }


// document.write(nn(n))


// let a = ["12","123","24","546","767","989",]

// function myfunk(a){
//     for(let i = 0 ; i == a; i++){
//         a = a + Number(a)
//     }
//     return(a)
// }
// document.write(typeof(myfunk(a)))



// let a = ["12","123","24","546","767","989",]

// console.log(a);





//                                                                   String To Int
// let f = "12"
// f = parseInt(f)
// document.write(typeof(f))


//                                                                   infinit cikl


// while(true == true){
//     let a = prompt("первое")
//     let b = prompt("второй")

//     if(a > b){
//         document.write("первое больше чем вторая")
//         break;
//     }
//     else if(a < b){
//         document.write("второй больше")
//         break;
//     }else if(a || b || String ){
//         document.write("какойто не цифра")
//         break;
//     }
// }                                                               



// let First = Number(prompt("первое число"))
// let Second = Number(prompt("второй"))
// if (First % 2 == 0 || Second % 2 == 0) {
//     sum = First + Second
//     document.write(sum)
// }
// else if( First % 2 != 0 ){
//     document.write(First + "  это число не чет")
// }
// else if( Second % 2 != 0 ){
//     document.write(Second + "  это число не чет")
// }





// let sum = function(a,b) {
//     a += b 
//     document.write(a)}
// sum(2,4)





// let sash = (a)  => a **6
// document.write(sash(2))





// let a = prompt("имя")
// let great = (a) => document.write("здарова " + a) 
// great(a)





// let IsEven = function (a) {
//     if( a % 2 == 0 ){
//     document.write(a + "  число чет")
// }
//     else if( a  % 2 != 0 ){
//     document.write(a + "   число не чет") 
// }
// }
// let a = prompt('го номер')
// IsEven(a)


//                                             MAP
// let duble = [12,12,241,4635756,8,679,]

// v = dub(duble
// document.write(v)





// let mas = [12,34,5,8,8,9,64,3,2,];
// let min = (a) => Math.min(...a);
// document.write(min(mas));



// let a = "sad bad rool"
// let fun = (a) => a.split(' ');

// document.write(fun(a))


let ob = {
    name: "John",
    age: 30,
    address: {
        city: "city",
    }
};

function Copy(obj) {
    return { ...obj };
}

let obcop = Copy(ob);
obcop.address.city = "city2";

console.log("Оригинальный :", ob);
console.log("копия:", obcop);
