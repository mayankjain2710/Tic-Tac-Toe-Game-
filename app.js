let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newbtn = document.querySelector(".newgamebtn");
let msgctn = document.querySelector(".msgcontainer");
let msg = document.querySelector(".msg");
let count = 0;
let turnO = true;

let winpattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    count++;
    console.log(count);
    box.disabled = true;
    checkwinner();
  });
});

let checkwinner = () => {
  for (let pattern of winpattern) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 == pos2 && pos2 == pos3) {
        showwinner(`Winner is ${pos1}`);
      }
      else if(count ===9){
        showwinner("No Winner");
      }
    } 
  }
};

let showwinner = (win) => {
  console.log(`${win}`);
  boxes.forEach((box) => {
    box.disabled = true;
    msgctn.classList.remove("hidden");
    msg.innerText = `${win}`;
  });
};

resetbtn.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
    count = 0;
  });
});

newbtn.addEventListener("click", () => {
  msgctn.classList.add("hidden");
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
    count = 0;
  });
});
