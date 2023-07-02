// Responding to Events - Challenge 1

// import './App.css';

// export default function LightSwitch() {
//   function handleClick() {
//     let bodyStyle = document.body.style;
//     if (bodyStyle.backgroundColor === 'black') {
//       bodyStyle.backgroundColor = 'white';
//     } else {
//       bodyStyle.backgroundColor = 'black';
//     }
//   }

//   return (
//     <button onClick={handleClick}>
//       Toggle the lights
//     </button>
//   );
// }



// Responding to Events - Challenge 2

// export default function ColorSwitch({
//   onChangeColor
// }) {
//   return (
//     <button onClick={e=> {
//       e.stopPropagation();
//       onChangeColor();
//     }}>
//       Change color
//     </button>
//   );
// }



// A Component's Memory - Challenge 1
// button의 disabled prop을 false로 설정하면 버튼이 비활성화 됨
// true로 설정하면 버튼이 활성화 !

// import { useState } from 'react';
// import { sculptureList } from './data.js';

// export default function Gallery() {
//   const [index, setIndex] = useState(0);
//   const [showMore, setShowMore] = useState(false);

//   let PrevOk = index > 0;
//   let NextOk = index < sculptureList.length - 1;

//   function handlePrevClick() {
//     if (PrevOk) {
//     setIndex(index - 1)
//     }
//   }

//   function handleNextClick() {
//     if (NextOk) {
//       setIndex(index + 1);
//     }
//   }

//   function handleMoreClick() {
//     setShowMore(!showMore);
//   }

//   let sculpture = sculptureList[index];
//   return (
//     <>
//       <button 
//         onClick={handlePrevClick}
//         disabled={!PrevOk}
//       >
//         Previous
//       </button>
//       <button 
//         onClick={handleNextClick}
//         disabled={!NextOk}
//       >
//         Next
//       </button>
//       <h2>
//         <i>{sculpture.name} </i> 
//         by {sculpture.artist}
//       </h2>
//       <h3>  
//         ({index + 1} of {sculptureList.length})
//       </h3>
//       <button onClick={handleMoreClick}>
//         {showMore ? 'Hide' : 'Show'} details
//       </button>
//       {showMore && <p>{sculpture.description}</p>}
//       <img 
//         src={sculpture.url} 
//         alt={sculpture.alt}
//       />
//     </>
//   );
// }



// A Component's Memory - Challenge 2

// import {useState} from 'react';

// export default function Form() {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');

//   function handleFirstNameChange(e) {
//     setFirstName(e.target.value);
//   }

//   function handleLastNameChange(e) {
//     setLastName(e.target.value);
//   }

//   function handleReset() {
//     setFirstName('');
//     setLastName('');
//   }

//   return (
//     <form onSubmit={e => e.preventDefault()}>
//       <input
//         placeholder="First name"
//         value={firstName}
//         onChange={handleFirstNameChange}
//       />
//       <input
//         placeholder="Last name"
//         value={lastName}
//         onChange={handleLastNameChange}
//       />
//       <h1>Hi, {firstName} {lastName}</h1>
//       <button onClick={handleReset}>Reset</button>
//     </form>
//   );
// }



// A Component's Memory - Challenge 3

// import { useState } from 'react';

// export default function FeedbackForm() {
//   const [isSent, setIsSent] = useState(false);
//   const [message, setMessage] = useState('');
  
//   if (isSent) {
//     return <h1>Thank you!</h1>;
//   } else {
//     // eslint-disable-next-line
//     return (
//       <form onSubmit={e => {
//         e.preventDefault();
//         alert(`Sending: "${message}"`);
//         setIsSent(true);
//       }}>
//         <textarea
//           placeholder="Message"
//           value={message}
//           onChange={e => setMessage(e.target.value)}
//         />
//         <br />
//         <button type="submit">Send</button>
//       </form>
//     );
//   }
// }



// A Component's Memory - Challenge 4

// import { useState } from 'react';

// export default function FeedbackForm() {

//   function handleClick() {
//     name = prompt('What is your name?');
//     alert(`Hello, ${name}!`);
//   }

//   return (
//     <button onClick={handleClick}>
//       Greet
//     </button>
//   );
// }



// State as a Snapshot - Challenge 1

// import { useState } from 'react';

// export default function TrafficLight() {
//   const [walk, setWalk] = useState(true);

//   function handleClick() {
//     setWalk(!walk);
//     alert(walk ? "Stop is Next!" : "Walk is Next!")
//   }

