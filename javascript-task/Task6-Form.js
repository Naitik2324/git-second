
document.getElementById("States").addEventListener("change",()=>{
    var x=document.getElementById("States").selectedIndex;
    document.getElementById("cities").selectedIndex=x;
});

const cityOptions = {
    'Gujarat' : ['Ahmedabad','Bhavnagar','Rajkot','Junagadh'],
    'Maharasthra' : ['Mumbai','Pune','Thane'],
    'Rajasthan' : ['Jodhpur','Udaipur','Jaipur']
};

const selectcity = () =>{
    const selectedstate =  document.getElementById("States").value;
    const city = document.getElementById("cities");

    city.innerHTML = "<option value='' disabled>Select your city</option>";

    if(selectedstate !== '' ){
        const cityoption =  cityOptions[selectedstate];
        for (let i in cityoption){
            const option = document.createElement('option');
            option.text = cityoption[i];
            option.value = cityoption[i];
            city.add(option);
        }
    }

}

const arr=[];

var getitems = JSON.parse(localStorage.getItem("Lists"));
       

const check_validations = () =>{
    
    const hobby = hobby_val();
    if((document.getElementById("name").value).trim() == "")
    {
        alert("Enter your name");
    }
    else if((document.getElementById("email").value).trim() == "")
    {
        alert("Enter your Email");
    }
    else if((document.getElementById("age").value).trim() == "" || (document.getElementById("age").value) < 1)
    {
        alert("Enter age");
    }
    else if(gender_val() == null){
        alert("Select your Gender ");
    }
    else if(hobby == null){
        alert("Select your Hobby ");
    }
    else if((document.getElementById("cities").value) == "null"){
        alert("Select your city ");
    }
    else
    {
        alert("Thank You.. ");
        getValues();
    }
}

const getValues = () =>{
    const details ={name:"", email: "",age:"",gender:"",hobby:"",city:"",state:""};

    details.name= document.getElementById("name").value;
    details.email = document.getElementById("email").value;
    details.age= document.getElementById("age").value;
    details.gender = gender_val();
    details.hobby = hobby_val();
    details.city = document.getElementById("cities").value;
    details.state = document.getElementById("States").value;
    

    arr.push(details);

    if(getitems.length > 0)
    {
        getitems.push(details);
        localStorage.setItem("Lists",JSON.stringify(getitems));
    }
    else{
        localStorage.setItem("Lists",JSON.stringify(arr));
    }
    location.reload()
    
}

const show_all_data = () =>{
    var html = "";
        document.getElementById("Search_value").value= "";
        getitems.forEach(function (element,index){
                html += "<tr>";
                html += "<td>" + element.name + "</td>";
                html += "<td>" + element.email + "</td>";
                html += "<td>" + element.age + "</td>";
                html += "<td>" + element.gender + "</td>";
                html += "<td>" + element.hobby + "</td>";
                html += "<td>" + element.city + "</td>";
                html += "<td>" + element.state + "</td>";
                html += '<td><button onclick="deletedata('+index+')"> Delete </button> <button onclick="updatedata('+index+')"> Update </button></td>';
                html += '</tr>';
        });
        document.querySelector("#data tbody").innerHTML = html;
}

