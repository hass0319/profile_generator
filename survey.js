// https://github.com/nodejs/node/blob/master/doc/api/readline.md
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('where are you? ', (answer) => {
  rl.question('What\'s your name? Nicknames are also acceptable :) ', (name) => {
    rl.question('What do you listen to? ', (listen) => {
      rl.question('What\'s an activity you like doing? ', (activity) => {
        rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (favMeal) => {
          rl.question('What\'s your favourite thing to eat for that meal? ', (favFood) => {
            rl.question('Which sport is your absolute favourite? ', (team) => {
              rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (superPower) => {
                console.log(` I\'m at ${answer}, my name is ${name}. I like to listen to ${listen}, while ${activity}. Having ${favFood} at ${favMeal} is the best in the world. Playing ${team} is fun. ${superPower}.`);
                rl.close();
              })
            })
          });
        });
      });
    });
  });
});






// What's your name? Nicknames are also acceptable :)
// What's an activity you like doing?
// What do you listen to while doing that?

// Which meal is your favourite (eg: dinner, brunch, etc.)
// What's your favourite thing to eat for that meal?
// Which sport is your absolute favourite?
// What is your superpower? In a few words, tell us what you are amazing at!