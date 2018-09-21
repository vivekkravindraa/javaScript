var s1 = {
    name: 'Ravi',
    email: 'ravi@gmail.com',
    course: 'MERN'
};
var s2 = {
    name: 'Raskesh',
    email: 'rakesh@gmail.com',
    course: 'MERN'
};
var s3 = {
    name: 'Suhasini',
    email: 'suhasini@gmail.com',
    course: 'MERN'
};

var students = [];
students.push(s1);
students.push(s2);
students.push(s3);

//student.push(s1, s2, s3)

students.forEach(function(student) {
    console.log(student);
});

students.forEach(function(student, index) {
    console.log(`${index} ${student.name} | ${student.email} | ${student.course}`);
});