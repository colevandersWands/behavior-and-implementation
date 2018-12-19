/*
  steps
    write a bunch of test cases on the original code
    expand the original code and run the tests on your refactor
  build examples that need some good expanding
    but not callbacks
*/

{ console.log('--- --- name of exercise --- ---')

console.log('--- test cases ---')

  // some initial cases are given
  //  inject some bad test cases?
  // develop more by trial and error
  let test_cases = [
    {name: 'stepper: 0, acumul: 0', args: [0, 0], expected: {acumul: 6, stepper: 3}}
  ];

console.log('--- original code ---')

  for (let i = 0; i < test_cases.length; i++) {
    // process & validate input
    let stepper = test_cases[i].args[0];
    let acumul = test_cases[i].args[1];
    let expected = test_cases[i].expected;

    // run the script
    while (stepper < 3) {
      acumul += stepper * 2
      stepper++
    }

    const actual = {acumul, stepper}


    // communicate results to the developer
    let pass;
    if (typeof expected === 'object') {
      const _actual = JSON.stringify(actual);
      const _expected = JSON.stringify(expected);
      pass = _actual === _expected;
    } else {
      pass = actual === expected;
    };

    if (!pass) {
      console.log(
        `${test_cases[i].name} \n` ,
        "\t actual: ", actual,
        "\t expected: ", expected );
    };
  };

console.log('--- expanded code ---')

  for (let i = 0; i < test_cases.length; i++) {
    // process & validate input
    let stepper = test_cases[i].args[0];
    let acumul = test_cases[i].args[1];
    let expected = test_cases[i].expected;

    // run the script
    while (stepper < 3) {
      const step_1 = stepper * 2
      acumul = acumul + step_1
      stepper++
    }

    const actual = {acumul, stepper}


    // communicate results to the developer
    let pass;
    if (typeof expected === 'object') {
      const _actual = JSON.stringify(actual);
      const _expected = JSON.stringify(expected);
      pass = _actual === _expected;
    } else {
      pass = actual === expected;
    };

    if (!pass) {
      console.log(
        `${test_cases[i].name} \n` ,
        "\t actual: ", actual,
        "\t expected: ", expected );
    };
  };

// have a third step where they recompress in some new way?


}