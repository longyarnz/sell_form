import React from 'react';
import { BusIcon, CashIcon } from './SVG';
import Image from '../files/price-promise.png';

export default function SuccessTab() {
  return (
    <section className="success-tab">
      <header>
        <h4>
          <strong>iPhone XR</strong>: T-Mobile
        </h4>
      </header>

      <div>Your device is valued at</div>
      <div>$500.00</div>
      <div>
        <button>Back</button>
        <button>Add To Box</button>
      </div>

      <div>
        <div>
          <BusIcon />
          <span>Fast and Free Shipping!</span>
        </div>
        <div>
          <CashIcon />
          <span>Safe and Secure Payment!</span>
        </div>
      </div>

      <div>
        <img src={Image} alt="Guarantee"/>
        <div>
          <h5>ItsWorthMore Satisfaction Promise</h5>
          <p>
            Accurately describe your device and we promise the quoted value and a smooth, streamlined transaction. No bull. 
            <span>That's a promise.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
