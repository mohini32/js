function applyBasicMaths(N,A){
    //write code here
    let sum=0;
    
    for(i=0;i<N;i++){
        sum=sum+A[i];
        
    }
    
    let difference;
    let flag=false;
    let index=-1;
    
    for(j=0;j<N;j++){
        
        let difference=sum-A[j];
        if(difference%7==0){
            
            if(flag==false){
               index=j;
               flag=true;
            }else if(A[index]>A[j]){
                index = j;
            }
        }
    }
    
   console.log(index);
}
       
    
    