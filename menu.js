document.getElementById("break").addEventListener("click", function () {
  const fooditem = document.getElementsByClassName("brek-no");
  const all = document.getElementsByClassName("all");
  for (const al of all) {
    al.style.display = "block";
  }
  for (const item of fooditem) {
    item.style.display = "none";
  }
});
document.getElementById("all-btn").addEventListener("click", function () {
  const food = document.getElementsByClassName("all");
  const all = document.getElementsByClassName("all");
  for (const al of all) {
    al.style.display = "block";
  }
  for (const itm of food) {
    itm.style.display = "block";
  }
});
document.getElementById("lunch").addEventListener("click", function () {
  const lun = document.getElementsByClassName("lanuch-no");
  const all = document.getElementsByClassName("all");
  for (const al of all) {
    al.style.display = "block";
  }
  for (const ir of lun) {
    ir.style.display = "none";
  }
});
document.getElementById("diner").addEventListener("click", function () {
  const all = document.getElementsByClassName("all");
  for (const al of all) {
    al.style.display = "block";
  }
  const din = document.getElementsByClassName("diner-no");
  for (const di of din) {
    di.style.display = "none";
  }
});
