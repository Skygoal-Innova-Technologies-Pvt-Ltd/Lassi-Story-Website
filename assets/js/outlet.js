/** @format */

const outletData = {
  Haryana: {
    Sonīpat: [
      {
        name: "Lassi story Murthal",
        address: "Sonipat,Murthal",
        image: "./assets/img/outlet.png",
      },
    ],
  },
  Maharashtra: {
    Mumbai: [
      {
        name: "Bandra Lassi Story",
        address: "Mumbai, Bandra West",
        image: "./assets/img/outlet2.png",
      },
    ],
  },
};

let state = document.getElementById("State"),
  city = document.getElementById("City");

let outlet = document.getElementById("outlet");

let innerScript = "";

// function statechangeHandler() {
//   let parameter1 = state.value;
// //   let parameter2 = city.value;
//   outletData.parameter1.forEach((curr,index)=>{

//   })

// }

function citychangeHandler() {
  let parameter1 = state.value;
  let parameter2 = city.value;
  innerScript = "";

  if (!outletData[parameter1]) {
    outlet.innerHTML = `
    <div class="franchise-card">
    <p>OOPS ! NO STORE AVAILABLE IN YOUR CITY</p>
    <p>KNOW MORE ABOUT OUR FRANCHISE PROPOSAL</p>
    <p>AND BE OUR FRANCHISE TODAY</p>
    <div class="btn-grid">
      <button id="home-franchise" onclick="redirectto()"  class="grid-btn">Become Franchise</button>
      <button
        class="grid-btn"
        onclick="downloadFranchiseMenu()"
      >
        Download Menu
      </button>
    </div>
  </div>
    `;
    return;
  } else if (!outletData[parameter1][parameter2]) {
    outlet.innerHTML = "";
    return;
  }
  outletData[parameter1][parameter2].forEach((curr, index) => {
    const addition = `
    <div class="outlet-card">
        <img src=${curr.image} />
        <div>
          <span>${curr.name}</span>
          <span>${curr.address}</span>
        </div>
      </div>
    `;

    innerScript = innerScript + " " + addition;
  });

  outlet.innerHTML = innerScript;
}

// state.addEventListener("change", statechangeHandler);
city.addEventListener("change", citychangeHandler);
