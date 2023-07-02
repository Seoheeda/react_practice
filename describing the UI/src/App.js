import React from 'react';

// Your First Component - Challenge 1

// export default function Profile() {
//   return (
//     <img
//       src="https://i.imgur.com/lICfvbD.jpg"
//       alt="Aklilu Lemma"
//     />
//   );
// }



// Your First Componemt - Challenge 2

// export default function Profile() {
//   return (
//     <img src="https://i.imgur.com/jA8hHMpm.jpg" alt="Katsuko Saruhashi" />
//   );
// }



// Your First Component - Challenge 3

// function Profile() {
//   return (
//     <img
//       src="https://i.imgur.com/QIrZWGIs.jpg"
//       alt="Alan L. Hart"
//     />
//   );
// }

// export default function Gallery() {
//   return (
//     <section>
//       <h1>Amazing scientists</h1>
//       <Profile />
//       <Profile />
//       <Profile />
//     </section>
//   );
// }



// Your First Component - Challenge 4

// export default function Congratulations() {
//   return (
//     <h1>Good job!</h1>
//   );
// }



// Importing and Exporting Components - Challenge 1

// import Gallery from './Gallery.js';
// import Profile from './Profile.js';

// export default function App() {
//   return (
//     <div>
//       <Profile />
//       <Gallery />
//     </div>
//   );
// }



// Writing Markup with JSX

// export default function Bio() {
//     return (
//       <>
//         <div className="intro">
//           <h1>Welcome to my website!</h1>
//         </div>
//         <p className="summary">
//           You can find my thoughts here.
//           <br /><br />
//           <b>And <i>pictures</i></b> of scientists!
//         </p>
//       </>
//     );
//   }



// JavaScript in JSX with Curly Braces - Challenge 1

// const person = {
//     name: 'Gregorio Y. Zara',
//     theme: {
//       backgroundColor: 'black',
//       color: 'pink'
//     }
//   };

//   export default function TodoList() {
//     return (
//       <div style={person.theme}>
//         <h1>{person.name}'s Todos</h1>
//         <img
//           className="avatar"
//           src="https://i.imgur.com/7vQD0fPs.jpg"
//           alt="Gregorio Y. Zara"
//         />
//         <ul>
//           <li>Improve the videophone</li>
//           <li>Prepare aeronautics lectures</li>
//           <li>Work on the alcohol-fuelled engine</li>
//         </ul>
//       </div>
//     );
//   }



// JavaScript in JSX with Curly Braces - Challenge 2

//   const person = {
//     name: 'Gregorio Y. Zara',
//     url : 'https://i.imgur.com/7vQD0fPs.jpg',
//     theme: {
//       backgroundColor: 'black',
//       color: 'pink'
//     }
//   };

//   export default function TodoList() {
//     return (
//       <div style={person.theme}>
//         <h1>{person.name}'s Todos</h1>
//         <img
//           className="avatar"
//           src={person.url}
//           alt="Gregorio Y. Zara"
//         />
//         <ul>
//           <li>Improve the videophone</li>
//           <li>Prepare aeronautics lectures</li>
//           <li>Work on the alcohol-fuelled engine</li>
//         </ul>
//       </div>
//     );
//   }



// JavaScript in JSX with Curly Braces - Challenge 3

// const baseUrl = 'https://i.imgur.com/';
// const person = {
//   name: 'Gregorio Y. Zara',
//   imageId: '7vQD0fP',
//   imageSize: 's',
//   theme: {
//     backgroundColor: 'black',
//     color: 'pink'
//   }
// };

// export default function TodoList() {
//   return (
//     <div style={person.theme}>
//       <h1>{person.name}'s Todos</h1>
//       <img
//         className="avatar"
//         src={baseUrl + person.imageId + person.imageSize + ".jpg"}
//         alt={person.name}
//       />
//       <ul>
//         <li>Improve the videophone</li>
//         <li>Prepare aeronautics lectures</li>
//         <li>Work on the alcohol-fuelled engine</li>
//       </ul>
//     </div>
//   );
// }



