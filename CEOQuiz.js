var readlineSync = require('readline-sync');
const chalk = require('chalk');

function Game(name) {
  console.clear();
  score = 0
  questions = [{
    question: 'Who is the CEO of Google? ',
    options: [chalk.greenBright.bold('Sundar Pichai'), chalk.greenBright.bold('Mark Zuckerburg'), chalk.greenBright.bold('Satya Nadella'), chalk.greenBright.bold('Jack Dorsey')],
    answer: chalk.greenBright.bold('Sundar Pichai')
  },
  {
    question: 'Who is the CEO of Facebook? ',
    options: [chalk.greenBright.bold('Sundar Pichai'), chalk.greenBright.bold('Satya Nadella'), chalk.greenBright.bold('Mark Zuckerburg'), chalk.greenBright.bold('Jack Dorsey')],
    answer: chalk.greenBright.bold('Mark Zuckerburg')
  },
  {
    question: 'Who is the CEO of Micromax? ',
    options: [chalk.greenBright.bold('Ratan Tata'), chalk.greenBright.bold('Nikhil Sharma'), chalk.greenBright.bold('Rahul Sharma'), chalk.greenBright.bold('Feroz Kohli')],
    answer: chalk.greenBright.bold('Rahul Sharma')
  },
  {
    question: 'Who is the CEO of Instagram? ',
    options: [chalk.greenBright.bold('Mark Zuckerburg'), chalk.greenBright.bold('Kevin Systrom'), chalk.greenBright.bold('Jack Dorsey'), chalk.greenBright.bold('Mike Krieger')],
    answer: chalk.greenBright.bold('Kevin Systrom')
  },
  {
    question: 'Who is the CEO of ElevateLabs.tech? ',
    options: [chalk.greenBright.bold('Tanay Pratap'), chalk.greenBright.bold('Kevin Systrom'), chalk.greenBright.bold('Jack Dorsey'), chalk.greenBright.bold('Mike Krieger')],
    answer: chalk.greenBright.bold('Tanay Pratap')
  }]

  for(i=0; i<questions.length; i++){
    console.log(chalk.black.bgCyanBright.bold('Question no. '+(i+1).toString()+" "));
    console.log(chalk.black.bgRed.bold(questions[i].question));
    index = readlineSync.keyInSelect(questions[i].options, chalk.black.bgYellowBright.bold('Select your Choice?'), {cancel: false});
    if (questions[i].options[index] === questions[i].answer){
      console.log(chalk.black.bgGreen.bold('Correct Answer!!!'));
      score = score + 2;
      console.log(chalk.black.bgGreen.bold('Your Score is: '+score+" "));
    } else {
      console.log(chalk.black.bgRedBright.bold("Sorry! That's a wrong answer"));
      console.log(chalk.black.bgRedBright.bold('The correct answer is: '+questions[i].answer+" "));
    }
    console.log('\n');
  }
  console.clear();
  console.log(chalk.blue.bold('-------------------------------------------'));
  console.log(chalk.blue.bold('----')+chalk.black.bgRed.bold(' Congrats!!! You finished the Game ')+chalk.blue.bold('----'));
  console.log(chalk.blue.bold('-------')+chalk.black.bgRed.bold(' And your final Score is: '+score+" ")+chalk.blue.bold('-------'));
  console.log(chalk.blue.bold('-------------------------------------------'));
  HighScores(name, score);
}

