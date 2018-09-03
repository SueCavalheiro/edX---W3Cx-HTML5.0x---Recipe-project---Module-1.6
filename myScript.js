function openTab(evt, cityName) {
  let i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (let = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");    
  }

  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

   window.onload = function(e){
      document.getElementById("defaultOpen").click();
   }
