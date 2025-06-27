let student={
    name:"Ujjwal",
    age:20,
    subject:["Hindi, English, Math"],
    Address:{
        city:"Patna",
        State:"Bihar"
    }

}
console.log(student);
console.log(student.name);
student.name="Shivam";//Name got updated
console.log(student[0]);
delete student.name;//delete the keys
console.log(student);
console.log(Object.keys(student));// Access only keys method
