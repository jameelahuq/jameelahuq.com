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
        'top' : event.pageY + 'px',
        'left' : event.pageX + 'px',
        //'background-image': 'url(Program_Blog/Focus_In/worldsfair11-hr.jpg)'

        'background': 'url(Program_Blog/Focus_In/worldsfair11-hr.jpg)' +
        (magAreaX - event.clientX+100)*imageRatio+ "px " + (magAreaY - event.clientY-190)*imageRatio + "px"

      });
    });

    //the magnifying glass will disappear when the cursor leaves
    $magArea.mouseleave(function(event) {
      $magGlass.css({
        'display': 'none'
      })
    });

    $magArea.mouseenter(function(event) {
      $magGlass.css({
        'display': 'inherit'
      })
    });

  });
})();
