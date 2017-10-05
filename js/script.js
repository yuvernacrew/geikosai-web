$(function(){
  $('#navToggle').click(function(){
    $('.sp-header').toggleClass('open-nav');
    $('.body-container').toggleClass('non-scroll');
  });

  $(window).on('hashchange',function(){
    stageHashChecked();
  });

  $(window).on('load',stageHashChecked());


  function stageHashChecked(){
    switch(location.hash){
      case "#stage":
        $("#stage").attr("checked", true);
        break;

      case "#cafe":
        $("#cafe").attr("checked", true);
        break;

      case "#ws":
        $("#ws").attr("checked", true);
        break;

      case "#booth":
        $("#booth").attr("checked", true);
        break;
      default:
        break;
    }
  }

})
