// Feel Good Strings
// Tom loves vowels. Any string which have half of the characters vowels make him feel good. You are given a string of length N. where N is an even number. If the number of vowels in the string, are more than or e qual to N/2, print "Feel good!", else print "Feel bad!". (All the letters in t he string are in lower case).
// Note: The letters a, e, i, o, and u are said to be vowels.
// Input
// The first line of the input contains N, the length of the string. The next li ne contains a string of size N.
// Print "Feel good!", if the number of vowels in the string is more than or equal to N/2, else print "Feel bad!".
// 17
// Sample Input 1
// 4
// Sample Output 1
// Feel good!
// In the first sample test case, the number of vowels in the string are 4, w hich is more than N/2 i.e. 2, therefore the output is "Feel good!".
// In the second sample test case, the number of vowels in the string are 1, which is less than N/2 i.e 2, therefore the output is "Feel bad!".


function feelGoodStrings(N,string){
    //write code here
    
    let count=0;
    let s=string;
   
    for(let i=0;i< s.length;i++){
   
        if(s[i]=='a'||s[i]=='e'||s[i]=='i'||s[i]=='o'||s[i]=='u'){
          
            count++;
        }
    
    }
        if(count>=N/2){
            console.log("Feel good!");
            
        }
        else{
            console.log("Feel bad!");
        }
}
