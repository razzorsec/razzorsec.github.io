let xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let data = JSON.parse(this.responseText).feed.entry;

    let i;
    for (i = 0; i < data.length; i++) {
      let infoForSite = data[i]["gsx$_d9ney"]["$t"];
      let siteLink = data[i]["gsx$_db1zf"]["$t"];
      
      


      document.getElementById("showsiteData").innerHTML +=
        "<tr>" +
        "<td>" +
        infoForSite +
        "</td>" +
        "<td>" + 
        "<a href='" +
        siteLink + 
        "'>" + siteLink + "</a>" +
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