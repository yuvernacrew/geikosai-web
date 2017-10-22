$(function(){
  // sp navのcss変更
  $.ajaxSetup({cache:false});
  $("header").load("template/header.html");
  $("footer").load("template/footer.html");
})
