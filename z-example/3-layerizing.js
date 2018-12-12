/* for each exercise, a folder with
    replit-passing dev-script exercise
    handler function file
    html file that loads both
    and has simple input/button/output ui
    and inputs & expected fields, by type & value
    and has a short description of the script's behavior
*/


function handler() {
  // gather user input
  const pre_stepper = document.getElementById('initial-stepper').value;
  let stepper = Number(pre_stepper);
  const pre_acumul = document.getElementById('initial-acumul').value;
  let acumul = Number(pre_acumul);

  const pre_exp_stepper = document.getElementById('expected-stepper').value;
  let exp_stepper = Number(pre_exp_stepper);
  const pre_exp_acumul = document.getElementById('expected-acumul').value;
  let exp_acumul = Number(pre_exp_acumul);

  // run the script
  while (stepper < 3) {
    acumul += stepper * 2
    stepper++
  }


  // communicate results to the user
  const output_div = document.getElementById('output-div');
  if (acumul === exp_acumul && stepper === exp_stepper) {
    output_div.innerHTML = 'correct!';
  } else {
    output_div.innerHTML = 'check console for assertion error';
    console.assert(false, {acumul, stepper})
  }
};  