function HighScores(name, score=null) {
  var high = [['Bhupinder Singh', 10], ['Aditya Raut', 8], ['Gagan Gurjar', 6], ['Sagar Patel', 6], ['Harsh Singh', 4]];

  if (score === null){
    console.clear();
    console.log(chalk.blue.bold('---------------------------------'));
    console.log(chalk.black.bgRed.bold(' Here are the Top 5 High Scorers '));
    console.log(chalk.blue('---------------------------------'));
    console.log('\n');
    for(i=0; i<5; i++){
      console.log(chalk.yellow((i+1).toString()+')'+' Name: ')+chalk.green.bold(high[i][0]));
      console.log(chalk.yellow('Score: ')+chalk.green.bold(high[i][1]));
    }
  } else {
    //console.log(name, score);
    for(i=0; i<5; i++){
      if (score>high[i][1]){
        console.log('\n')
        console.log(chalk.black.bgGreen.bold('Congrats!!! You have just created a new High Score and secured a place in our Rankings.'));
        console.log(chalk.black.bgGreen.bold('If you want to see your name in the HighScores list, send us a screenshot of your score at - ')+chalk.black.bgRed.bold('pindian09[at]gmail[dot]com '));
        break;
      }
    }
  }
  console.log('\n');
  choice = readlineSync.keyInYN(chalk.black.bgYellow.bold('Go back to Menu?'));
  if (choice === true) {
    console.clear();
    Menu(name);
  } else {
    Ending(name);
  }
}

function Introduction() {
  console.log(chalk.blue.bold('----------------------------------------'))
  console.log(chalk.blue.bold('-------')+chalk.black.bgRed.bold(' Welcome to the CEO Quiz ')+chalk.blue.bold('--------'));
  console.log(chalk.blue.bold('----------------------------------------'));
  console.log('\n');
  var name = readlineSync.question(chalk.black.bgYellow.bold('Enter you Name:')+" ");
  console.clear();
  Menu(name);
}

function Rules(name) {
  console.clear()
  console.log(chalk.blue.bold('----------------------------------------------'));
  console.log(chalk.black.bgRed.bold(' Welcome to the Rules Section of THE CEO GAME '));
  console.log(chalk.blue.bold('----------------------------------------------'));
  console.log('\n');
  console.log(chalk.black.bgGreenBright.bold('Here are some basic Rules of this Game:-'));
  console.log(chalk.green('1. Each Correct Answer gives you 2 points.'));
  console.log('\n');
  console.log(chalk.green('2. If you get an highscore, you can screenshot the screen and sent it to ')+chalk.red.bold('pindian09[at]gmail[dot]com')+chalk.green(' to get your name featured in rankings.'));
  console.log('\n');
  console.log(chalk.green('3. Just type the correct option number. You do not have to press the ')+chalk.red.bold('Enter Key ')+chalk.green('during the Quiz.'));
  console.log('\n');
  choice = readlineSync.keyInYN(chalk.black.bgYellow.bold('Go back to Menu?'));
  if (choice === true) {
    console.clear();
    Menu(name);
  } else {
    Ending(name);
  }
}

function Ending(name) {
  console.log('\n');
  console.log(chalk.blue.bold('----------------------------------------------'))
  console.log(chalk.blue.bold('-------------')+chalk.black.bgRed.bold(' ThankYou for playing ')+chalk.blue.bold('-----------'));
  console.log(chalk.blue.bold('---------')+chalk.black.bgRed.bold(' Created by:- Bhupinder Singh ')+chalk.blue.bold('-------'));
  console.log(chalk.blue.bold('--------')+chalk.black.bgRed.bold(' ALL THANKS TO TANAY PRATAP SIR ')+chalk.blue.bold('------'));
  console.log(chalk.blue.bold('----------------------------------------------'));
}

function Menu(name) {
  options = [chalk.black.bgGreen.bold('Play Game'), chalk.black.bgGreen.bold('Check Rules'), chalk.black.bgGreen.bold('HighScores'), chalk.black.bgGreen.bold('Exit')];
  console.log('\n');
  console.log(chalk.blue.bold('---------------'));
  console.log(chalk.blue.bold('---')+chalk.black.bgRed.bold(' M E N U ')+chalk.blue.bold('---'));
  console.log(chalk.blue.bold('---------------'));
  index = readlineSync.keyInSelect(options, chalk.black.bgYellow.bold('Select your Choice?'), {cancel: false});
  //console.log(index);
  if (index === 0){
    Game(name);
  } else if (index === 1){
    Rules(name);
  } else if (index === 2){
    HighScores(name);
  } else if(index===3){
    Ending(name);
  }
}

Introduction();