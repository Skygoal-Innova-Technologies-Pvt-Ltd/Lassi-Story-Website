/** @format */

const outletData = {
  Telangana: {
    Hyderabad: [
      {
        name: "Lassi story Madhapur",
        address: "Madhapur, Hydrabad",
        image: "./assets/img/outlet/MadhapurHydrabad.jpg",
      },
      {
        image: "./assets/img/outlet/AmeerpetHydrabad.JPG",
        name: "Lassi Story Ameerpet",
        address: "Ameerpet, Hydrabad",
      },
      {
        image: "./assets/img/outlet/PadmaraoNagarHydrabad.JPG",
        name: "Lassi Story Padmarao Nagar",
        address: "Padmarao Nagar, Hydrabad",
      },
      {
        image: "./assets/img/outlet.png",
        name: "Lassi Story Raghavendra",
        address: "Raghavendra, Hydrabad",
      },
      {
        image: "./assets/img/outlet2.png",
        name: "Lassi Story  A.K Drive IN",
        address: " A.K Drive IN, Hydrabad",
      },
      {
        image: "./assets/img/gallery.png",
        name: "Lassi Story KPHB Temple",
        address: "KPHB Temple, Hydrabad",
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
