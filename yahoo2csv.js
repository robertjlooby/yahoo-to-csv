var button = document.createElement("button");
button.appendChild(document.createTextNode("Copy CSV"));
button.className = "csv-button";
var div = document.createElement("div");
div.appendChild(button);
document.querySelector(".ys-daily-footer").appendChild(div);

button.addEventListener("click", function() {
  var rows = document.querySelector("[data-tst=players-list] tbody").rows;
  var output = "";
  for(var i = 0; i < rows.length; i++) {
    var row = rows[i];
    var pos = row.querySelector('[data-tst-pos]').getAttribute('data-tst-pos');
    var name = row.querySelector('[data-tst-full-name]').getAttribute('data-tst-full-name');
    var salary = row.querySelector('[data-tst=player-salary]').textContent.slice(1);
    output += pos + "," + name + "," + salary + "\n";
  }

  var textarea = document.createElement("textarea");
  textarea.textContent = output;
  textarea.style.position = "fixed";
  document.body.appendChild(textarea);
  textarea.select();
  try {
    return document.execCommand("copy");
  } catch (ex) {
    console.warn("Copy to clipboard failed.", ex);
    return false;
  } finally {
    document.body.removeChild(textarea);
  }
});
