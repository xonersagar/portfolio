document.addEventListener('DOMContentLoaded', function() {
    var mediaElements = document.querySelectorAll('audio,video');
    for (var i = 0, total = mediaElements.length; i < total; i++) {
      new MediaElementPlayer(mediaElements[i], {/* Options */});}})

