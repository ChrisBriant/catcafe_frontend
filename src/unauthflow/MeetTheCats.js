import {useContext, useEffect} from 'react';
import CatCard from '../components/CatCard';
import Spacer from '../components/Spacer';
import {Context} from '../context/ApiContext';

const MeetTheCats = () => {
  const {getCats,state:{cats}} = useContext(Context);

  useEffect( () => {
    getCats();
  },[]);


  console.log('CATS',cats);

  return (
    <>
      <h1>Meet the Cats</h1>
      <p>Here are the cats!</p>
      <p>We currently have {cats.length} cats at our cafe, you can see each one's
      profile below.</p>
        {
          cats.map((cat) =>(
            <div key = {cat.id}>
              <CatCard
                url = {cat.cat_picture}
                name = {cat.name}
                age = {cat.age}
                food = {cat.food}
                toy = {cat.toy}
                color = {cat.color}
                breed = {cat.breed}
              />
              <Spacer height="1rem" />
            </div>
          ))
        }

    </>
  );
}

export default MeetTheCats;
