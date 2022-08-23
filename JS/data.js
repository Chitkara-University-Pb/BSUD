
getData()
var bigData;
function getDate(){
fetch('http://localhost:3000/user/').then((response)=>{

    return response.text();
}).then((data)=>{
    bigData = data;
    console.log(data);
})
}