// Passing Props to a Component - Challenge 1
// 여기 단원 어려웠음 ㅠㅠ 

// import { getImageUrl } from './utils.js';

// function Profile({
//   imageId,
//   name,
//   className="avatar",
//   imageSize=70,
//   profession,
//   awards,
//   discovered  
// }) {
//     return (
//       <section className="profile">
//         <h2>{name}</h2>
//         <img
//           className={className}
//           src={getImageUrl(imageId)}
//           alt={name}
//           width={imageSize}
//           height={imageSize}
//         />
//         <ul>
//           <li>
//             <b>Profession: </b>{profession}</li>
//           <li>
//             <b>Awards: {awards.length} </b>
//             ({awards.join(', ')})
//           </li>
//           <li>
//             <b>Discovered: </b>
//             {discovered}
//           </li>
//         </ul>
//       </section>
//   );
// }

// export default function Gallery() {
//   return (
//     <div>
//       <h1>Notable Scientists</h1>
//       <Profile 
//         imageId='szV5sdG'
//         name='Maria Skłodowska-Curie'
//         profession="physicist and chemist"
//         awards={[
//           "Nobel Prize in Physics",
//           "Nobel Prize in Chemistry",
//           "Davy Medal",
//           "Matteucci Medal"
//           ]}
//         discovered="polonium (element)"
//         />

//       <Profile
//         imageId='YfeOqp2'
//         name="Katsuko Saruhashi"
//         profession="geochemist"
//         awards={[
//           "Miyake Prize for geochemistry",
//           "Tanaka Prize"
//           ]}
//         discovered="a method for measuring carbon dioxide in seawater"
//         />
//       </div>     
//   )
// }



// Passing Props to a Component - Challenge 2

// import { getImageUrl } from './utils.js';

// function Avatar({ person, size }) {
//   let imagesize = 's'
//   if (size >= 90){
//     imagesize = 'b'
//   }

//   return (
//     <img
//       className="avatar"
//       src={getImageUrl(person, imagesize)}
//       alt={person.name}
//       width={size}
//       height={size}
//     />
//   );
// }

// export default function Profile() {
//   return (
//     <>
//       <Avatar
//         size={40}
//         person={{ 
//           name: 'Gregorio Y. Zara', 
//           imageId: '7vQD0fP'
//         }}
//       />
//       <Avatar
//         size={50}
//         person={{ 
//           name: 'Gregorio Y. Zara', 
//           imageId: '7vQD0fP'
//         }}
//       />
//     </>
//   );
// }



// Passing Props to a Component - Challenge 3

// function Card({children}) {
//     return (
//         <div className="card">
//           <div className="card-content">
//             {children}
//           </div>
//         </div>
//     )
//   }

//   export default function Profile() {
//     return (
//       <div>
//         <Card>
//             <h1>Photo</h1>
//             <img
//               className="avatar"
//               src="https://i.imgur.com/OKS67lhm.jpg"
//               alt="Aklilu Lemma"
//               width={70}
//               height={70}
//             />
//         </Card>
//         <Card>
//           <h1>About</h1>
//           <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
//         </Card>
//       </div>
//     );
//   }



// Conditional Rendering - Challenge 1

// function Item({ name, isPacked }) {
//     return (
//       <li className="item">
//         {isPacked ? name + ' ✔' : name + '❌'}
//       </li>
//     );
//   }

//   export default function PackingList() {
//     return (
//       <section>
//         <h1>Sally Ride's Packing List</h1>
//         <ul>
//           <Item 
//             isPacked={true} 
//             name="Space suit" 
//           />
//           <Item 
//             isPacked={true} 
//             name="Helmet with a golden leaf" 
//           />
//           <Item 
//             isPacked={false} 
//             name="Photo of Tam" 
//           />
//         </ul>
//       </section>
//     );
//   }



// Conditional Rendering - Challenge 2

// function Item({ name, importance }) {
//     return (
//       <li className="item">
//         {name} {(importance > 0) && <i>(Importance: {importance})</i>}
//       </li>
//     );
//   }

