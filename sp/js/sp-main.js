$(function(){
  //
  //
  // window.addEventListener('deviceorientation', function(event){ //デバイスの傾きや方角の値が変化したときに発火
  //   //
  // 	// console.log(event.alpha); // event.alphaで方角の値を取得
  //   // if(event.alpha >= -15 || event.alpha <= 15){
  //   //   $('.nav-img').css('transform','rotate('+event.alpha+'deg)');
  //   // }else if(event.alpha <= -15 ){
  //   //   $('.nav-img').css('transform','rotate(-15deg)');
  //   // }else if(event.alpha >= 15) {
  //   //   $('.nav-img').css('transform','rotate(15deg)');
  //   // }
  // });

  var deviceOrientation = window.orientation; //デバイスの傾きを取得

  // //デバイスが動くたびに実行

  //加速度
  window.addEventListener("devicemotion", function devicemotionHandler(event) {


    //重力加速度
    var xg = event.accelerationIncludingGravity.x / 10;
    var yg = event.accelerationIncludingGravity.y / 10;

    switch (deviceOrientation) {
      case 0:
        engine.world.gravity.x = xg + event.acceleration.x;
        engine.world.gravity.y = -yg + event.acceleration.y;
        break;
      case 90:
        engine.world.gravity.x = -yg - event.acceleration.x;
        engine.world.gravity.y = -xg + event.acceleration.x;
        break;
      case -90:
        engine.world.gravity.x = yg + event.acceleration.x;
        engine.world.gravity.y = xg - event.acceleration.x;
        break;
      case 180:
        engine.world.gravity.x = -xg - event.acceleration.x;
        engine.world.gravity.y = yg - event.acceleration.x;
    }

    if ( window.navigator.userAgent.indexOf('Android') > 0 ) {
      engine.world.gravity.x = - engine.world.gravity.x;
      engine.world.gravity.y = - engine.world.gravity.y;
    }
  });

    // module aliases
  var Engine = Matter.Engine,
      Render = Matter.Render,
      World = Matter.World,
      Bodies = Matter.Bodies;

  // create an engine
  var engine = Engine.create();

  var width =  window.innerWidth;
  var height =  window.innerHeight;

  // create a renderer
  var render = Render.create({
      element: document.getElementById("canvas"),
      options: {
        width: width,
        height: height,
        pixelRatio: 2, //Pixel比; スマホ用に2にする
        background: "rgba(0, 0, 0, 0)", //背景色
        wireframes: false
      },
      engine: engine
  });

var bodies = [];
var boxRender = { fillStyle: 'rgba(0, 0, 0, 0)',strokeStyle: 'rgba(0, 0, 0, 0)',lineWidth: 0 }



for(var i = 0; i < 30; i++) {
  bodies.push(
    Bodies.circle(
      Math.random() * (width - 0) + 0, Math.random() * (height - 440) + 440, 20,
      {
        density: 0.0005, //密度
        frictionAir: 0.02, //空気抵抗
        restitution: 0.8, //反発
        friction: 0.1, //摩擦
        render: {
          background: '0xfafafa',
          sprite: {
            texture: './images/top/pop-' + (Math.floor( Math.random() * 3 ) + 1) + '.png',
            xScale: 0.32,
            yScale: 0.32
          }
        }
      })
    )
  }

  //壁の生成
  bodies.push(Bodies.rectangle(0, 0, width*2, 80,{ isStatic: true, render: boxRender }));
  bodies.push(Bodies.rectangle(0, height, width*2 + 10, 30, { isStatic: true, render: boxRender }));
  bodies.push(Bodies.rectangle(0, 0, 40, height*2, { isStatic: true, render: boxRender }));
  bodies.push(Bodies.rectangle(width, 0, 40, height*2, { isStatic: true, render: boxRender }));

  // add all of the bodies to the world
  World.add(engine.world, bodies);

  // run the engine
  Engine.run(engine);

  // run the renderer
  Render.run(render);
});
