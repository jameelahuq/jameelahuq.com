(function () {
  $(function () {

    var $magArea = $('#magnifyingArea');
    var $magGlass = $('#magnifyingGlass');
    var $magImage = $('#magnifiedImage');

    var magAreaY = Number($magArea[0].offsetTop);
    var magAreaX = Number($magArea[0].offsetLeft);
    var imageRatio = Number(1263/421);

    var imageSize = Number($magImage[0].height);


    //the magnifying glass image will track the cursor
    $magArea.mousemove(function(event) {
      console.log(event);
      //console.log(event.clientX-magAreaX, magAreaY-event.clientY);
      $magGlass.css({
        'top' : Number(event.pageY) + 'px',
        'left' : Number(event.pageX) + 'px',
        //'background-image': 'url(Program_Blog/Focus_In/worldsfair11-hr.jpg)'

        //'background-position': (magAreaX - event.clientX)*imageRatio+ "px " + (magAreaY - event.clientY-360)*imageRatio + "px"

      });

    });

    //the magnifying glass will disappear when the cursor leaves
    //$magArea.mouseleave(function(event) {
    //
    //  $magGlass.css({
    //    'display': 'none'
    //  });
    //
    //  $('body').css({
    //    'cursor':'default'
    //  })
    //});
    //
    //$magArea.mouseenter(function(event) {
    //  $magGlass.css({
    //    'display': 'inherit'
    //  })
    //});

  });
})();
