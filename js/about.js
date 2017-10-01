$(function(){

  function initMap() {
   // 地図の作成
     map = new google.maps.Map(document.getElementById('about-map'), { // #sampleに地図を埋め込む
       center: {
          lat: 35.1816645, // 緯度
          lng: 136.9474646 // 経度
       },
        zoom: 16
     });

    var icon = new google.maps.MarkerImage('images/common/icon-flag.png',
      new google.maps.Size(40,58),/*アイコンサイズ設定*/
      new google.maps.Point(0,0)/*アイコン位置設定*/
    );

      markerLatLng = new google.maps.LatLng({lat: 35.1816645, lng: 136.9471074});
      marker = new google.maps.Marker({ // マーカーの追加
        position: markerLatLng, // マーカーを立てる位置を指定
        icon: icon,
        map: map // マーカーを立てる地図を指定
      });
   /*取得スタイルの貼り付け*/
   var styleOptions = [
     {
       "stylers": [
         { "hue": "#f08d24" },
         { "visibility": "on" }
       ]
     }
   ];
   var styledMapOptions = { name: '芸工' }
   var geikoMapType = new google.maps.StyledMapType(styleOptions, styledMapOptions);
   map.mapTypes.set('about-map', geikoMapType);
   map.setMapTypeId('about-map');

  }
  google.maps.event.addDomListener(window, 'load', initMap);

});
