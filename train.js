/* F-TASK (NodeJS)

Shunday findDoublers function tuzing, unga faqat bitta string argument pass bolib, agar stringda bir hil harf qatnashgan bolsa true, qatnashmasa false qaytarishi kerak.
MASALAN: getReverse("hello") return true return qiladi

*/

function findDoublers(txt) {
    let splitted = txt.split("")
    console.log(splitted)
    for (let i =0; i<txt.length; i++){
        let list = splitted.filter((ele) => ele === txt[i]);
    if(list.length >= 2){
            return true
        }
    }
    return false
}


const result = findDoublers("ali")
console.log("result:", result)


/*
E-TASK (NodeJS)

Shunday function tuzing, u bitta string argumentni qabul qilib osha stringni teskari qilib return qilsin.
MASALAN: getReverse("hello") return qilsin "olleh"
*/

/* function getReverse(txt) {
    result = txt.split('').reverse().join('')
    // reverse = split.reverse();
    // result = reverse.join('')
    return result
}

result = getReverse("Ali")
console.log(result)
*/ 




/* D-TASK (NodeJS)

Shunday function tuzingki unga integerlardan iborat array pass bolsin va function bizga osha arrayning eng katta qiymatiga tegishli birinchi indexni qaytarsin.
MASALAN: getHighestIndex([5, 21, 12, 21, 8]) return qiladi 1 sonini.
*/

/*
const array = [5, 77, 12, 42, 66, 88];

function getHighestIndex(array) {
    console.log(array)
    let num = 0;
    const highest = array.map(ele => {
        if (ele > num)
            num = ele
        //index = array.indexOf(ele)
    })
    let index = array.indexOf(num);
    return index
}


const result = getHighestIndex(array);
console.log(result)
*/




// console.log("=========================")


//ANIMAL CHALLENGE
/* const animal_list = ["fox", "ant", "bird", "lion", "wolf", "deer", "bear", "frog", "hen", "mole", "duck", "goat", "dog", "cat", "bat", "cock", "cow"];


function findAnimals(txt) {
    const split = txt.split("");
    const animal = [];
    const b = animal_list.map((ele) => ele.split(""));
    console.log(b)

    for (let i = 0; i < b.length; i++) {
        for (let j = 0; j < split.length; j++) {
            if (b[i].every(ele => split.includes(ele)) && !animal.includes(b[i].join("")))
                animal.push(b[i].join(""))
        }
    }
    return animal
};

result = findAnimals("ogxdtaf");
console.log(result)

*/

//console.log("=========================")



/* C-TASK (NodeJS)

Shunday function tuzing, u 2ta string parametr ega bolsin, hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin
MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true;
*/

// 2-version
/*
function checkContent(txt, txt1) {
    if (typeof txt === "string" && typeof txt1 === "string") {
        for (let i = 0; i < txt.length; i++) {
            if (txt.split("").every(ele => txt1.split("").includes(ele))) {
                return true
            } else {
                return false
            }
        }
    } else {
        console.log("Enter a text")
    }
}
    */


/*

1-version
function checkContent(txt, txt1) {
    let content1 = txt1.split("")
    let content = txt.split("")
    console.log(content)
    console.log(content1)
    if (typeof txt === "string" && typeof txt1 === "string") {
        for (let i = 0; i < content.length; i++) {
            for (let j = 0; j < content1.length; j++) {
                if (content.every(ele => content1.includes(ele))) {
                    return true
                } else {
                    return false
                }
            }
        }
    } else {
        console.log("Enter a text")
    }
}
    */


/*const result = checkContent("mitas 8987", "87ksati     m89");
console.log("checkContent:", result)


console.log("=========================")
*/

/*
B-TASK (NodeJS)

Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.
 */

// Solution

/* function countDigits(a) {
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
*/



// console.log("=========================")

/*  A-TASK (NodeJS)

Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
MASALAN countLetter("e", "engineer") 3ni return qiladi.
 */

/* Solution
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
*/











