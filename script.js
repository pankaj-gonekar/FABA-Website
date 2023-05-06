function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    cButton = document.getElementsByClassName("cButton");
    for (i = 0; i < cButton.length; i++) {
      cButton[i].className = cButton[i].className.replace(" cButton1", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " cButton1";
  }