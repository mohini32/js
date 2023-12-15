function stringValue(S) {
    //write code here
    let arr=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let sum=0;
  for(i=0;i<=S.length-1;i++){
     letstringval= arr.indexOf(S[i]);
  //   console.log(letstringval);
      sum=sum+letstringval+1;
  }
  
   console.log(sum);
  
  
  
  
  }
  