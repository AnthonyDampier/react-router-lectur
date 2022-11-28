import React from 'react';
import { useHistory } from 'react-router-dom';

let animals = [
  "https://cdn.pixabay.com/photo/2015/04/10/01/41/fox-715588__340.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/e/ec/Animal-that-start-with-a.jpg",
  "https://www.seismosoc.org/wp-content/uploads/2018/04/frog-edit.jpg",
  "https://cdn.stocksnap.io/img-thumbs/960w/otter-animal_TJDCHQADKM.jpg",
  "https://cdn.pixabay.com/photo/2015/09/22/14/34/african-lion-951778__340.jpg"
]

function Animals() {

  const history = useHistory();

  const goToPlantsPage = () => {
    console.log('Clicked on button');
    // axios.put() ..... .then
    //got to the animals page
    history.push('/plants');
  }

  return (
    <div>
      <h1>ANIMALS</h1>
      <button onClick={goToPlantsPage}>Plants are better</button>

      <div>
      {animals.map((animal, i) => 
        <img 
          key={i}
          src={animal}
        />
      )}
      </div>
    </div>
  );
}

export default Animals;
