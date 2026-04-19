/*  A-TASK (NodeJS)

Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
MASALAN countLetter("e", "engineer") 3ni return qiladi.
 */

// Solution
function countLetter(letter, word) {
    if (typeof letter !== "string") {
        console.log("enter a letter");
    } else if (typeof word !== "string") {
        console.log("enter a word");
    } else {
        let count = 0;

        for (let i = 0; i < word.length; i++) {
            if (letter === word[i]) {
                count++;
            }
        }

        return count;
    }
}

const result = countLetter("a", "albert");

console.log("countLetter result:", result);

/*
B-TASK (NodeJS)

Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.
 */

// Solution

function countDigits(a) {
    if (a === "") {
        console.log("Enter the text")
    } else {
        const split = a.split("")
        const filter = split.filter((ele) => !isNaN(ele) && ele !== " ")
        //return split
        return filter.length;
    }
}
const resultt = countDigits("Ali jon 123445 3 33 423 42 1")
console.log("countDigits:", resultt);






// ANIMAL CHALLENGE
const animal_list = ["fox", "ant", "bird", "lion", "wolf", "deer", "bear", "frog", "hen", "mole", "duck", "goat", "dog", "cat", "bat", "cock", "cow"];


function findAnimals(txt) {
    const split = txt.split("");
    const animal = [];
    const b = animal_list.map((ele) => ele.split(""));
    console.log(b)

    for (let i = 0; i < b.length; i++) {
        for (let j = 0; j < split.length; j++) {
            if (b[i].every(ele => split.includes(ele)))
                animal.push(b[i].join(""))
        }
    }
    return animal
};


//for(let i = 0; i < split.length ; i++) {

//}
//console.log(split)



//findAnimals("gdoat");
//console.log(findAnimals("gdoat"));


