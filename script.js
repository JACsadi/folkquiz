const song = [];
const ans = [];
const mylink =
  "https://raw.githubusercontent.com/JACsadi/folklorep/main/folklore.json";
let i = 0;
let k = 0;
let high = 0;
fetch(mylink)
  .then((a) => a.json())
  .then((a) => {
    song.push(...a);
  });
function update() {
  const ab = [];
  fetch("https://i-guess-i-am-making-a-rest-api.vercel.app")
    .then((a) => a.json())
    .then((a) => {
      ab.push(...a);
      ab.sort((a, b) => (a.score > b.score ? -1 : 1));
      ab.forEach((a) => {
        aa.innerHTML = `<div class="titlee">LeaderBoard</div><div class="party"><div class="nam">NAME</div><div class="score">Score</div></div>`;
        aa.innerHTML =
          aa.innerHTML +
          `<div class="party"><div class="nam">${a.name}</div><div class="score">${a.score}</div></div>`;
      });
    });
}
function everything() {
  // if (i == 0) {
  //   check.innerHTML = `current highscore is : ${high}`;
  // }
  if (i == 10) {
    ques.innerHTML = `you got ${k} out of 10`;
    const newData = {
      name: playername,
      score: k,
    };
    fetch("https://i-guess-i-am-making-a-rest-api.vercel.app/a", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Data appended successfully:", data);
      })
      .catch((error) => {
        console.error("Error appending data:", error);
      });
    if (k > high) {
      high = k;
      ques.innerHTML = ques.innerHTML + `<br> NEW HIGHSCORE - ${high}`;
    }
    inp.innerHTML = `<button class="rstart">ReStart</button>`;
    i = 0;
    k = 0;
    update();
    const haha = document.querySelector(".rstart");
    haha.addEventListener("click", everything);
  } else {
    i++;
    let ra = Math.floor(Math.random() * 1000) % song.length;
    let str = "";
    let zzz = 10;
    time.innerHTML = 10;
    do {
      str =
        song[ra].lyrics.split("<br>")[
          Math.floor(Math.random() * 1000) %
            song[ra].lyrics.split("<br>").length
        ];
    } while (str.length < 10);
    ques.innerHTML = str;
    inp.innerHTML = `<input type="txt" class="jjj"> <button class="done">ANSWER</button>`;
    const ans = document.querySelector(".done");
    const jjj = document.querySelector(".jjj");
    const bbb = setInterval(() => {
      zzz--;
      time.innerHTML = `${zzz}`;
      console.log("hi");
    }, 1000);
    const a = setTimeout(() => {
      ans.click();
    }, 10050);
    ans.addEventListener("click", () => {
      console.log(jjj.value);
      console.log(song[ra].name.toLowerCase());
      if (
        jjj.value.toLowerCase().trimEnd() ===
        song[ra].name.split("_").join(" ").toLowerCase()
      ) {
        // check.innerHTML = `correct brother`;
        // check.style.backgroundColor = "#32CD32";
        k++;
      } else {
        // check.innerHTML = `wrong brother <br> the answer is ${song[ra].name}`;
        // check.style.backgroundColor = "rgba(255, 0, 0,1)";
      }
      clearInterval(bbb);
      clearTimeout(a);
      everything();
      return 0;
    });
  }
}
const st = document.querySelector(".start");
const ques = document.querySelector(".inf");
const inp = document.querySelector(".inputt");
const time = document.querySelector(".time");
const player = document.querySelector(".jjj");
const aa = document.querySelector(".a");
let playername = "";
st.addEventListener("click", () => {
  playername = player.value;
  if (playername != "") everything();
  // const newData = {
  //   name: playername,
  //   score: 0,
  // };
  // fetch(
  //   `https://i-guess-i-am-making-a-rest-api.vercel.app/element?name=${player.value}`
  // )
  //   .then((a) => a.json())
  //   .then((a) => console.log(a))
  //   .catch(() => console.log("hate it"));
});
update();
