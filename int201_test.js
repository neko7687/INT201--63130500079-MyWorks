// 2.1
class Student{
    constructor(name,id,subject = [],score,semester){
        this.name = name;
        this.id = id;
        this.subject = subject;
        this.score = score;
        this.semester = semester;
    };}
//2.2    
    const Subject = [
    {   name: 'PHYSICAL EDUCATION',
        id: 'GEN101',
        credit:1
    },
    {   name: 'LEARNING AND PROBLEM SOLVING SKILLS',
        id: 'GEN121',
        credit:3
    },
    {   name: 'INFORMATION TECHNOLOGY FUNDAMENTALS',
        id: 'INT100',
        credit:3
    },{ name: 'PROGRAMMING FUNDAMENTALS',
        id: 'INT101',
        credit:3
    },{ name: 'WEB TECHNOLOGY',
        id: 'INT102',
        credit:1
    },{ name: 'DISCRETE MATHEMATICS FOR INFORMATION TECHNOLOGY',
        id: 'INT114',
        credit:3
    },{ name: 'ACADEMIC ENGLISH',
        id: 'LNG220',
        credit:3
    },
];  



var Student1 = new Student('Preeyathorn Chaiyakum','63130500079',Subject,2.58,'1/2563')   

var sum = 0;

for (var i = 0; i < Subject.length; i++){
        sum += Student1.subject[i].credit       
}

function status(){
    if (Student1.score < 1.5) {
        return Student1.name + `มีสภาพตกออก`;
    }else if (Student1.score < 2) {
        return Student1.name + `มีสภาพวิทยาทัณฑ์`;
    }else{
        return Student1.name + `มีสภาพปกติ`;
    }
}



console.log(`The following are my source codes answer for 2.2
------------------------------------------------------------------`);
console.log(status);
console.log(`------------------------------------------------------------------
End of my answer`);