//   export default function PackingList() {
//     return (
//       <section>
//         <h1>Sally Ride's Packing List</h1>
//         <ul>
//           <Item 
//             importance={9} 
//             name="Space suit" 
//           />
//           <Item 
//             importance={0} 
//             name="Helmet with a golden leaf" 
//           />
//           <Item 
//             importance={6} 
//             name="Photo of Tam" 
//           />
//         </ul>
//       </section>
//     );
//   }



// Conditional Rendering - Challenge 3

// function Drink({ name }) {
//     let plant, content, age;
//     if (name === 'tea') {
//         plant = 'leaf';
//         content = '15–70 mg/cup';
//         age = '4,000+ years';
//     } else if (name === 'coffee') {
//         plant = 'bean';
//         content = '80–185 mg/cup';
//         age = '1,000+ years';
//     }
//     return (
//         <section>
//             <h1>{name}</h1>
//             <dl>
//                 <dt>Part of plant</dt>
//                 <dd>{plant}</dd>
//                 <dt>Caffeine content</dt>
//                 <dd>{content}</dd>
//                 <dt>Age</dt>
//                 <dd>{age}</dd>
//             </dl>
//         </section>
//     );
// }

// export default function DrinkList() {
//     return (
//         <div>
//             <Drink name="tea" />
//             <Drink name="coffee" />
//         </div>
//     );
// }



// Rendering Lists - Challenge 1

// import { people } from './data.js';
// import { getImageUrl } from './utils.js';

// export default function List() {
//   const chemists = people.filter(person =>
//     person.profession === 'chemist'
//     );
//   const everyoneElse = people.filter(person =>
//     person.profession !== 'chemist'
//     );
//   return (
//     <article>
//       <h1>Scientists</h1>
//       <h1>Chemists</h1>
//       <ul>
//         {chemists.map(person =>
//         <li key={person.id}>
//           <img
//             src={getImageUrl(person)}
//             alt={person.name}
//           />
//           <p>
//             <b>{person.name}:</b>
//             {' ' + person.profession + ' '}
//             known for {person.accomplishment}
//           </p>
//         </li>
//         )}
//       </ul>
//       <h1>Everyone Else</h1>
//       <ul>
//         {everyoneElse.map(person =>
//           <li key={person.id}>
//             <img
//               src={getImageUrl(person)}
//               alt={person.name}
//             />
//             <p>
//               <b>{person.name}:</b>
//               {' ' + person.profession + ' '}
//               known for {person.accomplishment}
//             </p>
//           </li>
//         )}
//       </ul>
//     </article>
//   );
// }



// Rendering Lists - Challenge 2

// import { recipes } from './data.js';

// export default function RecipeList() {
//   return (
//     <div>
//       <h1>Recipes</h1>
//       {recipes.map(recipe =>
//         <div key={recipe.id}>
//           <h2>{recipe.name}</h2>
//           <ul>
//             {recipe.ingredients.map(ingredient =>
//               <li key={ingredient}>
//                 {ingredient}
//               </li>
//             )}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }



// Rendering Lists - Challenge 3  



// Rendering Lists - Challenge 4



// Keeping Components Pure - Challenge 1 
// 왜 여기선 실행 안돼!!!!

// export default function Clock({ time }) {
//     let hours = time.getHours();
//     let className;
//     if (hours >= 0 && hours <= 6) {
//       className = 'night';
//     } else {
//       className = 'day';
//     }
//     return (
//       <h1 className={className}>
//         {time.toLocaleTimeString()}
//       </h1>
//     );
//   }



// Keeping Components Pure - Challenge 2

// import Profile from './Profile.js';

// export default function App() {
//   return (
//     <>
//       <Profile person={{
//         imageId: 'lrWQx8l',
//         name: 'Subrahmanyan Chandrasekhar',
//       }} />
//       <Profile person={{
//         imageId: 'MK3eW3A',
//         name: 'Creola Katherine Johnson',
//       }} />
//     </>
//   )
// }



// Keeping Components Pure - Challenge 3



