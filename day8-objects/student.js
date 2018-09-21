var student = ['Ravi D L', 'ravi.daasari@gmail.com', '9945371612', 'Web Development', 'reference'];

var studentNested = [
    ['name','Ravi D L'],
    ['email','ravi.daasari@gmail.com'],
    ['phone','9945371612'],
    ['course','Web Development'],
    ['source','reference']
];

var studentObj = {
    name: 'Ravi D L',
    email: 'ravi.daasari@gmail.com',
    phone: '9945371612',
    course: 'Web Development',
    source: 'reference',
    skills: ['js','ruby','python','php'],
    education: [
        {
            PUC: 2012
        },
        {
            Degree: 2016
        },
        {
            Masters: 2018
        }
    ]
};

console.log(studentObj);

// studentObj['skills'] = ['js','ruby','python','php'];
// console.log(studentObj);

console.log('Name',studentObj.name);
console.log('Skills',studentObj.skills);
console.log('Education',studentObj.education[0]['PUC']);