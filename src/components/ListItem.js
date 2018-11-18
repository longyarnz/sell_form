import React from 'react'
import { Unclicked, Clicked, Checked, Unchecked } from './SVG';
import ShouldRender from './ShouldRender';
import { FlatList } from './Utils';

export default function ListItem(props) {
  const SVG = props.page < 5 ? (
    props.clicked ? Clicked : Unclicked
  ) : (
    props.clicked ? Checked : Unchecked
  );
  const style = props.clicked ? 'selected' : '';

  return (
    <li className={style} onClick={props.onClick}>
      <SVG />
      <span id="option">
        <ShouldRender if={typeof props.option === 'string'}>
          {props.option}
        </ShouldRender>

        <ShouldRender if={typeof props.option === 'object'}>
          {props.option.top}
          <footer>
            {props.option.bottom}
          </footer>
        </ShouldRender>
      </span>
      <ShouldRender if={props.toBeConfirmed}>
        <ul id="confirmation">
          <FlatList
            list={props.option.footer}
            listView={(text, i) => <li key={`con-${i}`}>{text}</li>}
          />
        </ul>
      </ShouldRender>
    </li>
  )
}
