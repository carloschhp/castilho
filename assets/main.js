$(document).ready(function(){

  $('.bounceInDown').waypoint(function(direction) {
    myfunc_bounceInDown(this.element, direction);
  },{offset:'90%'});

  function myfunc_bounceInDown(target, direction){
    if(direction === "down"){
      $(target).removeClass("hidden__intro");
      $(target).addClass("animated bounceInDown");

      setTimeout(function(){
          $(target).removeClass("animated bounceInDown");
      }, 2000);
    }
  }

  var layer = $('.layer');
  if (layer.hasClass('layer__active')) {
    // $('body').css('overflow', 'hidden');
    setTimeout(function() {
      layer.fadeOut(800, function() {
        layer.removeClass("layer__active");
        layer.css('display', 'none');
        $('body').css('overflow', 'auto');
        // layer.css('display', 'none');


        $('#fade_in_down').waypoint(function(direction) {
          myfunc_fadeInDown(this.element, direction); //when using waypoint, this refers to the waypoint object
        },{offset:'60%'});
      
        $('.fade_in_left').waypoint(function(direction) {
          myfunc_fadeInLeft(this.element, direction);
        },{offset:'90%'});
      
        $('.bounceInDown__').waypoint(function(direction) {
          myfunc_bounceInDown(this.element, direction);
        },{offset:'90%'});
      
        $('.fade_in_right').waypoint(function(direction) {
          myfunc_fadeInRight(this.element, direction);
        },{offset:'90%'});
      
        $('.slide_in_up').waypoint(function(direction) {
          myfunc_slideInUp(this.element, direction);
        },{offset:'99%'});
      
        $('.zoom_in').waypoint(function(direction) {
          myfunc_zoomIn(this.element, direction);
        },{offset:'90%'});
      
        function myfunc_fadeInDown(target, direction){
          if(direction === "down"){
            $(target).addClass("animated fadeInDown");
            
            setTimeout(function(){
              $(target).removeClass("animated fadeInDown");
              $(target).removeClass("hidden");
            }, 1000);
          }
        }
      
        function myfunc_fadeInLeft(target, direction) {
          if (direction === "down") {
            $(target).removeClass("hidden");
            $(target).addClass("animated fadeInLeft");
        
            setTimeout(function() {
              $(target).removeClass("animated fadeInLeft");
            }, 2000);
          }
        }
      
        function myfunc_bounceInDown(target, direction){
          if(direction === "down"){
            $(target).removeClass("hidden");
            $(target).addClass("animated bounceInDown");
      
            setTimeout(function(){
                $(target).removeClass("animated bounceInDown");
            }, 2000);
          }
        }
      
        function myfunc_fadeInRight(target, direction){
          if(direction === "down"){
            $(target).removeClass("hidden");
            $(target).addClass("animated fadeInRight");
      
            setTimeout(function(){
                $(target).removeClass("animated fadeInRight");
            }, 1000);
          }
        }
      
        function myfunc_slideInUp(target, direction){
          if(direction === "down"){
            $(target).removeClass("hidden");
            $(target).addClass("animated slideInUp");
            setTimeout(function(){
                $(target).removeClass("animated slideInUp");
              }, 2000);
          }
        }
      
        function myfunc_zoomIn(target, direction){
          if(direction === "down"){
            $(target).removeClass("hidden");
            $(target).addClass("animated zoomIn");
            setTimeout(function(){
                $(target).removeClass("animated zoomIn");
            }, 1000);
          }
        }


      });
    }, 2000);
  }

});