function detectPalindrome(num){
    //write code here
    let tempnum=num;
    let palindrome=0;
    let digits=0;
    while(tempnum>0){
      digits=tempnum%10;
    palindrome=palindrome*10+digits;
      tempnum=Math.floor(tempnum/10);
    }
    if(num==palindrome){
        console.log("Yes");
    }
    else{
        console.log("No");
    }
    
    
    }
    