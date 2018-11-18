import React, { useState, useEffect } from 'react';
import ShouldRender from './ShouldRender';
import SuccessTab from './SuccessTab';
import ErrorTab from './ErrorTab';
import OptionsTab from './OptionsTab';
import LoadingTab from './LoadingTab';

export default function Form(props) {
  const [answers, setAnswers] = useState([]);
  const [page, setPage] = useState(0);
  const [title, setTitle] = useState('');
  const [calculatingValue, setCalculatingValue] = useState(false);
  const [formIsCompleted, setFormIsCompleted] = useState(false);
  const [phoneIsBroken, setPhoneIsBroken] = useState(false);
  const [waitForConfirmation, setConfirmation] = useState(null);
  const [accessories, setAccessories] = useState(null);
  const actions = {
    setCalculatingValue, setFormIsCompleted, setPhoneIsBroken, 
    setAnswers, setPage, setConfirmation, setAccessories
  };

  useEffect(() => {
    let title = answers.map((answer, i) => {
      if (i > 4 || i === 1) return null;
      return answer ? answer.title : null;
    });
    title = title.length > 2 ? `${title[0]}, ${title.slice(2).join(', ')}` : title[0];
    setTitle(title);
  }, [answers])

  return (
    <form style={{ minHeight: props.minHeight }}>
      <ShouldRender if={!phoneIsBroken && !formIsCompleted && !calculatingValue}>
        <OptionsTab 
          {...actions} 
          answers={answers} 
          page={page} 
          confirm={waitForConfirmation} 
          accessories={accessories}
          title={title}
        />
      </ShouldRender>

      <ShouldRender if={phoneIsBroken}>
        <ErrorTab 
          continueSurvey={() => setPhoneIsBroken(false)} 
          page={page} 
          setPage={setPage}
        />
      </ShouldRender>

      <ShouldRender if={calculatingValue}>
        <LoadingTab title={title} />
      </ShouldRender>

      <ShouldRender if={formIsCompleted}>
        <SuccessTab />
      </ShouldRender>
    </form>
  )
}