import * as React from "react";
import Select from 'react-select';
import { useState } from "react";
import ReactDOM from "react-dom";
import { Button } from './Button';
import './Modal.css'

const Modal = () => {
  
  const [selected, setSelected] = React.useState("");
  
  
  const changeSelectOptionHandler = (event) => {
    setSelected(event.target.value);
  };
  
 
  const Genre = [
    "Genre_1",
    "Genre_2",
    "Genre_3",
  ];
  const Author = ["Author_1", "Author_2", "Author_3", "Author_4"];
  const previousReads = ["b1", "b2", "b3", "b4"];
  
 
  let type = null;
  
  
  let options = null;
  
 
  if (selected === "Genre") {
    type = Genre;
  } else if (selected === "Author") {
    type = Author;
  } else if (selected === "previousReads") {
    type = previousReads;
  }
  
  
  if (type) {
    options = type.map((el) => <option key={el}>{el}</option>);
  }
  return (
    <div
      style={{
        padding: "160px",
        margin: "20px",
      }}
    >
      <form>
        <div>
          
          <select onChange={changeSelectOptionHandler}>
            <option>Choose...</option>
            <option>Genre</option>
            <option>Author</option>
            <option>Previous Reads</option>
          </select>
        </div>
        <div>
          <select>
            {
              
              options
            }
          </select>
        </div>
      </form>
      <div>
      <form>
           <Button buttonStyle='btn--primary'>VIEW RESULT</Button>
          </form>
      </div>
    </div>
  );
};

export default Modal;