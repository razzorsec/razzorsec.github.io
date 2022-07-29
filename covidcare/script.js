let xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let data = JSON.parse(this.responseText).values;

    let i;
    for (i = 1; i < data.length; i++) {
      let resc = data[i][0];
      let name = data[i][1];
      let amt = data[i][2];
      let city = data[i][3];
      let contact = data[i][4];
      let status = data[i][5];


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
  "https://sheets.googleapis.com/v4/spreadsheets/18cCyFbxG6AvhNsk5JLIFCwulcwHvmzxu1kI6decYSNw/values/Resources?alt=json&key=AIzaSyDOK2wTjiLGwwJva-C9Y4u-0oVGNzqPUJk",
  true
);
xmlhttp.send();
