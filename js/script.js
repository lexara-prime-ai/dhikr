let increaseBtn = document.getElementById('increase');
let resetBtn = document.getElementById('reset');

let displayCount = document.getElementById('count');

increaseBtn.addEventListener('click', increaseCount);
resetBtn.addEventListener('click', resetCount);

let count = 0;
function increaseCount() {
  count = count + 1
  console.log(count);
  displayCount.innerText = count;
}

function resetCount() {
    count = 0;
    displayCount.innerText = count;
  }

  let date = new Date();
  if (date.getDay() === 5) {
    alert('Jumaa Mubarak!');
  }
  