$(function(){
  // 協賛データ
  var sponser = [
    // {
    //   name : '海の台所 はまきん',
    //   address : '愛知県名古屋市千種区池下2-2-15',
    //   time : `17:00～24:00（平日）<br>
    //   16:00～24:00（土・日・祝日）`,
    //   tell: `0527517021`,
    //   description : `日本酒やワインが豊富☆<br>
    //   他では手に入らないプレミアム日本酒も多数取り揃えています☆その他、こだわりの焼酎、ワインも種類豊富！<br>
    //   新鮮なお刺身と創作料理<br>
    //   毎日オーナーが厳選して仕入れした魚が◎その他、パスタやお肉料理など種類豊富なお料理が楽しめます♪<br>
    //   個室も完備！池下駅すぐ♪<br>
    //   限定1室の掘りごたつ個室は6名様までOK☆駅近で終電ギリギリまで飲んでもOK！2軒目にも◎毎日深夜1時迄営業`,
    //   label : 'バイト募集',
    //   other : null,
    //   logo : 'logo-hama.png',
    //   images : ['hama1.png','hama2.jpg']
    // },
    // {
    //   name : '団十郎',
    //   address : '春日井市白山町4-8-2',
    //   time : `17:00〜23:00(L.O22:30)<br>
    //   日曜のみ12:00〜23:00(L.O22:30)<br>
    //   定休日：第1.3水曜日`,
    //   tell: `0568515003`,
    //   description : `
    //   <a href="http://www.danjuro29.com">ホームページ</a>
    //   <a href="https://s.tabelog.com/aichi/A2303/A230301/23036018/">食べログ</a>
    //   <a href="https://www.hotpepper.jp/strJ000414804/">ホットペッパー</a>`,
    //   label : null,
    //   other : null,
    //   logo : "logo-dan.png",
    //   images : ['dan-1.png','dan-2.png']
    // },
    // {
    //   name : '団十郎',
    //   address : '春日井市白山町4-8-2',
    //   time : `17:00〜23:00(L.O22:30)<br>
    //   日曜のみ12:00〜23:00(L.O22:30)<br>
    //   定休日：第1.3水曜日`,
    //   tell: `0568515003`,
    //   description : `
    //   <a href="http://www.danjuro29.com">ホームページ</a>
    //   <a href="https://s.tabelog.com/aichi/A2303/A230301/23036018/">食べログ</a>
    //   <a href="https://www.hotpepper.jp/strJ000414804/">ホットペッパー</a>`,
    //   label : ,
    //   other : ,
    //   logo : ,
    //   images :
    // }
  ]

  // popcorn-nav
  for(var i = 0 ; i < sponser.length ; i++){
    var name = sponser[i].name;
    $('.container').append(`<a class="modal-btn" id='${i}' href='#modal'>${name}</a>`);
  };

  //モーダルの中身
  $('.modal-btn').click(function(){
    //初期化
    $('.remodal').children("p").remove();
    var id = $(this).attr('id')
    var name = sponser[id].name;

    $('.remodal').append(
      `<p>${name}</p>`
    )
  });

});
