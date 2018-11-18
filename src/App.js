import React, { useState } from 'react';
import Form from './components/Form';
import Display from './components/Display';

export default function App() {
  const [ minHeight, setMinHeight ] = useState(0);
  return (
    <section className="container">
      <Display setMinHeight={setMinHeight} />
      <Form minHeight={minHeight} />
    </section>
  )
}