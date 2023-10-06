import React from 'react'
import  Items from "@/components/Items"
export default function PackList() {
  return (
    <section>
        <ul>
            <Items
            ispacked={true}
            name='space suit' />
        
        <Items
            ispacked={true}
            name='Bike with Helmet' />
     <Items
            ispacked={false}
            name='No reward' />
        

        </ul>
    </section>
  )
};
