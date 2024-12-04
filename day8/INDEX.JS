console>log("-----welcome in Js-----");
let arr = [1,2,3,4,5,6,7, "hello", true];
for (let i =0; i<arr.length; i++) {
    console.log(arr[i]);
}
arr.push("deepak")
console.log("-----------")

for (let i=0; i< arr.length; i++) {
    console.log(arr[i]);
    arr.pop();
}
    for (let i= 0; i< arr.length; i++){
        console.log(arr[i]);
    }
//arr.splice(start,count,addon)
arr.splice(2,1);
    for (let i=0; i< arr.length; i++) {
        console.log(arr[i]);
    }
    const newArr = [5,5,6,4,3,5,4,56,4,3,]
    let count = 0;
    arr.splice(2,1);
    for (let i = 0 ; i < arr.length, i++) {
        console.log(arr[i]);
        if (arr[i]%2 === 0) count++;
    }
    console.log("count");
          
    const inputArr = [1,4,5,6,73,2,4]

    let student_id_card = {
        // key:value
        name: "deepak",
        Rollnumber: "2478798",
        adress: "xyz...",
        section: "a",
        course: "B-Tech",
        branch: "cse"
    };

    // print:
    const address = student_id_card.address;
    const course = student_id_card.course;

    //console.log(adress, course);
"B";
    console.log(student_id_card);
    delete student_id_ca
    student_id_card.result = "Pass";
student_id_card.section = rd.name;