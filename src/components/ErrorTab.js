import React from 'react'

export default function ErrorTab(props) {
  return (
    <section className="error-tab">
      <header>
        Unfortunately, we cannot make an offer on your device at this time.
      </header>
      <footer>
        <button
          onClick={e => {
            e.preventDefault();
            props.setPage(props.page - 1);
            props.continueSurvey();
          }}
        >
          Back
        </button>
      </footer>
    </section >
  )
}
