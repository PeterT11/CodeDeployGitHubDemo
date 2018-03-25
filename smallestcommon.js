function findFactors(fArr, num) { //find all factors of a number and keep them in an array;
  var finded = false;
  if(num<2) return; //no factors if num less 2;
  for (var i = 2; i <= num / 2; i++) {  //start try from 2;
    if (num % i === 0 ) {   //if i is a factor of num
      finded = true;
      fArr.push(i);
      findFactors(fArr, num / i);  //recursive call to find remain factors;
      return;
    } //if
  }// for
  if(!finded) fArr.push(num);  
} //end of findFactors;

function smallestCommons(arr) {
 var factors = [];   
  arr = arr.sort((a,b)=>a-b);
 for(var i= arr[0]; i<= arr[1]; i++)
 {
     var t =i; //temperory variable to keep the remain.
     for(var j=0; j<factors.length;j++)
       if(t%factors[j]===0) t /= factors[j];//remove the factors alrady exist in factors[];
     findFactors(factors,t); //find the factors for the remain.
 }
 var sum =1;
 for(i=0; i<factors.length;i++){
   sum *= factors[i];
 }
 return sum;
}

smallestCommons([1, 13]);