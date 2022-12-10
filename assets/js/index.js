/** @format */

function redirectto() {
  window.location.href = "./franchise.html";
}

const downloadFranchiseMenu = () => {
  const url = "./assets/doc/ourmenu.pdf";
  const name = "Lassi Story Menu";
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = name;
  document.body.appendChild(anchor);
  anchor.click();
};
