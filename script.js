
const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "Which Of The Following Is An Internet Protocol?",
        a: "FTP",
        b: "TCP/IP",
        c: "EFT",
        d: "EDI",
        correct: "b",
    },
    {
        question: "What Tag Is Used For Inserting A Line Break In A Html Page?",
        a: "<break>",
        b: "<ol>",
        c: "<lb>",
        d: "<br>",
        correct: "d",
    },
    {
        question: "Which Of The Following Is An Example Of FTP?",
        a: "Personal",
        b: "Web Server",
        c: "SQL",
        d: "Cute-FTP",
        correct: "d",
    },
    {
        question: "Which Object Supports File System API?",
        a: "Element",
        b: "File",
        c: "Window",
        d: "DOM",
        correct: "b",
    },
    {
        question: "Computers In Internet Are Connected Through?",
        a: "Fiber-optic Cables",
        b: "Telephone Lines",
        c: "Satellite",
        d: "All Of the Above",
        correct: "d",
    },
    {
        question: "Shortcut To Refresh A Web Page Is?",
        a: "F2",
        b: "F7",
        c: "F1",
        d: "F5",
        correct: "d",
    },
    {
        question: "This Is Not Part Of A Complete URL?",
        a: "Browser",
        b: "Path",
        c: "Resource Name",
        d: "Protocol",
        correct: "a",
    },
    {
        question: "Which Attribute Of  Tag Defines The Url Of The Image To Be Loaded?",
        a: "Hspace",
        b: "Src",
        c: "Vspace",
        d: "Width",
        correct: "b",
    },
    {
        question: " Href?",
        a: " Is A Tag Of A Tag",
        b: "Is A Value Of A Tag",
        c: "Is An Attribute Of A Tag",
        d: "Stands For Hyperlink Repeat Electronic Filling",
        correct: "c",
    },
    {
        question: "The Attribute Of The <tr> Tag Sets The Vertical Alignment Of The Row Is?",
        a: "Vrow",
        b: "Haling",
        c: "Align",
        d: "Valign",
        correct: "d",
    },
    {
        question: " Which Tag Is Used To Include A Separately Defined Style Sheet In Web Pages?",
        a: "<style>",
        b: "<import>",
        c: "<link>",
        d: "<body>",
        correct: "c",
    },
    {
        question: " String Can Include Which Of The Following Characters?",
        a: "A",
        b: "@",
        c: "+",
        d: "All of these",
        correct: "d",
    },
    {
        question: "Which Of The Following Is A Data Type?",
        a: "String",
        b: "12",
        c: "include",
        d: "Method",
        correct: "a",
    },
    {
        question: "In Which Loop, Condition Comes After The Body Of The Loop?",
        a: "While Loop",
        b: "for Loop",
        c: "Do-While Loop",
        d: "Nested Loop",
        correct: "c",
    },
    {
        question: "Which Javascript Event Handler Pertains To Actions Enabled By Mouse Clicks?",
        a: "OnTouch",
        b: "OnClick",
        c: "OnPress",
        d: "Clickme",
        correct: "b",
    },
    {
        question: "A New Array Can Be Declared By Which Of The Following?",
        a: "Student = New Array",
        b: "Array = New Student",
        c: " Student = New Array();",
        d: " Array = New Student();",
        correct: "c",
    }
    
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
// const Name = document.getElementById("input-name")  

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})