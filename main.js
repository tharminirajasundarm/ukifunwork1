

SC.initialize({
client_id:'95f22ed54a5c297b1c41f72d713623ef'

});

$(document).ready(function()
{ SC.stream('/tracks/580908972',function(sound){
  $('#start').click(function(e) {
          e.preventDefault();
          sound.start();
        });

    $('#stop').click(function(e) {
                   e.preventDefault();
                   sound.stop();
                 });
});
});

<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/580908972&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
