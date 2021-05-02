let xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let data = JSON.parse(this.responseText).feed.entry;

    let i;
    for (i = 0; i < data.length; i++) {
      let resc = data[i]["gsx$_cn6ca"]["$t"];
      let name = data[i]["gsx$_cokwr"]["$t"];
      let amt = data[i]["gsx$_cpzh4"]["$t"];
      let city = data[i]["gsx$_cre1l"]["$t"];
      let contact = data[i]["gsx$_chk2m"]["$t"];
      let status = data[i]["gsx$_ciyn3"]["$t"];


      document.getElementById("showData").innerHTML +=
        "<tr>" +
        "<td>" +
        resc +
        "</td>" +
        "<td>" +
        name +
        "</td>" +
        "<td>" +
        amt +
        "</td>" +
        "<td>" +
        city +
        "</td>" +
        "<td>" +
        contact +
        "</td>" +
        "<td>" +
        status +
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