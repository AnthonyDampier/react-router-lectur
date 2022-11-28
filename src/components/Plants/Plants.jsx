import React from 'react';
import { useHistory } from 'react-router-dom';

let plants = [
  "https://gardeningsolutions.ifas.ufl.edu/mastergardener/outreach/plant_id/images/flowers/bird_paradise_flower.jpg",
  "https://morningchores.com/wp-content/uploads/2018/12/Velvet-palm-600x400.jpg",
  "https://gardeningsolutions.ifas.ufl.edu/mastergardener/outreach/plant_id/images/flowers/birds_nest_fern.jpg",
  "https://live.staticflickr.com/7523/27521082745_fc94a05059_b.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/7/71/Kalanchoe_tomentosa_Panda_Plant_%28fabooj%29.jpg"
]



function Plants() {
  const history = useHistory();

  const goToAnimalsPage = () => {
    console.log('Clicked on button');
    // axios.put() ..... .then
    //got to the animals page
    history.push('/animals');
  }
  
  return (
    <div>
      <h1>PLANTS</h1>
      <button onClick={goToAnimalsPage}>Animals are better</button>
      <div>
      {plants.map((plant, i) => 
        <img 
          key={i}
          src={plant}
        />
      )}
      </div>
    </div>
  );
}

export default Plants;
