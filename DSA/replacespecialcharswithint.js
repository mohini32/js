function charactersofArray(N, str){
	//Write your code here
	let ans="";
	for(i=0;i<N;i++){
	    if(str[i]=="@"){
	       ans=ans+1;
	    }
	    else if(str[i]=="%"){
	        ans=ans+2;
	    }
	    else{
	        ans=ans+3;
	      
	    }
	}
	console.log(ans)
}
5
// *@%%@