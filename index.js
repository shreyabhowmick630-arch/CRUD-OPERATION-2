let frm = document.getElementById("frm")
let i1 = document.getElementById("i1")
let i2 = document.getElementById("i2")
let btn = document.getElementById("btn")
let tbody = document.getElementById("tbody")

// dataset
let data = [
    {name:"Shree", age:20},
    {name: "Ram", age: 30}
]
//(R)READ
function readdata(){
    tbody.innerHTML="" //value duplicate off 
    data.map((e,i) => {
    //console.log(e.name)
    //console.log(e.age)
    let tr = document.createElement("tr")
    tr.innerHTML = `
    <td>${i+1}</td>
    <td>${e.name}</td>
    <td>${e.age}</td>
    
    <td><button onclick="editdata(${i})">Edit</button></td>
    <td><button onclick="deletedata(${i})">Delete</button></td>
    `
    tbody.append(tr)
})
}
readdata() //function
//(c)ADD/update
let editIndex = null
frm.addEventListener("submit",(e)=>{
    e.preventDefault() //stop the auto refress
    let i1=document.getElementById("i1").value 
    let i2=document.getElementById("i2").value
    let obj = {name:i1,age:i2}
    if (editIndex == null)//insert
    {
       data.push(obj);
    }
    else{
        data[editIndex] = obj
        editIndex = null
        document.getElementById("btn").innerHTML = "Save"
        document.getElementById("hd").innerHTML = "CRUD OPEARATION"
    }


    readdata()
    frm.reset()
})
//DELETE
function deletedata(i){
    if(window.confirm("Are you sure?")){
    data.splice(i,1) //SPLICE(INDEX, HOW MANY ELEMENTS YOU WANT TO DELETE)
    readdata()
    frm.reset()
    }
}
//edit
function editdata(i){
    document.getElementById("i1").value = (data[i].name)
    document.getElementById("i2").value = (data[i].age)
    document.getElementById("btn").innerHTML = "Update"
    document.getElementById("hd").innerHTML = "Update From"
    editIndex = i
}