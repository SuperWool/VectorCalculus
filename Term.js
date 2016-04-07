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
    multiply: function(term) {
      coeff *= term.coeff;
      // check the existence of each term in the local term with the foreign one
      
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
      return answer;
    }
  };
}

