$(document).ready(function() {
    $('.animate__animated').waypoint({
      handler: function(direction) {
        if (direction === 'down') {
          $(this.element).removeClass('hidden');
          $(this.element).addClass('animate__animated');
          console.log('Elemento visível:', this.element);
        }
      },
      offset: '75%'
    });

    var layer = $('.layer');

    if (layer.hasClass('layer__active')) {
      $('body').css('overflow', 'hidden');
    }


  });