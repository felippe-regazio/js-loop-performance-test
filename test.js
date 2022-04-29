function test(e) {
  e && e.preventDefault();

  if (!isBrowserCompatible()) {
    return false;
  }

  var dataSize = new FormData(e.target).get('data-size');
  var data = Array(+dataSize).fill(Date.now());
  var score = scoreboard();

  // FOR

  score.startCount('for');

  for(var i=0; i<data.length; i++) {
    1+1;
  }

  score.stopCount('for');

  // FOR IN

  score.startCount('forIn');
  
  for(var i in data) {
    1+1;
  }

  score.stopCount('forIn');

  // FOR OF

  score.startCount('forOf');
  
  for(var i of data) {
    1+1;
  }

  score.stopCount('forOf');

  // WHILE

  var i = dataSize;

  score.startCount('while');

  while(i >= 0) {
    data[i];

    i--;
  }

  score.stopCount('while');

  // DO-WHILE

  i = dataSize;

  score.startCount('doWhile');

  do {
    data[i];

    i--;
  } while (i >= 0);

  score.stopCount('doWhile');

  //

  showResults(score.getResults());
}

function showResults(results) {
  const resultsHtmlElement = document.getElementById('results');
  resultsHtmlElement.innerHTML = '';

  Object.keys(results).forEach(key => {
    var result = results[key];
    
    var title = Object.assign(document.createElement('h2'), {
      innerText: key
    });

    resultsHtmlElement.append(title);

    // ---------------------------------------------------------

    Object.keys(result).forEach(r => {
      var dt = Object.assign(document.createElement('dt'), {
        innerText: r
      });

      var dd = Object.assign(document.createElement('dd'), {
        innerText: result[r]
      }); 

      resultsHtmlElement.append(dt);
      resultsHtmlElement.append(dd);
    });
  });
}

function scoreboard() {
  var results = {
    for: {},
    forIn: {},
    forOf: {},
    while: {},
    doWhile: {}
  };

  return {
    startCount(entry) {
      results[entry].start = performance.now();
    },

    stopCount(entry) {
      results[entry].end = performance.now();
      results[entry].time =  msFormat(results[entry].end - results[entry].start);
    },

    getResults() {
      return results;
    }
  }
}

function isBrowserCompatible() {
  if (!window.performance) {
    alert('Your page does not support window.performance, so the test wont be possible.');
    
    return false;
  }

  return true;
}

function msFormat(ms) {
  return ms.toFixed(2) + ' ms';
}