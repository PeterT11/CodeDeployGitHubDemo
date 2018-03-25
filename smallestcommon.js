function smallestCommons(arr) {
  var factors = []; //At least 1 is a factor;

  function findFactors(fArr, num) {
    var finded = false;
    for (var i = 2; i <= num / 2; i++) {
      if (num % i === 0 ) {
        finded == true;
        fArr.push(i);
        console.log("for",i,num,fArr);
        findFactors(fArr, num / i);
        return;
      } //if
    }// for
    if(!finded) fArr.push(num);  
  } //end of findFactors;
 // findFactors(factors,100);
  //console.log(factors);
  
  var min = (arr[0]<=arr[1])?arr[0]:arr[1];
  var max = (arr[0]<=arr[1])?arr[1]:arr[0];
  //console.log(min,max);

  for(var i= min; i<= max; i++)
  {
      var t =i;
      for(var j=0; j<factors.length;j++)
        if(t%factors[j]==0) t /= factors[j];
      findFactors(factors,t);
  }
  for(var i=0; i<factors.length;i++){

}
 //   findComms(factors,i);
  console.log(factors);
  return factors;
}

smallestCommons([1, 7]);
