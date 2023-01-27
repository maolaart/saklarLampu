function toogle() {

  let toogle1 = document.getElementById("toogle1");
  let Lkel1 = document.getElementById("Lkel1");
  let Lkel2 = document.getElementById("Lkel2");
  let Lkel3 = document.getElementById("Lkel3");
  toogle1.checked
    ? (Lkel1.src = "assets/images/on.png") &&
      (Lkel2.src = "assets/images/on.png") &&
      (Lkel3.src = "assets/images/on.png")
    : (Lkel1.src = "assets/images/off.png") &&
      (Lkel2.src = "assets/images/off.png") &&
      (Lkel3.src = "assets/images/off.png");

  let toogle2 = document.getElementById("toogle2");
  let Lmak1 = document.getElementById("Lmak1");
  toogle2.checked ? (Lmak1.src = "assets/images/on.png" ) : (Lmak1.src = "assets/images/off.png");

  let toogle3 = document.getElementById("toogle3")
  let Ltid1 = document.getElementById("Ltid1");
  let Ltid2 = document.getElementById("Ltid2");
  toogle3.checked
  ? (Ltid1.src = "assets/images/on.png") &&
    (Ltid2.src = "assets/images/on.png")
  : (Ltid1.src = "assets/images/off.png") &&
    (Ltid2.src = "assets/images/off.png");

  let toogle4 = document.getElementById("toogle4")
  let Ltam1 = document.getElementById("Ltam1");
  let Ltam2 = document.getElementById("Ltam2");
  let Ltam3 = document.getElementById("Ltam3");
  let Ltam4 = document.getElementById("Ltam4");
  toogle4.checked
  ? (Ltam1.src = "assets/images/on.png") &&
    (Ltam2.src = "assets/images/on.png") &&
    (Ltam3.src = "assets/images/on.png") &&
    (Ltam4.src = "assets/images/on.png") 
  : (Ltam1.src = "assets/images/off.png") &&
    (Ltam2.src = "assets/images/off.png") &&
    (Ltam3.src = "assets/images/off.png") && 
    (Ltam4.src = "assets/images/off.png"); 
}

function saklar(aktif, lampu) {

  let Lkel1 = document.getElementById("Lkel1");
  let Lkel2 = document.getElementById("Lkel2");
  let Lkel3 = document.getElementById("Lkel3");
  aktif == "on" && lampu == 1
    ? (Lkel1.src = "assets/images/on.png")
    : (Lkel1.src = "assets/images/off.png");
  aktif == "on" && lampu == 2
    ? (Lkel2.src = "assets/images/on.png")
    : (Lkel2.src = "assets/images/off.png");
  aktif == "on" && lampu == 3
    ? (Lkel3.src = "assets/images/on.png")
    : (Lkel3.src = "assets/images/off.png");

  let Lmak1 = document.getElementById("Lmak1");
  aktif == "on" && lampu == 4
    ? (Lmak1.src = "assets/images/on.png")
    : (Lmak1.src = "assets/images/off.png");

  let Ltid1 = document.getElementById("Ltid1");
  let Ltid2 = document.getElementById("Ltid2");
  aktif == "on" && lampu == 5
    ? (Ltid1.src = "assets/images/on.png")
    : (Ltid1.src = "assets/images/off.png");
  aktif == "on" && lampu == 6
    ? (Ltid2.src = "assets/images/on.png")
    : (Ltid2.src = "assets/images/off.png");

  let Ltam1 = document.getElementById("Ltam1");
  let Ltam2 = document.getElementById("Ltam2");
  let Ltam3 = document.getElementById("Ltam3");
  let Ltam4 = document.getElementById("Ltam4");

  aktif == "on" && lampu == 7
    ? (Ltam1.src = "assets/images/on.png")
    : (Ltam1.src = "assets/images/off.png");
  aktif == "on" && lampu == 8
    ? (Ltam2.src = "assets/images/on.png")
    : (Ltam2.src = "assets/images/off.png");
  aktif == "on" && lampu == 9
    ? (Ltam3.src = "assets/images/on.png")
    : (Ltam3.src = "assets/images/off.png");
  aktif == "on" && lampu == 10
    ? (Ltam4.src = "assets/images/on.png")
    : (Ltam4.src = "assets/images/off.png");
}
