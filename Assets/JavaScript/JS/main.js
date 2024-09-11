// add hovered class to selected list item
let list = document.querySelectorAll(".navigation li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};

// Merchandiser Modal
function openModal(firstName, lastName) {
  document.getElementById('modal-fName').textContent = firstName;
  document.getElementById('modal-lName').textContent = lastName;
  document.getElementById('infoModal').style.display = 'block';
}

function closeModal() {
  document.getElementById('infoModal').style.display = 'none';
}