$(function(){
  $('#fullpage').fullpage({
    anchors: ['1','2'],
    navigation: false,
    navigationPosition: 'right',
    navigationTooltips: ['1','2']
  });

  var Bingo = ['1' , '2',  '3',  '4',  '5',  '6',  '7',  '8',  '9', '10',
              '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
              '21', '22', '23', '24', '25', '26', '27', '28', '29', '30',
              '31', '32', '33', '34', '35', '36', '37', '38', '39', '40',
              '41', '42', '43', '44', '45', '46', '47', '48', '49', '50',
              '51', '52', '53', '54', '55', '56', '57', '58', '59', '60',
              '61', '62', '63', '64', '65', '66', '67', '68', '69', '70',
              '71', '72', '73', '74', '75'];

  var result = [];
  var num;
  var timer;
  var audio = new Audio("audio/drum.mp3");
  var bgColor;

  $(window).keydown(function(e){
    if(event.shiftKey){
      if(e.keyCode === 13){
        bingoRoll();
        setTimeout(bingoResult,2000);
      }
    }
  });

  function bingoRoll(){

    // 再生を開始する
    audio.play();
    timer = setInterval(function(){
      $('.result-box').text(Bingo[Math.floor(Math.random() * Bingo.length)]);
    },100)
  }

  function bingoResult(){
    clearInterval(timer);
    //リセット
    $('.result01').html('');
    num = Math.floor(Math.random() * Bingo.length);
    // 結果を表示

    $('.result-box').text(Bingo[num]);

    // 結果をresultに追加
    result.unshift(Bingo[num]);

    // 順番に表示するやつ

    for(var count = 0; count < result.length; count++){
      bgColor = count % 3;
      $('.result01').append(`<span class="bg${bgColor}">${result[count]}</span>`)
    }

    // Bingoの中身から今の数字を削除
    Bingo.splice(num, 1);
    return false;
  }
});
