import React from 'react'

export function BackButton(props) {
  return <button className={props.page < 1 ? 'hide' : ''} disabled={props.page < 1} onClick={e => {
    e.preventDefault();
    let i = 1;
    if (props.page === 3) {
      props.setConfirmation(null);
    }
    else if (props.page === 4) {
      props.setAnswers(props.answers.slice(0, props.answers.length - 1));
    }
    else if (props.page === 5) {
      props.setAccessories(null);
    }
    else if (props.page === 2 && props.answers[0].optionIndex !== 1) {
      i = 2;
    }
    props.setPage(props.page - i);
  }}>
    Back
  </button>;
}

export function NextButton(props) {
  return (
    <button
      className={(props.page === 1 && typeof props.answers[1] !== 'object' | !props.answers[1]) ||
        (!props.accessories && !props.confirm && props.page >= props.answers.length) ? 'hide' : ''
      }
      disabled={(props.page === 1 && typeof props.answers[1] !== 'object' | !props.answers[1]) ||
        (!props.accessories && !props.confirm && props.page >= props.answers.length)
      }
      onClick={e => {
        e.preventDefault();
        if (props.page < 5) {
          if (props.page === 0 && props.answers[0] && props.answers[0].optionIndex !== 1) {
            props.setPage(props.page + 2);
          }
          else {
            if (props.confirm) {
              if (props.page === 3 && props.confirm.index === 0) {
                props.setCalculatingValue(true);
                props.setAnswers(props.confirm.newAnswers);
                props.setConfirmation(null);
              }
              else {
                props.setAnswers(props.confirm.newAnswers);
                props.setConfirmation(null);
                props.setPage(props.page + 1);
              }
            }
            else {
              props.setPage(props.page + 1);
            }
          }
        }
        else {
          props.setCalculatingValue(true);
        }
      }}
    >
      Next Step
    </button>
  )
}