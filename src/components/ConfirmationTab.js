import React from 'react'
import ShouldRender from './ShouldRender';
import { FlatList } from './Utils';

export default function ConfirmationTab(props) {
  return <ShouldRender if={props.waitForConfirmation}>
    <div className="confirmation">
      <strong>For a device to be in this condition. The following must also be true.</strong>
      <ul>
        <FlatList 
          list={props.waitForConfirmation ? props.waitForConfirmation.options : []} 
          listView={(text, i) => <li key={`con-1${i}`}>{text}</li>} 
        />
      </ul>
    </div>
  </ShouldRender>;
}