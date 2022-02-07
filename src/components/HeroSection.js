import React from 'react';
import '../App.css';
import { Button } from './RecomButton';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <h1>BOOK RECOMMENDER</h1>
            <p>SUGGESTS YOU A BOOK BASED ON YOUR INTERESTS!</p>
            <br/>
            <div className='input-areas'>
          <form>
           <Button buttonStyle='btn--primary'>GET SUGGESTIONS</Button>
          </form>
        </div>
        </div>
    )
}

export default HeroSection
