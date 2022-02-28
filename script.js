var array=[10,20,30,40,50];
console.table(array);
array[5]=60;
console.log(array[5]);


var cities=new Array();
cities[0]="pune";
cities[1]="mumbai";
cities[2]="kolhapur";
cities[3]="baramati";
console.log(cities);
for (var i=0; i<cities.length;i++)
{console.log(cities[i]);
}
cities.forEach(function(city) {console.log(cities)});

for (var index in cities)
{console.log(cities[index]);}

for (var city of cities) {console.log(city);
}

let array=[10,20,30,50,40]
console.log(array.sort());
console.log(array.sort().reverse());

let programminglanguage =["java","c++","js","python"];
programminglanguage.shift();
console.log(programminglanguage);
programminglanguage.unshift("php");
console.log(programminglanguage);

let data=[ 
    {
        name :"shailesh",
        age :25,
        salary :35000,
        city : "hingani"
    },
    {
        name :"Changdeo",
        age :26,
        salary :34000,
        city : "Vasunde"
    },
    {
        name :"Rama",
        age :31,
        salary :40000,
        city : "Daund"
    },

    {
        name :"Kiran",
        age :27,
        salary :50000,
        city : "Baramati"
    
    }

]
console.log(data);
for (var i=0; i<data.length; i++)
{console.log(data[i]);}
{console.log(data[i].name);}
for (var i=0; i<data.length; i++) 
{
user=data[i];
console.log(
   ` name:${user.name}
    age:${user.age}
    salary:${user.salary}
    city:${user.city}`
)

}





