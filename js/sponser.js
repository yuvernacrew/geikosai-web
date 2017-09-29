$(function(){
  var map;
  var marker = [];
  var infoWindow = [];
  var markerData = [ // マーカーを立てる場所名・緯度・経度
    {
      name: '団十郎',
      lat: 35.271214,
      lng: 137.030245
    },
    {
      name: '海の台所 はまきん',
      lat: 35.168333,
      lng: 136.945717
    },
    {
      name: 'かどまつ今池店',
      lat: 35.1693,
      lng: 136.938734
    },
    {
      name: 'カプリチョーザイオンモール岡崎店',
      lat: 34.937846,
      lng: 137.164454
    },
    {
      name: '株式会社アトリエキース',
      lat: 35.186693,
      lng: 136.975899
    },
    {
      name: '焼肉 龍華園',
      lat: 35.171108,
      lng: 136.947594
    },
    {
      name: '早乙女ふるまゐ',
      lat: 35.169956,
      lng: 136.934814
    },
    {
      name: 'ガーデンレストラン徳川園 蘇山荘',
      lat: 35.18415,
      lng: 136.932434
    },
    {
      name: '点-TOMORU- 名駅太閤口店',
      lat: 35.169232,
      lng: 36.881203
    },
    {
      name: 'じーる',
      lat: 35.003796,
      lng: 137.031446
    },
    {
      name: '麺屋 ささき',
      lat: 35.191327,
      lng: 136.943516
    },
    {
      name: '錦三山車楼',
      lat: 35.171879,
      lng: 136.902648
    }
  ];

  function initMap() {
   // 地図の作成
      var mapLatLng = new google.maps.LatLng({lat: markerData[0]['lat'], lng: markerData[0]['lng']}); // 緯度経度のデータ作成
     map = new google.maps.Map(document.getElementById('sponser-map'), { // #sampleに地図を埋め込む
       center: mapLatLng, // 地図の中心を指定
        zoom: 15 // 地図のズームを指定
     });

   // マーカー毎の処理
   for (var i = 0; i < markerData.length; i++) {
          markerLatLng = new google.maps.LatLng({lat: markerData[i]['lat'], lng: markerData[i]['lng']}); // 緯度経度のデータ作成
          marker[i] = new google.maps.Marker({ // マーカーの追加
           position: markerLatLng, // マーカーを立てる位置を指定
              map: map // マーカーを立てる地図を指定
         });

       infoWindow[i] = new google.maps.InfoWindow({ // 吹き出しの追加
           content: '<div class="map-title">' + markerData[i]['name'] + '</div>' // 吹き出しに表示する内容
         });

       markerEvent(i); // マーカーにクリックイベントを追加
   }
  }

  // マーカーにクリックイベントを追加
  function markerEvent(i) {
      marker[i].addListener('click', function() { // マーカーをクリックしたとき
        infoWindow[i].open(map, marker[i]); // 吹き出しの表示
    });
  }
  google.maps.event.addDomListener(window, 'load', initMap);

});
