function onKeyDown(event) {
  event.preventDefault();
  if (event.key === "backspace") {
    if (!currentPath.isEmpty()) {
      currentPath.removeSegment(currentPath.lastSegment.index)
    }
  } else if (event.key === "space") {
    // console.log(app);
  } else if (event.key === "enter") {
    closePath();
  } else if (event.key === "1") {
    activateLayer("layer1", 1);
  } else if (event.key === "2") {
    activateLayer("layer2", 2);
  } else if (event.key === "3") {
    activateLayer("layer3", 3);
  } else if (event.key === "4") {
    activateLayer("layer4", 4);
  } else if (event.key === "0") {
    activateLayer("layerBg", 0);
  } else if (event.modifiers.shift && event.key === "n") {
    var clearAllConfirm = confirm("Are you sure you want to start new?");

    if (clearAllConfirm == true) {
      var numOfLayers = document.querySelectorAll(".layers > div");
      for (var i = 0; i < numOfLayers.length; i++) {
        clearLayer(i)
      }
    }
  } else if (event.modifiers.shift && event.key === "l") {
    var clearConfirm = confirm("Reset layer?");
    if (clearConfirm == true) {
      clearLayer(app.activeLayerIndex);
    }
  } else if (event.modifiers.shift && event.key === "e") {
    canvasExport();
  } else if (event.key === "q") {
    activateLayer("layer1", 1);
    $('[data-remodal-id=modal]').remodal().open();
  } else if (event.key === "w") {
    activateLayer("layer2", 2);
    $('[data-remodal-id=modal]').remodal().open();
  } else if (event.key === "e") {
    activateLayer("layer3", 3);
    $('[data-remodal-id=modal]').remodal().open();
  } else if (event.key === "r") {
    activateLayer("layer4", 4);
    $('[data-remodal-id=modal]').remodal().open();
  } else if (event.key === "p") {
    activateLayer("layerBg", 0);
    $('[data-remodal-id=modal]').remodal().open();
  } else if (event.key === "c") {
    app.tool = "free";
    $('.lassoPoly').removeClass("active");
    $('.lassoFree').addClass("active");
  } else if (event.key === "v") {
    app.tool = "poly";
    $('.lassoFree').removeClass("active");
    $('.lassoPoly').addClass("active");
  }
}

$(".shortcut").attr("data-remodal-target", "modalKeys");
$( document ).ready(function() {
  $('[data-remodal-id=modalKeys]').remodal().open();
  $('.lassoFree').addClass("active");
});
