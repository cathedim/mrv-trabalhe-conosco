$(document).ready(function(){
  $("#abre-modal").click(function(){
    $("#myModal").modal();
  });
});

function expandir(id) {
  var icon = document.getElementById(id);
  if (icon.classList.contains('fa-chevron-down')) {
    icon.classList.remove('fa-chevron-down');
    icon.classList.add("fa-chevron-up");
  }
  else {
    icon.classList.remove('fa-chevron-up');
    icon.classList.add("fa-chevron-down");
  }
}