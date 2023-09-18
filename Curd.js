let data = [
  {
    "UserId": 1,
    "FN": "Arjun",
    "LN": "Gopal",
    "Phone": "9874563210",
    "Email": "arjun@gmail.com",
    "Gender": "Male",
    "City": "Surat"
  },
  {
    "UserId": 2,
    "FN": "Rahul",
    "LN": "Kumar",
    "Phone": null,
    "Email": "rahul@gmail.com",
    "Gender": "Male",
    "City": "Surat"
  },
  {
    "UserId": 3,
    "FN": "Aakash Rameshbhai",
    "LN": "Tanwani",
    "Phone": "9898287089",
    "Email": "vinpahilincometax1@gmail.com",
    "Gender": "Male",
    "City": "Rajkot"
  },
  {
    "UserId": 4,
    "FN": "Abhijeet",
    "LN": "Chopra",
    "Phone": "9558709695",
    "Email": "abhijeet@gmail.com",
    "Gender": "Male",
    "City": "Bhuj"
  },
  {
    "UserId": 5,
    "FN": "Aditi",
    "LN": "Thapar",
    "Phone": "9558796095",
    "Email": "thapar@gmail.com",
    "Gender": "Female",
    "City": "Bhuj"
  },
  {
    "UserId": 6,
    "FN": "DECOR",
    "LN": "AAIJI ",
    "Phone": "7425896095",
    "Email": "aaiji@gmail.com",
    "Gender": "Male",
    "City": "Surat"
  },
  {
    "UserId": 7,
    "FN": "Hardik",
    "LN": "Patel",
    "Phone": "6353695363",
    "Email": "hardik@gmail.com",
    "Gender": "Male",
    "City": "Surat"
  },
  {
    "UserId": 8,
    "FN": "Harsh",
    "LN": "Fammeo",
    "Phone": "7359938113",
    "Email": "fammoe@gmail.com",
    "Gender": "Male",
    "City": "Surat"
  },
  {
    "UserId": 9,
    "FN": "Anjali",
    "LN": "Patel",
    "Phone": "951236470",
    "Email": "anjali@gmail.com",
    "Gender": "Male",
    "City": "navsari"
  },
  {
    "UserId": 10,
    "FN": "Avinash",
    "LN": "Koshti",
    "Phone": "7558796095",
    "Email": "koshti@gmail.com",
    "Gender": "Male",
    "City": "Surat"
  }
]





function Allread(){
  console.log(window.history)
localStorage.setItem('project6' , JSON.stringify(data))
var tabledata = document.querySelector('.data_table')
let obj = localStorage.getItem('project6')
let objdata = JSON.parse(obj)


console.log(objdata)

let elements=''
data.map((details)=>{
elements += `
<tr>
<td>${details.UserId}</td>
<td>${details.FN}</td>
<td>${details.LN}</td>
<td>${details.Email}</td>
<td>${details.Gender}</td>
<td>${details.Phone}</td>
<td>${details.City}</td>

<td>
<button onclick={edit(${details.UserId})}>Edit</button>
<button onclick={delet(${details.UserId})}>Delete</button>
</td>
</tr>` 


})
document.querySelector('.data_table').innerHTML=elements

}


// new data
function add(){

    let UserId = document.querySelector(".UserId").value
    let LN = document.querySelector(".FN").value;
    let FN = document.querySelector(".LN").value;
    let Email = document.querySelector('.Email').value;
    let City = document.querySelector(".City").value;
    let Gender = document.querySelector(".Gender").value;
    let Phone = document.querySelector(".Phone").value;

   let newobject={UserId:parseFloat(UserId), FN:FN , LN:LN , Phone:Phone , Email:Email , Gender:Gender , City:City }
data.push(newobject)

Allread()
}


// edit old data
function edit(details){

console.log(details)//user id

const gls = localStorage.getItem('project6')
const lc = JSON.parse(gls)//converting to object

var obj = lc.find(rec=>rec.UserId===details)

document.querySelector(".userid").value=obj.UserId
 document.querySelector(".fn").value=obj.FN
  document.querySelector(".ln").value=obj.LN
 document.querySelector('.email').value=obj.Email
 document.querySelector(".city").value=obj.City
 document.querySelector(".gender").value=obj.Gender
document.querySelector(".phone").value=obj.Phone
}

// update old data
function update(){

 var UserId = parseInt(document.querySelector(".userid").value)
  var FN= document.querySelector(".fn").value
   var LN = document.querySelector(".ln").value
   var Email = document.querySelector('.email').value
   var City = document.querySelector(".city").value
   var Gender = document.querySelector(".gender").value
 var Phone = document.querySelector(".phone").value


 var obj = data.findIndex(rec=>rec.UserId===UserId);
console.log(obj)
data[obj]={UserId , FN , LN , Email , City , Gender ,Phone};


Allread();

}

// delet data
function delet(id){
data = data.filter(rec=>rec.UserId!==id)
Allread()
}


let form = document.getElementById('form')
form.addEventListener('click' , (e)=>{
  e.preventDefault()
})

let formm = document.getElementById('formm')
formm.addEventListener('click' , (e)=>{
  e.preventDefault()
})
