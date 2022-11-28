/** @format */
let count = 0;
if (count === 0) {
  document.querySelector(".pre-img").style.display = "none";
} else {
  document.querySelector(".pre-img").style.display = "block";
}

function barCount() {
  let projectedValue = Math.ceil(8.33 * count);
  document.querySelector(".bar-count").innerText = `${projectedValue}%`;
}

function preSlide() {
  count = count - 1;
  barCount();
  const val = -8.33 * count;
  document.querySelector(".slidepage").style.marginLeft = `${val}%`;
  if (count === 0) {
    document.querySelector(".pre-img").style.display = "none";
  } else {
    document.querySelector(".pre-img").style.display = "block";
  }
}

function slidepage(cnt) {
  count = count + 1;
  barCount();

  if (count === 0) {
    document.querySelector(".pre-img").style.display = "none";
  } else {
    document.querySelector(".pre-img").style.display = "block";
  }
  const val = -8.33 * cnt;
  document.querySelector(".slidepage").style.marginLeft = `${val}%`;
}
