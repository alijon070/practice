/*
P-TASK (NodeJS)

Shunday function yozing, u object qabul qilsin va arrayni object arrayga otkazib arrayni qaytarsin qaytarsin.
MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]
 */
const a = {a: 10, b: 20}

function objectToArray(a) {
    return Object.entries(a)
}

console.log(objectToArray(a))


/*
N-TASK (NodeJS)

Shunday function yozing, u raqamlardan tashkil topgan array qabul qilsin va array ichidagi har bir raqam uchun raqamni ozi va hamda osha raqamni kvadratidan tashkil topgan object hosil qilib, hosil bolgan objectlarni array ichida qaytarsin.
MASALAN: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1}, {number: 2, square: 4}, {number: 3, square: 9}];

 */

/*
const array = [1, 2, 3, 4, 55]

function getSquareNumbers(array) {
    
    return array.map((ele) => ({
        number: ele,
        square: ele** 2
    }));
}

const result = getSquareNumbers(array)
console.log(result)

*/

/*
J-TASK (NodeJS)

Shunday function yozing, u parametridagi array ichida eng kop takrorlangan raqamni topib qaytarsin.
MASALAN: majorityElement([1,2,3,4,5,4,3,4]) return 4
 */

/* const array = [1,2,2,2,2,3,4,5,5,5,5,5,5,5,55,,4,3,4]

function majorityElement(array) {
    let check = 0;
    let value = 0; 

    for (let i = 0; i < array.length; i++){
        //console.log(array[i])
        const f = array.filter(ele => array[i] == ele)
        //console.log(f)
        if (f.length > check){
            check = f.length
            value = array[i]
        }

    }
    console.log("-----------")
   
//return check
return value
}

console.log(majorityElement(array))
*/


/*
 H-TASK (NodeJS)

shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, faqat positive qiymatlarni olib string holatda return qilsin
MASALAN: getPositive([1, -4, 2]) return qiladi "12"
*/

/* const array = [1, -4, 2];

function getPositive(array) {
    console.log(array)
    const string = array.filter(ele => ele>0).join("")
    return string
}


const result = getPositive(array)
console.log("result:", result)

*/


/*
G-TASK (PYTHON)

Shunday function tuzingki unga integerlardan iborat array pass bolsin va function bizga osha arrayning eng katta qiymatiga tegishli birinchi indexni qaytarsin.
MASALAN: get_highest_index([5, 21, 12, 21, 8]) return qiladi 1 sonini.
*/

/*
const array = [5, 88, 12, 42, 66, 88];

function get_highest_index(array) {
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


const result = get_highest_index(array);
console.log(result)
*/

/* F-TASK (NodeJS)

Shunday findDoublers function tuzing, unga faqat bitta string argument pass bolib, agar stringda bir hil harf qatnashgan bolsa true, qatnashmasa false qaytarishi kerak.
MASALAN: getReverse("hello") return true return qiladi

*/

/*

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

*/

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











