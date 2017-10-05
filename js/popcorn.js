$(function(){

	var items = 30;//popcornの個数

	for (var i=0; i<=items; i++) {
		var secondVal = Math.ceil( Math.random()*4 );
	    var moveVal = Math.ceil( Math.random()*16 );
	    var scaleVal = Math.ceil( Math.random()*4 );
	    var rotateVal = Math.ceil( Math.random()*5 );
	    var popcornVal = Math.ceil( Math.random()*4 );
	    $(".popcorn-container").append('<div class="move'+secondVal+moveVal+'"><div class="scale'+secondVal+scaleVal+'"><div class="rotate'+rotateVal+'"><div class="item popcorn'+popcornVal+'"></div></div></div></div>');
	}
});