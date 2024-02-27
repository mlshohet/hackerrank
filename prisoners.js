function saveThePrisoner(prisoners, candy, start) {

    // if ((prisoners - candy % prisoners) < start - 1) {
    //     console.log("in here");
    //     let result = candy % prisoners - (prisoners - start + 1);
    //     if (result === 0) {
    //         result = start;
    //     }
    //     console.log("result:", result);
    //     return result;
    // }
    // let result =  candy % prisoners + start - 1;
    // if (result === 0) {
    //     result = start;
    // }
    // console.log("result: ", result);
    // return result;

    let result;
 
        result = ((start + candy - 2)) % prisoners + 1;

    console.log(result);
    return result;
}

//saveThePrisoner(19, 12, 13);
// saveThePrisoner(4, 8, 1);
// saveThePrisoner(7, 19, 2);
saveThePrisoner(3, 7, 3);
//saveThePrisoner(10, 995691642, 9);