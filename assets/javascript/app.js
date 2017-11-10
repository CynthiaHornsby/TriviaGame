 $("#hide").hide();
 $("#displaywatch").hide();
 $("#scorediv").hide();
 window.onload = function() {

  $("#displaywatch").text("00:00");

  $("#start").on("click", function() {
   $("#displaywatch").show();
   $("#intro").hide();
   $("#hide").show();
   stopWatch.run();
   $("#start").hide();

  });
 };

 var intervalId;
 var clockRunning = false;
 var count = 0;

 var stopWatch = {

  time: 40,

  reset: function() {
   stopWatch.time = 40;
   $("#displaywatch").text("00:00");
  },

  run: function() {

   if (!clockRunning) {
    intervalId = setInterval(stopWatch.count, 1000);
    clockRunning = true;

   }
  },

  stop: function() {
   clearInterval(intervalId);
   clockRunning = false;
  },

  count: function() {

   stopWatch.time--;
   var convertedTime = stopWatch.timeConverter(stopWatch.time);
   $("#displaywatch").text(convertedTime);

   if (stopWatch.time === 0) {
    $("#displaywatch").hide();
    $("#hide").hide();
    $("#scorediv").show();
    var correct = $('.correct:checked').length;
    var incorrect = $('.incorrect:checked').length;
    var unchecked = 5 - (correct + incorrect);
    $("#correct").append(correct);
    $("#incorrect").append(incorrect);
    $("#blank").append(unchecked);

   }
  },

  timeConverter: function(t) {

   var minutes = Math.floor(t / 60);
   var seconds = t - (minutes * 60);

   if (seconds < 10) {
    seconds = "0" + seconds;
   }

   if (minutes === 0) {
    minutes = "00";
   }
   else if (minutes < 10) {
    minutes = "0" + minutes;
   }

   return minutes + ":" + seconds;
  },


 };
 