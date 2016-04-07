function Term(coeff, terms, power) {
  return {
    coeff: coeff,
    terms: terms,
    power: power,
    diff: function(withRespectTo) {
      let wrt = terms.indexOf(withRespectTo);
      if (wrt === -1) {
        coeff = 0;
      } else {
        coeff *= power[wrt]--;
      }
    },
    print: function() {
      let answer = coeff.toString();
      if (coeff !== 0) {
        for (let i = 0; i < terms.length; i++) {
          if (power[i] !== 0) {
            answer += terms[i];
          }
          if (power[i] > 1) {
            answer += power[i];
          }
        }
      }
      $('#answer').html(answer);
    }
  };
}

$(document).ready(function() {
  var x = Term(2, ['x', 'y'], [5, 1]);
  $('#answer').click(function() {
    $(this).fadeOut(250).fadeIn(250);
    x.diff('x');
    x.print();
  });
  x.print();
})
