let xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let data = JSON.parse(this.responseText).feed.entry;

    let i;
    for (i = 0; i < data.length; i++) {
      let info = data[i]["gsx$_cn6ca"]["$t"];
      let stateName = data[i]["gsx$_cokwr"]["$t"];
      let helpNumber = data[i]["gsx$_cpzh4"]["$t"];
      


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
  "https://spreadsheets.google.com/feeds/list/18cCyFbxG6AvhNsk5JLIFCwulcwHvmzxu1kI6decYSNw/2/public/values?alt=json",
  true
);
xmlhttp.send();
