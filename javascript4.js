// function validateInput(){
//     let erors = document.getElementById('Error')
    
//     try{
//         const inputvalue = document.getElementById("userinput").value
//         if(inputvalue==" ")
//        throw"Input can not be empty"
//     if(isNaN(inputvalue))
//         throw "value must be a number"
//     let b = Number(inputvalue)
//     if(b<10)
//         throw"number must be less than 10"


    // catch(error){
      
       //erors.classList = "Error"
     //erors.style.display = 'block';
    //erors.innerText = error;
   // error.style.color='white';
  //  }
 //};
//function createData(){
    //try{
        //let url ="https://jsonplaceholder.typicode.com/todos"
        //const options={
           // method:"POST",
         //   headers:{
         //       Accept:"application/json",
       //         "content-Type":"application/json"
     //       },
       // }
    //body:JSON.stringify({
       // tittle:"Testing API",
      //  body:"Testing API using fetch method",
    //    userId:""
    //});
    //fetch(url,options)
    //.then ((Response)=>Response.json())
    //.then((data)=>{
    //    console.log(data);
  //  })
//}catch(error){
  //  console.log(error)
    //handle the error here
//}
//}
//createData()
//document.getElementById('sampleForm').addEventListener('submit', function(event) {
    //event.preventDefault(); // Prevent the default form submission
    //const fname = document.getElementById('fname').value;
    //const lname = document.getElementById('lname').value;
    //const email = document.getElementById('email').value;
  
    // Simple form validation
    //if (fname === '' || lname === '' || email === '') {
      //alert('All fields are required!');
      //return;
    //}
  
    // Display the form data (for demonstration purposes)
  //  alert(First Name: ${fname}\nLast Name: ${lname}\nEmail: ${email});
 // });
//   const axios=require("axios");


//   function createData(){
//     event.preventDefault();
//     let url ="https://jsonplaceholder.typicode.com/todos";
//     const title = document.getElementById('title').value;
//     const Body = document.getElementById('body').value;
//     const userId = document.getElementById('UserId').value;
    
//     const data = {
//         title: title,
//         body: Body,
//         userId: userId
//     };

//     axios.post(url, data, {
//     header:{
//         "Accept": "application/json",
//         "content": "application/json"
//     }
// })  
//   .then(({data})=>{
    
//     console.log(data);
    
//   })
//   .catch(err=>{
//     console.log(err);
//   })
// }

function getData(){
    event.preventDefault()
    try{
        let url="https://jsonplaceholder.typicode.com/todos";
        let option ={
            method: "GET",
            header : {
                "Accept" : "application/json",
                "content-type": "application/json",
            }
        }
    
        fetch(url, option)
        .then((response)=> response.json())
            .then((data)=>{
                console.log(data);
                const titlebody = document.querySelector("#Api");
                data.forEach(items => {
                    
                    const row = document.createElement('tr');

                    const userId = document.createElement('td');
                    userId.textContent = items.userId;
                    row.appendChild(userId);

                    const ID= document.createElement('td');
                    ID.textContent = items.id;
                    row.appendChild(ID); 
                    ID.style.color = "blue";
                    ID.style.color=""


                    const title= document.createElement('td');
                    title.textContent = items.title;
                    row.appendChild(title);

                    const complete= document.createElement('td');
                    complete.textContent = items.completed ? "yes" : "no";
                    row.appendChild(complete);

                    titlebody.appendChild(row);
                    
                });
            })
    }   
    catch(error){
console.log(error)
    }

}
getData()