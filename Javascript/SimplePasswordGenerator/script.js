const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];
let lastPasswords = { p1: "", p2: "" };
const firstCardDiv1 = document.getElementById("firstCardDiv1");
const firstCardDiv2 = document.getElementById("firstCardDiv2");
const secondCardDiv1 = document.getElementById("secondCardDiv1");
const secondCardDiv2 = document.getElementById("secondCardDiv2"); 
const genPwd2 = document.getElementById("genPwd2")
const genPwd1 = document.getElementById("genPwd1")

function generatePassword(length) {
 let pwdText = ""
 for(let i=0; i<length;i++){
  let randomIndex = Math.floor(Math.random()* characters.length)
  pwdText+=characters[randomIndex]
  }
  return pwdText
}
/* lastPasswords.p1=(generatePassword(15))
lastPasswords.p2=(generatePassword(15)) */
//console.log(lastPasswords)


// copy password
function enableCopyOnClick(el) {
  async function copy() {
    const text = el.textContent.trim();
    if (!text || text === "—") return;

    try {
      await navigator.clipboard.writeText(text);
      // opcional: feedback rápido
      el.classList.add("copied");
      setTimeout(() => el.classList.remove("copied"), 600);
    } catch (err) {
      // fallback clásico
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
  }

  el.addEventListener("click", copy);
  el.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      copy();
    }
  });
}

enableCopyOnClick(firstCardDiv1);
enableCopyOnClick(firstCardDiv2);
enableCopyOnClick(secondCardDiv1);
enableCopyOnClick(secondCardDiv2);

genPwd1.addEventListener("click", ()=>{
  firstCardDiv1.textContent=generatePassword(15)
  firstCardDiv2.textContent=generatePassword(15)
})
genPwd2.addEventListener("click", ()=>{
  secondCardDiv1.textContent=generatePassword(15)
  secondCardDiv2.textContent=generatePassword(15)
})
