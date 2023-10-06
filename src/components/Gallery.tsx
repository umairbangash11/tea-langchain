
import {Profile} from "@/components/Profile"
// export function Profile() {
//     return <img src="https://i.imgur.com/QIrZWGIs.jpg" alt="Alan L. Hart"/>
//   };

// export const Pot=()=>{
//     return(
//         <div>
//          <img src="https://i.imgur.com/QIrZWGIs.jpg" alt="Alan L. Hart"/> 
//         </div>
//     )
// };


export default function Gallery() {
    return (
      <section>
        <div>
        <h1 className="text-xl text-red-300">Amazing scientists</h1>
        </div>
        <div className="flex gap-x-5 mt-5">
        <Profile />
        <Profile />
        <Profile />
        </div>
      </section>
    );
  }


  