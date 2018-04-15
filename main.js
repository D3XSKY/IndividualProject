// below are functions which I used to manipulate navigating through sections.
function ChangeSectionToEdu(){
     $("#section1").hide();
     $("#section2").show();
     $("#section3").hide();
     $("#section4").hide();
}
function ChangeSectionToGen(){
    $("#section1").show();
    $("#section2").hide();
    $("#section3").hide();
    $("#section4").hide();
}
function ChangeSectionToExp(){
    $("#section1").hide();
    $("#section2").hide();
    $("#section3").show();
    $("#section4").hide();
}
function ChangeSectionToAdd(){
    $("#section1").hide();
    $("#section2").hide();
    $("#section3").hide();
    $("#section4").show();
}
// I found this on w3c and adjusted it to change profile photo on hover
function hover(profil) {
    profil.setAttribute('src', 'img/profil.jpg');
  }
  
  function unhover(profil) {
    profil.setAttribute('src', 'img/profilvanilla.jpg');
  }

  /*//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_collapsible_animate*/
  function Collapse() {
    var coll = document.getElementsByClassName("collapsible");
    var i;
    
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        } 
      });
    }
    // I googled this out and found it useful in education section on html
    function GpaHover(){
      $( function() {
        $(".gpahov").tooltip();
      } );  
    }
  }