const showdetails = () =>{
    var html = "";
        getitems.forEach(function (element,index){
                html += "<tr>";
                html += "<td>" + element.name + "</td>";
                html += "<td>" + element.email + "</td>";
                html += "<td>" + element.age + "</td>";
                html += "<td>" + element.gender + "</td>";
                html += "<td>" + element.hobby + "</td>";
                html += "<td>" + element.city + "</td>";
                html += "<td>" + element.state + "</td>";
                html += '<td><button onclick="deletedata('+index+')"> Delete </button> <button onclick="updatedata('+index+')"> Update </button></td>';
                html += '</tr>';
        });
        document.querySelector("#data tbody").innerHTML = html;
    

    document.getElementById("Search_value").addEventListener('input',() => {
        const Search_value = document.getElementById("Search_value").value;
        html = "";
        document.querySelector("#data tbody").innerHTML = html;
        getitems.forEach(function (element,index){
            if(element.name == Search_value)
            {
                html += "<tr>";
                html += "<td>" + element.name + "</td>";
                html += "<td>" + element.email + "</td>";
                html += "<td>" + element.age + "</td>";
                html += "<td>" + element.gender + "</td>";
                html += "<td>" + element.hobby + "</td>";
                html += "<td>" + element.city + "</td>";
                html += "<td>" + element.state + "</td>";
                html += '<td><button onclick="deletedata('+index+')"> Delete </button> <button onclick="updatedata('+index+')"> Update </button></td>';
                html += '</tr>';
            }
        });
        document.querySelector("#data tbody").innerHTML = html;
        console.log(Search_value);
    });
    
}
const gender_val = () => {
        var val= document.getElementsByName("Gender");
        for (i = 0; i < val.length; i++) {
        if (val[i].checked)
            return val[i].value;
    }
}
const hobby_val = () => {
        var val= document.getElementsByName("Hobby");
        var hobby = "";
        for (i = 0; i < val.length; i++) {
            if (val[i].checked){
                    hobby += val[i].value + " ";
                    return hobby;
                }
            }
}


var age = document.getElementById("age").value; 
var ageval=1;
    document.getElementById("addbutton").addEventListener("click",() => {
        ageval++;
        document.getElementById("age").value = ageval;
        console.log("age is :"+ ageval);
       
    });
    document.getElementById("subbutton").addEventListener("click",() => {
        --ageval;
        document.getElementById("age").value = ageval;
        console.log("age is :"+ ageval);
        if(ageval == 0){
            alert("Age can't be beyound 0");
            ageval=1;
        }
    });

const deletedata = (index) =>{
    getitems.splice(index,1);
    localStorage.setItem("Lists",JSON.stringify(getitems));
    showdetails();
};

function check_validations_updations(){
    if((document.getElementById("name").value).trim() == "")
    {
        alert("Enter your name");
       
    }
    else if((document.getElementById("email").value).trim() == "")
    {
        alert("Enter your Email");
        
    }
    else if((document.getElementById("age").value).trim() == "" || (document.getElementById("age").value) < 1)
    {
        alert("Enter age");
      
    }
    else if(gender_val() == null){
        alert("Select your Gender ");
       
    }
    else if(hobby_val() == null){
        alert("Select your Hobby ");
        
    }
    else if((document.getElementById("States").value) == "null"){
        alert("Select your States ");
        
    }
    else
    {
        return true;
    }
   
};

let i = '';
const updatedata = (index) =>{
    document.getElementById("submit").hidden = true;
    document.getElementById("update").hidden = false;

    document.getElementById("name").value = getitems[index].name;
    document.getElementById("email").value = getitems[index].email;
    document.getElementById("age").value = getitems[index].age;
    // document.getElementsByName("Gender").checked= getitems[index].gender.value;
    // document.getElementsByName("hobby").checked = getitems[index].hobby.value;
    // document.getElementById("States").value = getitems[index].state;
    // document.getElementById("cities").value = getitems[index].city;
    console.log("Index is :" + index);
    i = index;
    console.log(" i is "+i);
    document.getElementById("update").setAttribute('btn-value',index);
};

const updatenewdata = () => {
   
    console.log("index of update data ");
   
    const check = check_validations_updations();
    if( check == true ){
        
        const index = document.getElementById("update").getAttribute('btn-value');
        getitems[index].name = document.getElementById("name").value;
        getitems[index].email = document.getElementById("email").value;
        getitems[index].age = document.getElementById("age").value;
        getitems[index].gender = gender_val();
        getitems[index].hobby = hobby_val();
        getitems[index].city = document.getElementById("cities").value;
        getitems[index].state = document.getElementById("States").value;

        localStorage.setItem("Lists",JSON.stringify(getitems));
        showdetails();
        location.reload();
    }
    else
    {
        console.log(check);
    }
}

