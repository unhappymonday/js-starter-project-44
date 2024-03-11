import readlineSync from 'readline-sync';

const info = 'Answer "yes" if the number is even, otherwise answer "no".';
const userName = readlineSync.question('May I have your name? ');

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  console.log(`Hello ${userName}!`);
};

const findEven = () => {
  console.log(info);
  let i = 3;
  while (i > 0) {
    const number = Math.floor(Math.random() * (100 - 1));
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    if ((number % 2 === 0 && answer === 'yes') || (number % 2 !== 0 && answer === 'no')) {
      console.log('Correct!');
      i -= 1;
    } else if ((number % 2 === 0 && answer === 'no') || (number % 2 !== 0 && answer === 'yes')) {
      console.log('"yes" is wrong answer ;(. Correct answer was "no".');
      console.log('Let\'s try again');
      break;
    } else {
      console.log('"yes" is wrong answer ;(. Correct answer was "no".');
      console.log('Let\'s try again');
      break;
    }
    console.log(`Congratulations, ${userName}`);
  }
};

export {
  greeting,
  findEven,
};
