function Person(name , panswer){
    this.point = 0
        this.name = name
        this.panswer = panswer
    }
let question = [
    {
    question1 : '1+1',
    questionNo : 1 ,
    choice : {
        a : '2',
        b : '3',
        c : '10'
    }
    ,
    answer : 'a'
    },
    {
    question2 : '5+5',
    questionNo : 2 ,
    choice : {
            a : '2',
            b : '3',
            c : '10'
        },
        answer : 'c'
        }
]

let me = new Person("Prin",[{questionNo : 1 ,panswer : 'a'},{questionNo : 2 ,panswer : 'a'}]);

function check(player,question){
    for(let i = 0; i < question.length; i++){ 
        if(question[i].choice == me.panswer[0]){            
            return point += 1;
        }else{
            return "Incorrect Answer";       
        } 
    }
}

console.log(check(me))



