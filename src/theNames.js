const femaleNames =[
    'mary', 'jennifer',  'linda', 'elizabeth', 'barbara', 'susan', 'jessica', 'sarah', 'margaret',  'betty', 
    'sandra', 'ashley', 'dorothy', 'kimberly', 'emily', 'donna', 'michelle',  'carol', 'amanda', 'melissa'
] ;

const maleNames = [
    'james', 'john', 'robert', 'michael', 'william', 'david', 'richard','thomas', 'charles', 'daniel',
     'matt', 'tony', 'mark', 'paul', 'steve', 'andrew', 'kenneth', 'josh', 'kevin', 'brian'];

const whateverNames = femaleNames.concat(maleNames);
whateverNames.sort();
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}



export { femaleNames,maleNames, whateverNames, shuffleArray };