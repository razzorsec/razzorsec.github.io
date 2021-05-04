let xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let data = JSON.parse(this.responseText).feed.entry;

    let i;
    for (i = 0; i < data.length; i++) {
      let info = data[i]["gsx$_d180g"]["$t"];
      let stateName = data[i]["gsx$_d2mkx"]["$t"];
      let helpNumber = data[i]["gsx$_cssly"]["$t"];
      


      document.getElementById("showhelpData").innerHTML +=
        "<tr>" +
        "<td>" +
        info +
        "</td>" +
        "<td>" +
        stateName +
        "</td>" +
        "<td>" +
        helpNumber +
        "</td>" +
        "</tr>"
        ;
    }
  }
};

xmlhttp.open(
  "GET",
  "https://spreadsheets.google.com/feeds/list/18cCyFbxG6AvhNsk5JLIFCwulcwHvmzxu1kI6decYSNw/od6/public/values?alt=json",
  true
);
xmlhttp.send();