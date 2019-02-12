<script type="text/javascript">
   function openTab(evt, tabName) {
  //defining 3 variables.
      var i, x, tablinks;
  //collecting elements and store them in an array which has a class name of tab  
      x = document.getElementsByClassName("tab");
  
  //loop over the x array and give style.display=”none” property to every element
      for (i = 0; i < x.length; i++) {
         x[i].style.display = "none";
      }
  
  //collecting elements and store them in an array which has a class name of tablink
      tablinks = document.getElementsByClassName("tablink");
  
  //loop over tablinks array and replace the “w3-blue” class with none.
      for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" w3-blue", "");
      }
  
  //find the element with a id of tabName and set display equal to block
      document.getElementById(tabName).style.display = "block";
  
  //give the classname “w3-blue” to currentTarget
      evt.currentTarget.className += " w3-blue";
   }
</script>