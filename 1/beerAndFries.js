"use strict";

var beerAndFries = function(items) {
  function compare(x, y) {
    if(x.score < y.score)
      return 1;
    if(x.score > y.score)
      return -1;
    return 0;
  }

  var b = [], f = [], res = [];
  items.forEach(function(i) {
    if(i.type === "beer")
      b.push(i);
    else f.push(i);
  });

  var i = 0;

  b.sort(compare);
  f.sort(compare);
  b.forEach(function(i) {
    res.push(i);
  });
  f.forEach(function(i) {
    res.push(i);
  });

  var sum = 0;
  var mid = res.length/2;
  while(res[i]) {
  sum += res[i].score*res[mid].score;
  i++;
  mid++;
  if(mid === res.length)
    break;
  }
  return sum;
};

exports.beerAndFries = beerAndFries;
