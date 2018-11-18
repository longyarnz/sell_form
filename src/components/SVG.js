import React from 'react'

function Unclicked(){
  return (
    <span>
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
        <path d="M12,2c5.514,0,10,4.486,10,10c0,5.514-4.486,10-10,10C6.486,22,2,17.514,2,12C2,6.486,6.486,2,12,2z M12,0
        C5.373,0,0,5.373,0,12s5.373,12,12,12s12-5.373,12-12S18.627,0,12,0z"></path>
      </svg>
    </span>
  )
}

function Clicked() {
  return (
    <span>
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
        <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.687-6 6s2.687 6 6 6c3.314 0 6-2.687 6-6s-2.686-6-6-6z"></path>
      </svg>
    </span>
  )
}

function Checked(){
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
      <path d="M22 2v20h-20v-20h20zm2-2h-24v24h24v-24zm-5.541 8.409l-1.422-1.409-7.021 7.183-3.08-2.937-1.395 1.435 4.5 4.319 8.418-8.591z"></path>
    </svg>
  )
}

function Unchecked(){
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
      <path d="M22 2v20h-20v-20h20zm2-2h-24v24h24v-24z"></path>
    </svg>
  )
}

function BusIcon(){
  return (
    <svg width="20" height="20" fill="#accf29" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
      <path d="M640 1408q0-52-38-90t-90-38-90 38-38 90 38 90 90 38 90-38 38-90zm-384-512h384v-256h-158q-13 0-22 9l-195 195q-9 9-9 22v30zm1280 512q0-52-38-90t-90-38-90 38-38 90 38 90 90 38 90-38 38-90zm256-1088v1024q0 15-4 26.5t-13.5 18.5-16.5 11.5-23.5 6-22.5 2-25.5 0-22.5-.5q0 106-75 181t-181 75-181-75-75-181h-384q0 106-75 181t-181 75-181-75-75-181h-64q-3 0-22.5.5t-25.5 0-22.5-2-23.5-6-16.5-11.5-13.5-18.5-4-26.5q0-26 19-45t45-19v-320q0-8-.5-35t0-38 2.5-34.5 6.5-37 14-30.5 22.5-30l198-198q19-19 50.5-32t58.5-13h160v-192q0-26 19-45t45-19h1024q26 0 45 19t19 45z"></path>
    </svg>
  )
}

function CashIcon(){
  return (
    <svg width="20" height="20" fill="#accf29" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
      <path d="M704 1152h384v-96h-128v-448h-114l-148 137 77 80q42-37 55-57h2v288h-128v96zm512-256q0 70-21 142t-59.5 134-101.5 101-138 39-138-39-101.5-101-59.5-134-21-142 21-142 59.5-134 101.5-101 138-39 138 39 101.5 101 59.5 134 21 142zm512 256v-512q-106 0-181-75t-75-181h-1152q0 106-75 181t-181 75v512q106 0 181 75t75 181h1152q0-106 75-181t181-75zm128-832v1152q0 26-19 45t-45 19h-1792q-26 0-45-19t-19-45v-1152q0-26 19-45t45-19h1792q26 0 45 19t19 45z"></path>
    </svg>
  )
}

export { Unclicked, Clicked, Checked, Unchecked, BusIcon, CashIcon }