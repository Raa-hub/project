//function sumNumber(a,b,c){
    // const d =a+b+c;
    // document.write(d)

//sumNumber(4,6,9);
//function A(){
   // var a=10;
    //let b=a++;
   // console.log(a,b);



//A();
// A(){
   // const a=5;
    //const b=4;
    //if(b<a){
        //document.write(a)
    //}

//A();
//function A(){
  //  const a=5;
   // const b=5;
   // const c=3;
   // if((a===b))$$((b==))
//alert ("True")
    

//var Firstname="Mary";//
//var lastname="Mike";//
//let fullname= Firstname+"  "+ lastname;//
//document.write(fullname);//
//Firstname.charAt(3);//
//document.write(Firstname.charCodeAt(3));//
//var a= 12;//
//var b= 20;//
//c= "50";//
//d= c.toString(c);//
//sum=a+b+d;//
//document.write(sum);//
//var states=["Abuja","Benin","Abia","Adamawa","Akwa-Ibom","kaduna","Katsina","Borno","plateau","Anambra"];//
//states[6];//
//document.write(states[6]);//
//console.log(states);//
//states.toString();//
//document.write(states)//
//let x=states.toString()//
//console.log(x)//
//x[1]//
//states[states.length -2]//
//let Stateslen =states.length//
//var text ="<ul>";//
//const stateslen=states.length;//
//var y= 0;//
//for(y;y<stateslen;y++){//
 //text += "<li>"+ states[y]+"</li>"//
//}//
//text+="</ul>";//
//document.write(text);//
//var person={//
  //  name:"Mary",//
    //height :"6m",//
    //sex: "female",//
    //weight :"78kg",//
//}//
//person.name//
//person.height//
//person.sex//
//person.weight//
//document.write(person.name);//

//ar table="<table>"//
//tale +="<tr>"//
//table +="<th>"//
//table +="property Name";//
//table +="</th>";//
//table +="<th>"//
//table +="property Value";//
//table +="</th>";//
//table +="</tr>"//
//table +="<tr>"//
//table += "<td>"//
//table += "Name";//
//table += "</td>";//
//table +="<td>"+person.name+"</td>";//
//table +="</tr>"//
//table +="<tr>"//
//table += "<td>"//
//table += "Height";//
//table += "</td>";//
//table +="<td>"+person.height+"</td>";//
//table +="</tr>"//
//table +="<tr><td>Weight</td>"//
//table +="<td>"+ person.weight+"</td>";//
//table +="</tr>"//
//table +="<tr>"//
//table += "<td>"//
//table += "Sex";//
//table += "</td>";//
//table +="<td>"+person.sex+"</td>";//
//table +="</td>"//
//table +="</tr>"//
//table +="</table>"//
//document.write(table)//

//var cars=[{name:"toyota",model:"2019"},//
         //{name:"camry",model:"2019"},//
        // {name:"volvo",model:"2018"}]//

//document.write(cars[0].name)//
        //var jsobject =[{person:{name:"mary",weight:"78kg"},<br>//
           //cars:{brand:"toyota",model:"2024"},//
//}]//

//document.write(jsobject[0].person.name)//
//document.write(jsobject[0].person.weight)//

//var person={//
         //firstname:"Mary",//
         //lastname:"Mike",//
  //       age:"8"//,
//Fullname: function()//
    //return this.firstname + " " +this.lastname//
//}//
//}//
//document.write(person.Fullname())//

const date=new Date()

let d=date.getDay()
function greetings(){
    let day=date.getDate()
    let Month=date.getMonth()
    let year=date.getFullYear()
    let hour=date.getHours()
    if(d==0){
        alert("Happy Monday");
    }
    if(d==1){
        alert("Happy Tuesday");
    }
    if (d=2){
        alert("Happy wednesday");
    }
    if(d==3){
        alert("Happy thursday");
    }
    if(d==4){
    alert("Happy friday");
    }
}
greetings()

function greetings2(){
if ((d==3)  && (day<=7)) {
    alert("Happy wednesdays of the first week of the month");
}
if ((d==3) && ((day>=7)&&(day<=14))) {
    alert("Happy wednesdays of the second week of the month");
}
if ((d==3) && ((day>=15)&&(day<=21))) {
    alert("Happy wednesdays of the third week of the month");
}
if ((d==3) && ((day>=22)&&(day<=31))) {
    alert("Happy wednesdays of the fourth  week of the month");
}
}
greetings2()
function validateData(){
    const email=document.getElementById("email");
    const username=document.getElementById("username");
    const password=document.getElementById("password");
    let  emailvalue="email.value";
    let  usernamevalue="username.value";
    let  passwordvalue="password.value";  
    let mustExit="@" ;
    //alert(emailvalue + "" + usernamevalue + "" + passwordvalue)
    if (usernamevalue.lenght<5){
        alert("username must contain atleast 5 chars!");
    }
    if (passwordvalue.length<7){
        alert ("password length is too small");
    }

}
// if (!email.includesmustExist){
//     alert("email must include @");
// }
// function changingEvent(){
//     alert ("My value has changed!");
// }
// function changingvalue(){
//     alert("my value has changed!")
// }

function  Name(){
    var day=new Date().getDay()
    switch(day){
     case 0:
//Do something when case1 is met
alert("Happy Sunday")
break;
case 1:
    alert("Happy Monday")
//Do something when case2 is met
break;
case 2:
//Do something when case3 is met
alert("Happy Tuesday")
break;
case 3:
    //Do something when case4 is met
    alert("Happy wednesday")
    break;
    case 4:
    //Do something when case5 is met
    alert("Happy Thursday")
    break;
    }

    
}
Name()







