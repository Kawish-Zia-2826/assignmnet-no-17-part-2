//=======================================EVENTS====================
// 1. Show an alert box on click on a link.


var a = document.getElementsByTagName("img")

// 3. Display 10 student records in table and each row should contain a delete
// button. If you click on a button to delete a record, entire row should be
// deleted.


function removerow(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
  }
var val = 0;
function increaseCounter() {
  val++;
  document.getElementById('counter').innerText = val;
  }
  function decreaseCounter() {
    val--;
    document.getElementById('counter').innerText = val;
    }
  
