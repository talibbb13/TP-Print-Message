function print() {
  let msg = document.getElementById("msg").value
  if (msg == "") {
    let errorThrow = document.getElementById("errorThrow");
    errorThrow.style.display = "block";
    setTimeout(function() {
errorThrow.style.display = "none";
    }, 3000)
  } 
  else {
    let msgBox = document.getElementById("msg-print-box")
    msgBox.innerText = msg;

    document.getElementById("msg").value = "";
  }
}

function clearing() {
  document.getElementById("msg-print-box").textContent = "";
}