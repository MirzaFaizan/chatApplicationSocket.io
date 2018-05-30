calculateAge(1997);


function calculateAge(year){
    console.log(2018-year);
}


// var retirement = function(year){
//     console.log(65-(2017-year));
//     console.log(this);
// }

// retirement(1990);

var john = {
    name:'john',
    yearOfBirth: 1990,
    calculateAge: function(){
        console.log(this);
        
    }
};

var mike={
    name:'mike',
    yearOfBirth:1984
};

mike.calculateAge=john.calculateAge;

mike.calculateAge();