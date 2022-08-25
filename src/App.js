function openMenu() {
  document.getElementById("modal").style.display = "block";
}

function closeMenu() {
  document.getElementById("modal").style.display = "none";
}

function openFeatures() {
  if (document.getElementById("features-drop").style.display == "none") {
    document.getElementById("features-drop").style.display = "flex";
  } else {
    document.getElementById("features-drop").style.display = "none";
  }
}

function openCompany() {
  if (document.getElementById("company-drop").style.display == "none") {
    document.getElementById("company-drop").style.display = "flex";
  } else {
    document.getElementById("company-drop").style.display = "none";
  }
}
