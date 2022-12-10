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
    document.getElementById("mobile_number").value === "" ||
    document.getElementById("alt_mobile_number").value === ""
  ) {
    document.getElementById("next2").disabled = true;
  } else {
    document.getElementById("next2").disabled = false;
  }
}

// SUBMIT HANDLER ...

const scriptURL =
  "https://skygoalsheetapi.skygoaltech.com/api/V1/adddata/1hy5hwGEJ8gBvFYg-J2tfFIhux2B6ReFddgB-Ce1riKg";

var forms = document.forms["franchise-form"];

// FORM SUBMIT EVENT HANDLER

forms.addEventListener("submit", async (event) => {
  event.preventDefault();

  document.getElementById("submit-btn").innerText = "submitting ...";
  console.log("Pankaj");

  const formData = new FormData(forms);

  // DDEFINE ALL THE FIELDS LIKE THIS IN VARIBLE

  const investment = forms.elements["investment"];
  const premises = forms.elements["premises"];
  const address = forms.elements["address"];
  const state = forms.elements["state"];
  const city = forms.elements["city"];
  const pincode = forms.elements["pincode"];
  const experience = forms.elements["experience"];
  const qualifications = forms.elements["qualifications"];
  const area = forms.elements["area"];
  const startIn = forms.elements["startIn"];
  const staffReady = forms.elements["staffReady"];
  const name = forms.elements["name"];
  const email = forms.elements["email"];
  const mobile_number = forms.elements["mobile_number"];
  const alt_mobile_number = forms.elements["alt_mobile_number"];
  const contactTime = forms.elements["contactTime"];
  const Heard_From = forms.elements["Heard_From"];
  const referral = forms.elements["referral"];

  await fetch(scriptURL, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      investment: investment.value,
      premises: premises.value,
      address: address.value,
      state: state.value,
      city: city.value,
      pincode: pincode.value,
      experience: experience.value,
      qualifications: qualifications.value,
      area: area.value,
      startIn: startIn.value,
      staffReady: staffReady.value,
      name: name.value,
      email: email.value,
      mobile_number: mobile_number.value,
      alt_mobile_number: alt_mobile_number.value,
      contactTime: contactTime.value,
      Heard_From: Heard_From.value,
      referral: referral.value,
    }),
  })
    .then((response) => {
      console.log(response);
      slidepage(12);
    })

    .catch((err) => {
      console.log(err);
      slidepage(13);
    });
});
