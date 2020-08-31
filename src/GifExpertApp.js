import React, { useState } from 'react';
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One PUnch']);

  // const handleAdd = () => {
  //   // setCategories( [...categories, 'HunterXHunter'] );
  //   setCategories( c => [...c, 'HunterXHunter'] );
  // }

  return(
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={ setCategories }/>
      <hr/>

      <ol>
        {
          categories.map( category => (
            <GifGrid
              key={ category }
              category={ category }
            />
          ))
        }
      </ol>
    </>
  );

}
