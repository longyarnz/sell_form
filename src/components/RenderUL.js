import React from 'react';
import ShouldRender from './ShouldRender';
import { FlatList } from './Utils';
import ListItem from './ListItem';

export default function RenderForm({ 
  item, index, answers, page, waitForConfirmation, setPage, title, loadValue,
  setAnswers, setConfirmation, setAccessories, accessories, stopSurvey
}) {
  const getClickedOption = i => {
    let option = item.options[i];
    const newAnswers = [...answers];

    if(page < 5) {
      option = {
        title: typeof option === 'object' ? option.top : option,
        optionIndex: i
      };
      newAnswers[index] = option;
      
      if (page < 3) {
        if(page === 0 && i !== 1){
          setPage(page + 2);
          newAnswers[index + 1] = null;
        }
        else{
          setPage(page + 1);
        }
        setAnswers(newAnswers);
      }
      
      else if (page === 3) {
        // if(i === 0) {
        //   loadValue(true);
        //   setAnswers(newAnswers);
        // }
        // else{
          setConfirmation({
            index: i,
            options: item.options[i].footer,
            newAnswers
          });
        // }
      }
      
      else if(page === 4){
        if(i === 1) {
          stopSurvey(true);
        }
        setAnswers(newAnswers);
        setPage(page + 1);
      }
    }
    else {
      const list = accessories ? accessories : [];
      if(!list.some(i => i === option)){
        list.push(i);
      };
      newAnswers[index] = list;
      setAccessories(list);
      setAnswers(newAnswers);
    }
  }

  return (
    <ShouldRender if={page === index}>
      <header>
        <ShouldRender if={answers.length > 0}>
          <h4>
            <strong>iPhone XR</strong>:<em> </em> 
            { title }
          </h4>
        </ShouldRender>
        <h3>{item.top}</h3>
        <h5><span>{item.bottom}</span></h5>
      </header>
      <ul className="render-ul">
        <FlatList
          list={item.options}
          listView={(option, i) => {
            const confirmation = waitForConfirmation && waitForConfirmation.index !== i;
            if (confirmation) return null;
            return (
              <ListItem
                option={option}
                clicked={
                  (waitForConfirmation && waitForConfirmation.index === i) ||
                  (answers[index] && answers[index].optionIndex === i) ||
                  (accessories && accessories.some(index => index === i))
                }
                onClick={() => getClickedOption(i)}
                key={`list-${i}`}
                page={page}
              />
            )
          }
          }
        />
      </ul>
      <ShouldRender if={waitForConfirmation}>
        <div className="confirmation">
        <strong>For a device to be in this condition. The following must also be true.</strong>
          <ul>
            <FlatList
              list={waitForConfirmation ? waitForConfirmation.options : []}
              listView={(text, i) => <li key={`con-1${i}`}>{text}</li>}
            />
          </ul>
        </div>
      </ShouldRender>
    </ShouldRender>
  )
}