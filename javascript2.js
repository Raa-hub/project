//function converter(){;
    //const ngn= document.getElementById("Naira and kobo");
    //var dollar=document.getElementById("dollar");
    //var cur=document.getElementById("pesos").value;
    // let a=Number(ngn.value);
    //let b=Number(dollar.value);
    //console.log(cur )
    //if((cur=="naira to dollar")&&(ngn.value !=null)){
     //   dollar.value=a/1400
    //}
    //  else if ((cur=="dollar to naira")&&(dollar.value !=null)){
  //      ngn.value=b*1400;
 //     }

//}
//function converter(){
  //const BRL= document.getElementById("BraizilReal");
  //var INR=document.getElementById("Rupees");
 // var cur=document.getElementById("shillings").value;
   //let x=Number(BRL.value);
  //let y=Number(INR.value);
  //if((cur=="Brazil Real to Rupees")&&(BRL.value!=null)){
    //INR.value=x*15.90
  //}
  //else if ((cur=="Rupees to brazil Real")&&(INR.value !=null)){
  //    console.log(cur )
//
   //   BRL.value=y/15.90;
 //   }
 // }
//function switchConverter(){
  //const BRL= document.getElementById("BraizilReal");
  //var INR=document.getElementById("Rupees");
  //var cur=document.getElementById("shillings").value;
  // let x=Number(BRL.value);
  //let y=Number(INR.value);
// switch(cur){
  //case "Brazil Real to Rupees":
    //INR.value=x*15.90;
    //break;
    //case "Rupees to brazil Real":
    //  BRL.value=y/15.90;
  //    break;
//}
 // }


// for loop syntax
//for(expression1;expression2;expression3){
  //block of code to be execute
//}
//const cars=[{name:"volvo",model:"2019"},{name:"toyota",model:"2014"},{name:"camrade",model:2022}]
  //var text="<table>";
//text +=cars[0]+ "<br>";
//text +=cars{1}+ "<br>";
//text +=cars[2]+ "<br>";

//text+="<tr><th>Car Name</th><th>Car Model</th></tr>";
// for(let i=0;i<cars.length;i++) {
//   text +="<tr><td>"+ cars[i].name+"</td>"+"<td>"+cars[i].model+"</td>"+"</tr>"
   
// }
//while loop syntax
//let i=0;
//while(i<cars.length){
  //doable code goes here
  //text +="<tr><td>"+cars[i].name+"</td>"+"<td>"+ cars[i].model+"</td>"+"</tr>"
  //i++;
//}
//text +="</table>"
//const table=document.getElementById("table")
//table.innerHTML=text;
// document.write(text);


class car{
  constructor(name,model,year){
    this.carName=name;
    this.CarModel=model;
    this.productionyear=year;
  }
  age(c){
return c-this.productionyear;
  }
}
const car1=new car("Toyota","Toyota 201", 2016);
const car2=new car("volvo",459,2023);
console.log(car1.carname)
console.log(car1.productionYear)
console.log(car2.carName)
console.log(car2.productionYear)
let d=new Date();
let curYear=d.getFullYear()
console.log(car1.age(curYear))



//concept of inheritence
class man{
  constructor(name,age,status){
  //contruction method goes here
  this.name=name;
  this.age=age;
  this.status=status;
}
old(){
  return this.name+"is" + this.age+" old";
  }
}
class woman extends man{
  constructor(name,age,status,address,phonenumber){
    super(name,age,status);
    this.name=name;
    this,age=age;
    this.status=status;
    this.address=address;
    this.phonenumber=phonenumber;
}
}
let person1=new woman("mary",24,"single","Old CBN block")
document.write(person1.old())




const name="mike";
const age=21;
const sentence=function(){
  //do something here
}
const anotherFunction=function(){
  alert("this is to demonstrate default export method")
}

export{
  name,
  age,
  sentence
}
export default anotherFunction;









