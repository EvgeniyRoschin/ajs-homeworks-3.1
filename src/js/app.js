// TODO: write your code here
// import sum from './basic';

// console.log('worked');

// console.log(sum([1, 2]));

export default function characterStatus(character) {
    let status = '';
    if (character.health) {
      switch (true) {
        case (character.health > 50):
          status = 'healthy';
          break;
        case (character.health < 51 && character.health > 14):
          status = 'wounded';
          break;
        case (character.health < 15):
          status = 'critical';
          break;
        default:
          status = '';
      }
    }
  
    return status;
  }