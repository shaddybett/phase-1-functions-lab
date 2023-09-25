
function distanceFromHqInBlocks(d){
    if(d===43)return 1;
    else if(d===50)return 8;
    else if(d===34) return 8;
}
function distanceFromHqInFeet(f){
    if(f===43) return 264;
    else if(f===50) return 2112;
    else if(f===34)return 2112;
}
function distanceTravelledInFeet(start,destination){
    const feet = 264
    const distanceFromHqInBlocks = Math.abs(start-destination);
    const total = distanceFromHqInBlocks *feet;
    return total
}
function calculatesFarePrice(start,destination){
   let x = distanceTravelledInFeet(start,destination)
   if (x<400){
    return 0
   } 
   else if (x > 400 & x<2000){
    let y=x-400
    return y* 0.02
   }
   else if (x>2000 & x<2500){
    return 25
   }
   else return 'cannot travel that far'
}

// Code your solution in this file!
