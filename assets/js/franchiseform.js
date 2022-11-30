/** @format */
let count = 0;

function blockDisplay() {
  if (count === 0) {
    document.querySelector(".pre-img").style.display = "none";
  } else {
    document.querySelector(".pre-img").style.display = "block";
  }

  if (count > 11) {
    document.querySelector(".progressbar").style.display = "none";
  } else {
    document.querySelector(".progressbar").style.display = "flex";
  }
}

blockDisplay();

// PROGRESS BAR COUNT HANDLER ...

function barCount() {
  let projectedValue = Math.ceil(9.09 * count);
  document.querySelector(".bar-count").innerText = `${projectedValue}%`;
}

// SLIDE PREVIOUS ....

function preSlide() {
  count = count - 1;
  barCount();
  const val = -7.144 * count;
  document.querySelector(".slidepage").style.marginLeft = `${val}%`;
  blockDisplay();
}

// SLIDE NEXT ....

function slidepage(cnt) {
  count = count + 1;
  barCount();

  blockDisplay();
  const val = -7.142 * cnt;
  document.querySelector(".slidepage").style.marginLeft = `${val}%`;
}

// SUCCESS FUNCTION ....

function successFunction() {
  window.location.href = "../../franchise.html";
}

// FAILURE FUCNTION ....

function failiurFunction() {
  window.location.reload();
}

function nextHandler() {
  if (
    document.getElementById("address").value === "" ||
    document.getElementById("state").value === "" ||
    document.getElementById("city").value === "" ||
    document.getElementById("pincode").value === ""
  ) {
    document.getElementById("next1").disabled = true;
  } else {
    document.getElementById("next1").disabled = false;
  }
}

function secondNextHandler() {
  if (
    document.getElementById("name").value === "" ||
    document.getElementById("email").value === "" ||
    document.getElementById("mobile-number").value === "" ||
    document.getElementById("alt-mobile-number").value === ""
  ) {
    document.getElementById("next2").disabled = true;
  } else {
    document.getElementById("next2").disabled = false;
  }
}

// SUBMIT HANDLER ...

document.getElementById("franchise-form").addEventListener("submit", (e) => {
  e.preventDefault();
  slidepage(12);
  // slidepage(13);
});
