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
  ans.addEventListener("click", () => {
    console.log(jjj.value);
    console.log(song[ra].name.toLowerCase());
    if (
      jjj.value.toLowerCase().trimEnd() ===
      song[ra].name.split("_").join(" ").toLowerCase()
    ) {
      a.innerHTML = `correct brother`;
      a.style.backgroundColor = "green";
    } else {
      a.innerHTML = `wrong brother <br> the answer is ${song[ra].name}`;
      a.style.backgroundColor = "red";
    }
    everything();
  });
}
const st = document.querySelector(".start");
const a = document.querySelector(".a");
const ques = document.querySelector(".inf");
const inp = document.querySelector(".inputt");
st.addEventListener("click", everything);
