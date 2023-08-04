//const data is object that stores all quiz questions

//here I uesd named export for export file 
export const Data = {

    //questions is aaray ,that stores all questions with right answer and options
    questions: [{
            question: ' Which of the following command is used to install create-react-app?',
            choices: ['npm install -g create-react-app', 'npm install create-react-app', 'npm install -f create-react-app', 'install -g create-react-app'],
            type: 'MCQs',
            correctAnswer: 'npm install -g create-react-app',
        },
        {
            question: ' What of the following is used in React.js to increase performance?',
            choices: ['Original DOM', 'Virtual DOM', 'Both A and B', 'None of the above'],
            type: 'MCQs',
            correctAnswer: 'Virtual DOM',
        },
        {
            question: ' A class is a type of function, but instead of using the keyword function to initiate it, which keyword do we use?',
            choices: ['Constructor', 'Class', 'Object', 'DataObject'],
            type: 'MCQs',
            correctAnswer: 'Class',
        },
        {
            question: 'Which of the following keyword is used to create a class inheritance?',
            choices: ['Create', 'Inherits', 'Extends', 'This'],
            type: 'MCQs',
            correctAnswer: 'Extends',
        },
        {
            question: ' What is the declarative way to render a dynamic list of components based on values in an array?',
            choices: ['Using the reduce array method', 'Using the <Each /> component', 'Using the Array.map() method', 'With a for/while loop'],
            type: 'MCQs',
            correctAnswer: 'Using the Array.map() method',
        },
        {
            question: 'How many ways of defining your variables in ES6?',
            choices: ['1', '3', '4', '5'],
            type: 'MCQs',
            correctAnswer: '3',
        },

    ],
}