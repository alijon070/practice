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