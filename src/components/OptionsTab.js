import React from 'react';
import survey from './survey';
import { FlatList } from './Utils';
import RenderUL from './RenderUL';
import { BackButton, NextButton } from './FormButtons';

export default function OptionsTab(props) {
  return (
    <section className="options-tab">
      <FlatList
        list={survey}
        listView={(item, i) => (
          <RenderUL
            item={item}
            index={i}
            setAnswers={props.setAnswers}
            setPage={props.setPage}
            setAccessories={props.setAccessories}
            setConfirmation={props.setConfirmation}
            answers={props.answers}
            key={`ren-${i}`}
            page={props.page}
            waitForConfirmation={props.confirm}
            accessories={props.accessories}
            title={props.title}
            loadValue={props.setCalculatingValue}
            stopSurvey={props.setPhoneIsBroken}
          />
        )}
      />
      <footer>
        <BackButton
          setAnswers={props.setAnswers}
          setPage={props.setPage}
          setAccessories={props.setAccessories}
          setConfirmation={props.setConfirmation}
          answers={props.answers}
          page={props.page}
          waitForConfirmation={props.confirm}
          accessories={props.accessories}
        />

        <NextButton
          setAnswers={props.setAnswers}
          setPage={props.setPage}
          setAccessories={props.setAccessories}
          setConfirmation={props.setConfirmation}
          answers={props.answers}
          page={props.page}
          confirm={props.confirm}
          accessories={props.accessories}
          setCalculatingValue={props.setCalculatingValue}
        />
      </footer>
    </section>
  )
}