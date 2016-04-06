String.prototype.replaceAt = function(index, character) {
  return this.substr(0, index) + character + this.substr(index + character.length);
};

$(document).ready(function() {
  $('[name="convert"]').off('click.convert').on('click.convert', function(e) {
    e.preventDefault();
    var srtVal = $('[name="srt"]').val();
    var position = 0;

    if (srtVal.length) {
      while ((position = srtVal.search(/\,[0-9]{3}/)) !== -1) {
        srtVal = srtVal.replaceAt(position, '.');
      }

      $('[name="vtt"]').val(['WEBVTT', '\n', '\n', srtVal].join(''));
    }
  });

  $('[name="reset"]').off('click.reset').on('click.reset', function(e) {
    e.preventDefault();

    $('[name="srt"]').val('');
    $('[name="vtt"]').val('');
  });
});

