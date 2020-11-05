import { femaleNames,maleNames, whateverNames, shuffleArray} from './theNames';

const capitalizeFirstLetter = (string) => {
    let  capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);
    return capitalizedString;
  }

const coffefiedName = (name) =>{
    document.getElementById('result').textContent = name;
}

const randomizer = (str) => {
    //get a random letter in the middle of the name
    const lettersInUserName = str.length;
    let random = Math.floor (Math.random()*lettersInUserName);
    let strRandom = str[random];
    return strRandom.toLowerCase();
}

const simplifyName = (oldName, letter) => {
    const firstLetter = (oldName[0]).toLowerCase();
    const isNewName = (name) => name.includes(firstLetter, letter);
    if(selectedGender===0)
    { shuffleArray(femaleNames);
        let index = femaleNames.findIndex(isNewName);
        let newName = femaleNames[index];
        let capitalizedName = capitalizeFirstLetter(newName);
        coffefiedName(capitalizedName);
        console.log(capitalizedName);
    } else if (selectedGender ===1)
    {   shuffleArray(maleNames);
        let index = maleNames.findIndex(isNewName);
        let newName = maleNames[index];
        let capitalizedName = capitalizeFirstLetter(newName);
        coffefiedName(capitalizedName);
        console.log(capitalizedName);
    }
    else if (selectedGender===2)
    {   shuffleArray(whateverNames);
        let index = whateverNames.findIndex(isNewName);
        let newName = whateverNames[index];
        let capitalizedName = capitalizeFirstLetter(newName);
        coffefiedName(capitalizedName);
        console.log(capitalizedName);
    }

 }

export {randomizer, coffefiedName, simplifyName };

