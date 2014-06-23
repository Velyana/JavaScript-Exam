"use strict";

var secondsFirstD = $("#second-first-digit"),
    secondsSecondD = $("#second-second-digit"),
    minutesFirstD = $("#minute-first-digit"),
    minutesSecondD = $("#minute-second-digit");

var printTime = function(minutes, seconds) {
  secondsFirstD.text(Math.floor(seconds/10));
  secondsSecondD.text(seconds%10);
  minutesFirstD.text(Math.floor(minutes/10));
  minutesSecondD.text(minutes%10);
};

$(document).ready(function() {
  var timer;

  $("#countUp").on("click", function() {
    var seconds = 0,
        minutes = 0,
        fSeconds = parseInt($("#seconds").val(),10),
        fMinutes = parseInt($("#minutes").val(), 10);

    timer = window.setInterval(function() {
      if(seconds === fSeconds && minutes === fMinutes) {
        window.clearInterval(timer);
        return 0;
      }

      if(seconds === 59) {
        minutes++;
        seconds = 0;
      }
      seconds++;

    printTime(minutes, seconds);
    }, 1000);
  });

  $("#countDown").on("click", function() {
    var seconds = parseInt($("#seconds").val(),10),
        minutes = parseInt($("#minutes").val(), 10);

    timer = window.setInterval(function() {
      printTime(minutes, seconds);
      if(seconds === 0 && minutes === 0) {
        window.clearInterval(timer);
        return 0;
      }
      if(seconds === 0) {
        minutes--;
        seconds = 59;
      }
      seconds--;
    }, 1000);
  });

  $("#stop").on("click", function() {
    window.clearInterval(timer);
    secondsFirstD.text(0);
    secondsSecondD.text(0);
    minutesFirstD.text(0);
    minutesSecondD.text(0);
  });

});
