/** Vanilla-Redux */
import { createStore } from 'redux';

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

/** Vanilla JS without redux */
// let count = 0;
// number.innerText = count;

// const updateText = () => {
//   number.innerText = count;
// }

// const handleMinus = () => {
//   count = count - 1;
//   updateText();
// }

// const handleAdd = () => {
//   count = count + 1;
//   updateText();
// }

// minus.addEventListener("click", handleMinus);
// add.addEventListener("click", handleAdd);

/** Vanilla JS with Redux
 * 1. Create store by createStore() from redux library
 * 2. add reducer
 * 2.1 action is needed to determine the changing state 
 * 3. use dispatch function with an action type to make changes on state
 * 4. use subscribe function to listen changes
 */
number.innerText = 0;

const ADD = 'index/ADD';
const MINUS = 'index/MINUS';

const reducer = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count -1;
    default:
      return count;
  }
};

const store = createStore(reducer);

const onChange = () => {
  console.log(store.getState());
  number.innerText = store.getState();
}

store.subscribe(onChange);

add.addEventListener('click', () => store.dispatch({ type: ADD }));
minus.addEventListener('click', () => store.dispatch({ type: MINUS }));