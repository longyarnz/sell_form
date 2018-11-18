import React from 'react';
import Spinner from './Spinner';

export default function LoadingTab({ title }) {
  return (
    <section className="loading-tab">
      <header>
        <h4>
          <strong>iPhone XR</strong>:<em> </em>
          { title }
        </h4>
        <h5>
          Calculating offer value...
        </h5>
      </header>
      <Spinner left="50%" top="35%" />
    </section >
  )
}
