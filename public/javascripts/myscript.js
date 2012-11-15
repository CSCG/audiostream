$(document).ready(function () {
  $('#table_id').dataTable({
    // This is super brittle
    aaSorting: [[1, 'asc'], [3, 'asc']]
  });
  $(document).on('click', 'a.song_title', function (e) {
    e.preventDefault();
    var filename = this.href.replace(/.+\/transcode\//, '');
    var audio = document.createElement('audio');
    audio.setAttribute('controls', null);
    var listener = audio.addEventListener('canplay', function (e) {
      document.body.appendChild(audio);
      audio.removeEventListener('canplay', listener);
    });
    audio.src = '/transcode/' + filename;
  });
});