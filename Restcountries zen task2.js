//1.create a xml http request object
var request= new XMLHttpRequest();
//2. open / initiate a connection
request.open('GET','https://restcountries.eu/rest/v2/all',true);
// geting weather datavfrom api
//request.open('GET','https://api.openweathermap.org/data/2.5/weather?zip=94040,us&appid=3618cf40b1ef147440781a260f609345',true);
//3. sending the connection 
request.send();
//4. receiving the data(successfully recived from the server)
//the data recived from the server will be of string format
request.onload=function(){
    var data =JSON.parse(this.response);
    let usdCountries = data.filter(a=>a.currency === 'doller');
    console.log(usdCountries);
    

console.log(data);
}

//ZEN  Task 2
/*

Q1 asianCountries

let asianCountries =data.filter(a=>a.region === 'Asia');
    console.log(asianCountries);

     Q3 countries using doller
    let curr=data.filter((ele=>{
         for(var i in ele.currencies){
              if (else.currencies[i].code==='USD'){
     }
        }).map(ele=>.console.log(ele.name));
        }
    
    Q2. Get the countries with population less than 2L

    let lowPop =data.filter(a=>a.population < 200000);
    console.log(lowPop);
    */
