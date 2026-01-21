//
//let arr=[1,2,3,4,5];
//let newarr=[];
//for(let i=1;i<=arr.length;i++){
    //newarr=arr.pop();

//}
// console.log(newarr)

 //Q2. 
 //let arrr=[5,-7,12,-6,-13,15,2];
 //let positivearr=[];
// for(let i=0;i<arrr.length;i++){
    //if(arrr[i]>0){
      //  positivearr.push(arrr[i]);
   // }                       

   function palindrome() {
    let arr = [1, 2, 3, 2, 1]
    let original = [...arr]
    console.log(original)
    let reverse = []

    //push given array elements into original array
    // for (let i = 0; i < arr.length; i++) {
    //     original.push(arr[i])
    // }
    //reverse the given array
    while (arr.length > 0) {
        reverse.push(arr.pop())
    }
    for (let i = 0; i < original.length; i++) {
        if (original[i] !== reverse[i]) {
            return "not a palindrome";
        }
    }
    return "palindrome";
}
console.log(palindrome())