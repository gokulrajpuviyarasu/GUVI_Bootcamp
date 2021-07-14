
async function getdata(){
    try{
     var data = await fetch("https://60ebd374e9647b0017cdde58.mockapi.io/api/users1/users")
     var res = await data.json();
     console.log(res)
     
 
 
 
 
 
 
     
     for(var i in res){
 
 
    var tbody = document.createElement('tbody');
     tbody.setAttribute("class","tabody")
     var tr = document.createElement("tr");
     
     var ele3 = document.createElement("td")
     ele3.innerText =  res[i].id;
     ele3.style.border = "thick solid #0000FF";
     ele3.style.padding = "10px";
     
     var ele = document.createElement("td")
     ele.innerText =  res[i].name;
     ele.style.border = "thick solid #0000FF";
     ele.style.marginRight = "10px";
     
     var ele1 = document.createElement("td")
 
     ele1.innerText = res[i].age;
     ele1.style.border = "thick solid #0000FF";
     ele1.style.padding = "10px";
 
     var ele4 = document.createElement("td")
     ele4.innerText =  res[i].email;
     ele4.style.border = "thick solid #0000FF";
     ele4.style.padding = "10px";
 
     var ele5 = document.createElement("td")
     ele5.innerText =  res[i].phone;
     ele5.style.border = "thick solid #0000FF";
     ele5.style.padding = "10px";
 
     var ele6 = document.createElement("td")
     ele6.innerText =  res[i].dob;
     ele6.style.border = "thick solid #0000FF";
     ele6.style.padding = "10px";
 
     var ele2 = document.createElement("td")
     ele2.innerText =  res[i].password;
     ele2.style.border = "thick solid #0000FF";
     ele2.style.padding = "10px";
     
     tr.appendChild(ele3);
     tr.appendChild(ele);
     tr.appendChild(ele1);
     tr.appendChild(ele4);
     tr.appendChild(ele5);
     tr.appendChild(ele6);
     tr.appendChild(ele2);
     
     tbody.appendChild(tr)
    
    document.getElementById('table1').appendChild(tbody)
 
 }
 
 
 }
      catch (error){
       console.log(error);
    }
 }
 getdata()