//   return (
//     <>
//       <button onClick={handleClick}>
//         Change to {walk ? 'Stop' : 'Walk'}
//       </button>
//       <h1 style={{
//         color: walk ? 'darkgreen' : 'darkred'
//       }}>
//         {walk ? 'Walk' : 'Stop'}
//       </h1>
//     </>
//   );
// }



// Queuing a Series of State Updates - Challenge 1

// import { useState } from 'react';

// export default function RequestTracker() {
//   const [pending, setPending] = useState(0);
//   const [completed, setCompleted] = useState(0);

//   async function handleClick() {
//     setPending(pending => pending + 1);
//     await delay(3000);
//     setPending(pending => pending - 1);
//     setCompleted(completed => completed + 1);
//   }

//   return (
//     <>
//       <h3>
//         Pending: {pending}
//       </h3>
//       <h3>
//         Completed: {completed}
//       </h3>
//       <button onClick={handleClick}>
//         Buy     
//       </button>
//     </>
//   );
// }

// function delay(ms) {
//   return new Promise(resolve => {
//     setTimeout(resolve, ms);
//   });
// }



// Queuing a Series of State Updates - Challenge 2
// 여기 코드 이해가 잘 안 감,,, 나중에 다시 봐보기 !

// export function getFinalState(baseState, queue) {
//   let finalState = baseState;

//   for (let update of queue) {
//     if (typeof update === 'function') {
//       finalState = update(finalState);
//     } else {
//       finalState = update;
//     }
//   }

//   return finalState;
// }



// Updating Objects in State - Challenge 1

// import { useState } from 'react';

// export default function Scoreboard() {
//   const [player, setPlayer] = useState({
//     firstName: 'Ranjani',
//     lastName: 'Shettar',
//     score: 10,
//   });

//   function handlePlusClick() {
//     setPlayer({
//       ...player,
//       score: player.score + 1,
//     });
//   }

//   function handleFirstNameChange(e) {
//     setPlayer({
//       ...player,
//       firstName: e.target.value,
//     });
//   }

//   function handleLastNameChange(e) {
//     setPlayer({
//       ...player,
//       lastName: e.target.value
//     });
//   }

//   return (
//     <>
//       <label>
//         Score: <b>{player.score}</b>
//         {' '}
//         <button onClick={handlePlusClick}>
//           +1
//         </button>
//       </label>
//       <label>
//         First name:
//         <input
//           value={player.firstName}
//           onChange={handleFirstNameChange}
//         />
//       </label>
//       <label>
//         Last name:
//         <input
//           value={player.lastName}
//           onChange={handleLastNameChange}
//         />
//       </label>
//     </>
//   );
// }



// Updating Objects in State - Challenge 2

// import { useState } from 'react';
// import Background from './Background.js';
// import Box from './Box.js';

// const initialPosition = {
//   x: 0,
//   y: 0
// };

// export default function Canvas() {
//   const [shape, setShape] = useState({
//     color: 'orange',
//     position: initialPosition
//   });

//   function handleMove(dx, dy) {
//     setShape({
//       ...shape,
//       position: {
//         x: shape.position.x + dx,
//         y: shape.position.y + dy
//       }
      
//     })
    
//   }

//   function handleColorChange(e) {
//     setShape({
//       ...shape,
//       color: e.target.value
//     });
//   }

//   return (
//     <>
//       <select
//         value={shape.color}
//         onChange={handleColorChange}
//       >
//         <option value="orange">orange</option>
//         <option value="lightpink">lightpink</option>
//         <option value="aliceblue">aliceblue</option>
//       </select>
//       <Background
//         position={initialPosition}
//       />
//       <Box
//         color={shape.color}
//         position={shape.position}
//         onMove={handleMove}
//       >
//         Drag me!
//       </Box>
//     </>
//   );
// }



// Updating Objects in State - Challenge 3

// import { useState } from 'react';
// import { useImmer } from 'use-immer';
// import Background from './Background.js';
// import Box from './Box.js';

// const initialPosition = {
//   x: 0,
//   y: 0
// };

// export default function Canvas() {
//   const [shape, updateShape] = useImmer({
//     color: 'orange',
//     position: initialPosition
//   });

//   function handleMove(dx, dy) {
//     updateShape(draft => {
//       draft.position.x += dx;
//       draft.position.y += dy;
//     });
//   }

