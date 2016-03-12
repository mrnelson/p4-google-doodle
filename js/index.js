var v= $('.v');
var c= $('.c');
var d= $('.d');
var dd= $('.dd');
var aa= $('.aa');
var yy= $('.yy');

var g= $('.g');
var o= $('.o');
var oo= $('.oo');
var gg= $('.gg');
var l= $('.l');
var e= $('.e');

var blue= '#4885ed';
var yellow= '#f4c20d';
var green= '#3cba54';
var red= '#db3236';


(  function(){
  
  // Your Awesomeness
  


TweenMax.to( [g, gg], 0.5, { 
  ease: Circ.easeOut, 
  y: 0, 
  opacity: 0,
  delay: 4

});

TweenMax.to([o], 0.5, { 
  ease: Circ.easeOut, 
  y: 0, 
  opacity: 0,
  delay: 4.1

});

TweenMax.to([gg,e], 0.5, { 
  ease: Circ.easeOut, 
  y: 0, 
  opacity: 0,
  delay: 4.2

});

TweenMax.to([l], 0.5, { 
  ease: Circ.easeOut, 
  y: 0, 
  opacity: 0,
  delay: 4.4

});

TweenMax.to([oo], 0.5, { 
  ease: Circ.easeOut, 
  y: 0, 
  opacity: 0,
  delay: 4.5

});

TweenMax.from( [v], 0.5, { ease: Power3.easeOut, 
y: 0,
opacity: 0,
delay: 4
});

TweenMax.from( d, 0.5, { ease: Power3.easeOut, 
y: 0,
opacity: 0,
delay: 4.2
});

TweenMax.from( [aa, yy], 0.5, { ease: Power3.easeOut, 
y: 0,
opacity: 0,
delay: 4.3
});

TweenMax.from( [c, dd], 0.5, { ease: Power3.easeOut, 
y: 0,
opacity: 0,
delay: 4.5
});
  
  
  

// http://jsfiddle.net/8ysuw/
  
(function(){
    Colors = {};
    Colors.names = {
      blue: "#4885ed",
      yellow: "#f4c20d",
      green: '#3cba54',
      red: '#db3236'   
    };
    Colors.random = function() {
        var result;
        var count = 0;
        for (var prop in this.names)
            if (Math.random() < 1/++count)
               result = prop;
        return { name: result, rgb: this.names[result]};
    };
    var $document = $(".top");
    $document.ready(function(){
        var color = Colors.random();
        $document.css({'fill': color.rgb});
        $("#color").html("It's " + color.name);
    });

  
})();


(function(){
    Colors = {};
    Colors.names = {
      blue: "#4885ed",
      yellow: "#f4c20d",
      green: '#3cba54',
      red: '#db3236'   
    };
    Colors.random = function() {
        var result;
        var count = 0;
        for (var prop in this.names)
            if (Math.random() < 1/++count)
               result = prop;
        return { name: result, rgb: this.names[result]};
    };
    var $document = $(".bottom");
    $document.ready(function(){
        var color = Colors.random();
        $document.css({'fill': color.rgb});
        $("#color").html("It's " + color.name);
    });

  
})();
  
(function(){
    Colors = {};
    Colors.names = {
      blue: "#4885ed",
      yellow: "#f4c20d",
      green: '#3cba54',
      red: '#db3236'   
    };
    Colors.random = function() {
        var result;
        var count = 0;
        for (var prop in this.names)
            if (Math.random() < 1/++count)
               result = prop;
        return { name: result, rgb: this.names[result]};
    };
    var $document = $(".lsidet");
    $document.ready(function(){
        var color = Colors.random();
        $document.css({'fill': color.rgb});
        $("#color").html("It's " + color.name);
    });

  
})();

(function(){
    Colors = {};
    Colors.names = {
      blue: "#4885ed",
      yellow: "#f4c20d",
      green: '#3cba54',
      red: '#db3236'   
    };
    Colors.random = function() {
        var result;
        var count = 0;
        for (var prop in this.names)
            if (Math.random() < 1/++count)
               result = prop;
        return { name: result, rgb: this.names[result]};
    };
    var $document = $(".lsidem");
    $document.ready(function(){
        var color = Colors.random();
        $document.css({'fill': color.rgb});
        $("#color").html("It's " + color.name);
    });

  
})();

(function(){
    Colors = {};
    Colors.names = {
      blue: "#4885ed",
      yellow: "#f4c20d",
      green: '#3cba54',
      red: '#db3236'   
    };
    Colors.random = function() {
        var result;
        var count = 0;
        for (var prop in this.names)
            if (Math.random() < 1/++count)
               result = prop;
        return { name: result, rgb: this.names[result]};
    };
    var $document = $(".lsideb");
    $document.ready(function(){
        var color = Colors.random();
        $document.css({'fill': color.rgb});
        $("#color").html("It's " + color.name);
    });

  
})();

(function(){
    Colors = {};
    Colors.names = {
      blue: "#4885ed",
      yellow: "#f4c20d",
      green: '#3cba54',
      red: '#db3236'   
    };
    Colors.random = function() {
        var result;
        var count = 0;
        for (var prop in this.names)
            if (Math.random() < 1/++count)
               result = prop;
        return { name: result, rgb: this.names[result]};
    };
    var $document = $(".rsidet");
    $document.ready(function(){
        var color = Colors.random();
        $document.css({'fill': color.rgb});
        $("#color").html("It's " + color.name);
    });

  
})();

(function(){
    Colors = {};
    Colors.names = {
      blue: "#4885ed",
      yellow: "#f4c20d",
      green: '#3cba54',
      red: '#db3236'   
    };
    Colors.random = function() {
        var result;
        var count = 0;
        for (var prop in this.names)
            if (Math.random() < 1/++count)
               result = prop;
        return { name: result, rgb: this.names[result]};
    };
    var $document = $(".rsidem");
    $document.ready(function(){
        var color = Colors.random();
        $document.css({'fill': color.rgb});
        $("#color").html("It's " + color.name);
    });

  
})();

(function(){
    Colors = {};
    Colors.names = {
      blue: "#4885ed",
      yellow: "#f4c20d",
      green: '#3cba54',
      red: '#db3236'   
    };
    Colors.random = function() {
        var result;
        var count = 0;
        for (var prop in this.names)
            if (Math.random() < 1/++count)
               result = prop;
        return { name: result, rgb: this.names[result]};
    };
    var $document = $(".rsideb");
    $document.ready(function(){
        var color = Colors.random();
        $document.css({'fill': color.rgb});
        $("#color").html("It's " + color.name);
    });

  
})();
  
  }());