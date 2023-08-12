const song = [];
const ans = [];
const mylink =
  "https://raw.githubusercontent.com/JACsadi/folklorep/main/folklore.json";
let i = 1;
let k = 0;
let high = 0;
fetch(mylink)
  .then((a) => a.json())
  .then((a) => {
    song.push(...a);
  });

function everything() {
  let ra = Math.floor(Math.random() * 1000) % song.length;
  let str = "";
  let zzz = 10;
  time.innerHTML = 10;
  do {
    str =
      song[ra].lyrics.split("<br>")[
        Math.floor(Math.random() * 1000) % song[ra].lyrics.split("<br>").length
      ];
  } while (str.length < 10);
  ques.innerHTML = str;
  inp.innerHTML = `<input type="txt" class="jjj"> <button class="done">ANSWER</button>`;
  const ans = document.querySelector(".done");
  const jjj = document.querySelector(".jjj");
  let bbb = setInterval(() => {
    zzz--;
    time.innerHTML = `${zzz}`;
    console.log("hi");
  }, 1000);
  let a = setTimeout(() => {
    ans.click();
  }, 10050);
  ans.addEventListener("click", () => {
    console.log(jjj.value);
    console.log(song[ra].name.toLowerCase());
    if (
      jjj.value.toLowerCase().trimEnd() ===
      song[ra].name.split("_").join(" ").toLowerCase()
    ) {
      check.innerHTML = `correct brother`;
      check.style.backgroundColor = "green";
    } else {
      check.innerHTML = `wrong brother <br> the answer is ${song[ra].name}`;
      check.style.backgroundColor = "red";
    }
    clearInterval(bbb);
    clearTimeout(a);
    everything();
  });
  windows.addEventListener("keydown", (a) => {
    if (a.key == "Enter") ans.click();
  });
}
const st = document.querySelector(".start");
const check = document.querySelector(".check");
const ques = document.querySelector(".inf");
const inp = document.querySelector(".inputt");
const time = document.querySelector(".time");
st.addEventListener("click", everything);
