// function Profile() {
//   return (
//     <img
//       src="https://i.imgur.com/MK3eW3As.jpg"
//       alt="Katherine Johnson"
//     />
//   );
// }





// import Gallery from "@/components/Gallery";
// import {Profile} from "@/components/Profile";
// // import {Pot} from "@/components/Gallery";


// export default function Home() {
//   return (
//     <section>
//       {/* <h1 className="text-xl text-red-300">Amazing scientists</h1> */}
//       <div className="flex gap-x-5 mt-5">
//      <Gallery />
//      <Profile />
//      {/* <Pot /> */}
//       </div>
//     </section>
//   );
// }

// export default function TodoList() {
//   return (
//     // This doesn't quite work!
//     <div>
//     <h1>Hedy Lamarr's Todos</h1>
//     <img 
//       src="https://i.imgur.com/yXOvdOSs.jpg" 
//       alt="Hedy Lamarr" 
//       className="photo"
//     />
//     <ul>
//       <li>Invent new traffic lights</li>
//       <li>Rehearse a movie scene</li>
//       <li>Improve the spectrum technology</li>
//     </ul>
//         </div>
//   );
// }

// export default function Avatar (){
//   const avatar = "https://i.imgur.com/7vQD0fPs.jpg";
//   const description = "Gregorio Y. Zara";
  
//   return (
//     <img className="avater"
//     src={avatar} alt={description} />
//   )

// };
// export default function TodoList(){
//   const name = "umair";
//   return(
// <h1>{name}'s To Do List{formatDate(today)}</h1>
//   )
// }

// const today = new Date();

// function formatDate(date:Date) {
//   return new Intl.DateTimeFormat(
//     'en-US',
//     { weekday: 'long' }
//   ).format(date);
// }




// const person = {
//   name:"umair",
//   theme : {
//     backgroundColor: 'black',
//     color: 'pink'

// }
//   };


// export default function TodoList() {
//   return (
//     <div style={person.theme}>
//       <h1 >{person.name}'s ToDo</h1>
//       <img className="Avater"
//       src="https://i.imgur.com/7vQD0fPs.jpg"
//       alt="Gregorio Y. Zara" />
// <ul>
//       <li>Improve the videophone</li>
//       <li>Prepare aeronautics lectures</li>
//       <li>Work on the alcohol-fuelled engine</li>
//     </ul>
//     </div>
//   );
// }
// import Profile from "@/components/Profile";
// mporit Avatar from "@/components/Avatar";


// export default function Home() {
//   return (
//     <div>
//       <Profile />
//       {/* <Avatar /> */}
//     </div>
//   );
// }



// import { getImageUrl } from "@/components/Profile";

// function Avatar({ person, size }:any) {
//   return (
//     <img
//       className="avatar"
//       src={getImageUrl(person)}
//       alt={person.name}
//       width={size}
//       height={size}
//     />
//   );
// }

// export default function Profile() {
//   return (
//     <div>
//       <Avatar
//         size={100}
//         person={{ 
//           name: 'Katsuko Saruhashi', 
//           imageId: 'YfeOqp2'
//         }}
//       />
//       <Avatar
//         size={80}
//         person={{
//           name: 'Aklilu Lemma', 
//           imageId: 'OKS67lh'
//         }}
//       />
//       <Avatar
//         size={50}
//         person={{ 
//           name: 'Lin Lanying',
//           imageId: '1bX5QH6'
//         }}
//       />
//     </div>
//   );
// }

// import PackList from "@/components/PackList";


// export default function Home(){
//   return(
//     <div>
//     <PackList />  
//     </div>
//   )
// }



let guest = 0;

function Cup() {
  // Bad: changing a preexisting variable!
  guest = guest + 1;
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaSet() {
  return (
    <>
      <Cup />
      <Cup />
      <Cup />
    </>
  );
}