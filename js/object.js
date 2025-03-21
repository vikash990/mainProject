// curd in objects 

var personDetails={
    first_name:"vikash",
    last_name:"dubey",
    college:"sharda",
    fullName:function(){
        console.log(this.first_name,this.last_name,this.college)
    }
}

personDetails.rollNumber=90;
personDetails.first_name="rahul";
delete personDetails.last_name;

console.log(personDetails.first_name);
console.log(personDetails["first_name"]);
personDetails.fullName();
console.log(personDetails);

for(x in personDetails){
    console.log(x)
}