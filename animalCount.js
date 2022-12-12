function animalCount (miles){
    if(miles <= 10){
        let firstCount = miles * 10;
        return firstCount;
    }
    else if(miles >= 11 && miles <= 20){
        let secondCount = (miles - 10) * 50;
        let secondTotalCount = secondCount + (10 * 10);
        return secondTotalCount;
    }
    else{
        let thirdCount = (miles - 20) * 100;
        let thirdTotalCount = thirdCount + (10 * 10) + (50 * 10);
        return thirdTotalCount;
    }
}

let totalAnimal = animalCount(35);
console.log('Total Animal Found:',totalAnimal);