//   function handleColorChange(e) {
//     updateShape(draft => {
//       draft.color = e.target.value;
//     });
//   }

//   return (
//     <>
//       <select
//         value={shape.color}
//         onChange={handleColorChange}
//       >
//         <option value="orange">orange</option>
//         <option value="lightpink">lightpink</option>
//         <option value="aliceblue">aliceblue</option>
//       </select>
//       <Background
//         position={initialPosition}
//       />
//       <Box
//         color={shape.color}
//         position={shape.position}
//         onMove={handleMove}
//       >
//         Drag me!
//       </Box>
//     </>
//   );
// }



// Updating Arrays in State - Challenge 1

// import { useState } from 'react';

// const initialProducts = [{
//   id: 0,
//   name: 'Baklava',
//   count: 1,
// }, {
//   id: 1,
//   name: 'Cheese',
//   count: 5,
// }, {
//   id: 2,
//   name: 'Spaghetti',
//   count: 2,
// }];

// export default function ShoppingCart() {
//   const [
//     products,
//     setProducts
//   ] = useState(initialProducts)

//   function handleIncreaseClick(productId) {
//     setProducts(products.map(product => {
//       if (product.id === productId) {
//         return {
//           ...product,
//           count: product.count + 1
//         };
//       } else {
//         return product;
//       }
//     }))
//   }

//   return (
//     <ul>
//       {products.map(product => (
//         <li key={product.id}>
//           {product.name}
//           {' '}
//           (<b>{product.count}</b>)
//           <button onClick={() => {
//             handleIncreaseClick(product.id);
//           }}>
//             +
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// }



// Updating Arrays in State - Challenge 2

// import { useState } from 'react';

// const initialProducts = [{
//   id: 0,
//   name: 'Baklava',
//   count: 1,
// }, {
//   id: 1,
//   name: 'Cheese',
//   count: 5,
// }, {
//   id: 2,
//   name: 'Spaghetti',
//   count: 2,
// }];

// export default function ShoppingCart() {
//   const [
//     products,
//     setProducts
//   ] = useState(initialProducts)

//   function handleIncreaseClick(productId) {
//     setProducts(products.map(product => {
//       if (product.id === productId) {
//         return {
//           ...product,
//           count: product.count + 1
//         };
//       } else {
//         return product;
//       }
//     }))
//   }

//    function handleDecreaseClick(productId) {
//     let nextProducts = products.map(product => {
//       if (product.id === productId) {
//         return {
//           ...product,
//           count: product.count - 1
//         };
//       } else {
//         return product;
//       }
//     });
//     nextProducts = nextProducts.filter(p =>
//       p.count > 0
//     );
//     setProducts(nextProducts)
//   }

//   return (
//     <ul>
//       {products.map(product => (
//         <li key={product.id}>
//           {product.name}
//           {' '}
//           (<b>{product.count}</b>)
//           <button onClick={() => {
//             handleIncreaseClick(product.id);
//           }}>
//             +
//           </button>
//           <button onClick={() => {
//             handleDecreaseClick(product.id);
//           }}>
//             –
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// }



// Updating Arrays in State - Challenge 3

// import { useState } from 'react';
// import AddTodo from './AddTodo.js';
// import TaskList from './TaskList.js';

// let nextId = 3;
// const initialTodos = [
//   { id: 0, title: 'Buy milk', done: true },
//   { id: 1, title: 'Eat tacos', done: false },
//   { id: 2, title: 'Brew tea', done: false },
// ];

// export default function TaskApp() {
//   const [todos, setTodos] = useState(
//     initialTodos
//   );

//   function handleAddTodo(title) {
//     setTodos([
//       ...todos,
//       {
//         id: nextId++,
//         title: title,
//         done: false
//       }
//     ]);
//   }

//   function handleChangeTodo(nextTodo) {
//     setTodos(todos.map(t => {
//       if (t.id === nextTodo.id) {
//         return nextTodo;
//       } else {
//         return t;
//       }
//     }));
//   }

//   function handleDeleteTodo(todoId) {
//     setTodos(
//       todos.filter(t => t.id !== todoId)
//     );
//   }

//   return (
//     <>
//       <AddTodo
//         onAddTodo={handleAddTodo}
//       />
//       <TaskList
//         todos={todos}
//         onChangeTodo={handleChangeTodo}
//         onDeleteTodo={handleDeleteTodo}
//       />
//     </>
//   );
// }



// Updating Arrays in State - Challenge 4

