// import Avatar from "./Avatar";

// export default function Profile() {
//     // return() <img src="https://i.imgur.com/QIrZWGIs.jpg" alt="Alan L. Hart"/>
//     return(
//       <Avatar person={{name : "Lin Lanying", imageId:"1bX5QH6"}} size={100}/>
//     )
//   };

  export function getImageUrl(person : any,size = 's') {
    return (
      'https://i.imgur.com/' +
      person.imageId +
      size +
      '.jpg'
    );
  }











export default function Profile() {
  return (
    <div>
      <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi', 
          imageId: 'YfeOqp2'
        }}
      />
      <Avatar
        size={80}
        person={{
          name: 'Aklilu Lemma', 
          imageId: 'OKS67lh'
        }}
      />
      <Avatar
        size={50}
        person={{ 
          name: 'Lin Lanying',
          imageId: '1bX5QH6'
        }}
      />
    </div>
  );
}