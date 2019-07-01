SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});
$(document).ready(function() { SC.stream('tracks/637394484',function(sound){
<<<<<<< HEAD
    $('#start').click(function(e) {
=======
    $('#start1').click(function(e) {
>>>>>>> 08abd8416bd5fdeaacb844fb4c9e1647289762d3
           e.preventDefault();
           sound.start();
         });
         $('#stop1').click(function(e) {
                    e.preventDefault();
                    sound.stop();
                  });

  });
});
