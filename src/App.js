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

import Gallery from './Gallery.js';
import Profile from './Profile.js';

export default function App() {
  return (
    <div>
      <Profile />
      <Gallery />
    </div>
  );
}