function Automobile(year, make, model, type ){
    this.year = year; //integer (ex. 2001, 1995)
    this.make = make; //string (ex. Honda, Ford)
    this.model = model; //string (ex. Accord, Focus)
    this.type = type; //string (ex. Pickup, SUV)
    Automobile.prototype.logMe = function(isTrue){
	if(isTrue)
		console.log("\n" + this.year +", " +this.make +", " +this.model +", " +this.type);
	else
		console.log("\n" +this.year +", " +this.make +", " +this.model);
	};
}

var automobiles = [ 
    new Automobile(1995, "Honda", "Accord", "Sedan"),
    new Automobile(1990, "Ford", "F-150", "Pickup"),
    new Automobile(2000, "GMC", "Tahoe", "SUV"),
    new Automobile(2010, "Toyota", "Tacoma", "Pickup"),
    new Automobile(2005, "Lotus", "Elise", "Roadster"),
    new Automobile(2008, "Subaru", "Outback", "Wagon")
    ];

/*This function sorts arrays using an arbitrary comparator. You pass it a comparator and an array of objects appropriate for that comparator and it will return a new array which is sorted with the largest object in index 0 and the smallest in the last index*/

function sortArr(comparator, array){
    var newArray = array.slice(0); 
    var len = newArray.length;
    var max;
    
    for(var i = 0; i < len; i++){
        max = i;
        
        for(var j = i + 1; j < len; j++){
            if (comparator(newArray[j], newArray[max])){
                max = j;
            }
        }
       
        if (i != max){
    		var temp = newArray[i];
    		newArray[i] = newArray[max];
    		newArray[max] = temp;
        }
    }
    return newArray; 
  
}


/*For all comparators if cars are 'tied' according to the comparison rules then the order of those 'tied' cars is not specified and either can come first*/

/*This compares two automobiles based on their year. Newer cars are "greater" than older cars.*/ 

function yearComparator(auto1, auto2){
   if (auto1.year > auto2.year){
        return true;
    } else {
        return false;
    }
}

/*This compares two automobiles based on their make. It should be case insensitive and makes which are alphabetically earlier in the alphabet are "greater" than ones that come later.*/
function makeComparator( auto1, auto2){
    if (auto1.make < auto2.make){
        return true;
    } else {
        return false;
    }
}

/*This compares two automobiles based on their type. The ordering from "greatest" to "least" is as follows: roadster, pickup, suv, wagon, (types not otherwise listed). It should be case insensitive. If two cars are of equal type then the newest one by model year should be considered "greater".*/
function typeComparator( auto1, auto2){
    var type1 = (auto1.type).toUpperCase();
    var type2 = (auto2.type).toUpperCase();
    
    var t1, t2;
    
    
    switch (type1)
    {
        case "WAGON":
          	t1 = 1;
            break;
        case "SUV":
            t1 = 2;
            break;
        case "PICKUP":
            t1 = 3;
            break;
        case "ROADSTER":
            t1 = 4;
            break;
        default:
            t1 = 0;
    }
    
    switch (type2)
    {
        case "WAGON":
          	t2 = 1;
            break;
        case "SUV":
            t2 = 2;
            break;
        case "PICKUP":
            t2 = 3;
            break;
        case "ROADSTER":
            t2 = 4;
            break;
        default:
            t2 = 0;
    }
    
    if (t1 > t2){
        return true;
    } 
    else if(t1 == t2) {
        if(yearComparator(auto1, auto2)){
         	return true;
        }
        else
            return false;
    }
    else
    {
        return false;
    }
    
    
    
}

/*Your program should output the following to the console.log, including the opening and closing 5 stars. All values in parenthesis should be replaced with appropriate values. Each line is a seperate call to console.log.

Each line representing a car should be produced via a logMe function. This function should be added to the Automobile class and accept a single boolean argument. If the argument is 'true' then it prints "year make model type" with the year, make, model and type being the values appropriate for the automobile. If the argument is 'false' then the type is ommited and just the "year make model" is logged.*/


var yearArr = sortArr(yearComparator, automobiles);
var makeArr = sortArr(makeComparator , automobiles);
var typeArr = sortArr(typeComparator , automobiles);


var log3 = function(currVehicle) {
currVehicle.logMe(false);
};
var log4 = function(currVehicle) {
currVehicle.logMe(true);
};
 
console.log("*****");

console.log("The cars sorted by year are:");
yearArr.forEach(log3);
console.log();

console.log("The cars sorted by make are:");
makeArr.forEach(log3);
console.log();

console.log("The cars sorted by type are:");
typeArr.forEach(log4);
console.log("*****");

