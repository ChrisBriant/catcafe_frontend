//https://react-icons.github.io/react-icons/icons?name=bs
import { useState } from 'react';
import { BsStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";



const Rating = props => {
  const starColor = {color:'#b88130'};
  const [rating,setRating] = useState(1);
  //const [halfStar,setHalfStar] = useState(false);
  const [stars,setStars] = useState([]);

  //If component is in presntation mode then the code
  // below is used to determine half star
  if(props.presentation) {
    let halfStar = false;
    //console.log('RATING',props.rating, props.rating % 1);
    if(props.rating % 1 === 0.5) {
      halfStar =true;
    }
    let presRating = Math.floor(props.rating);
    //Set an array with the star components
    let components = [];
    for(let i=0;i<5;i++) {
      if(i+1 >= presRating) {
        components.push(<BsStarFill style={starColor}/>);
      } else {
        if(halfStar) {
          components.push(<BsStarHalf style={starColor}/>);
          halfStar = false;
        } else {
          components.push(<BsStar style={starColor} />);
        }
      }
    }
    setStars(components);
  }

  //console.log('The components', stars);

  return (
    props.presentation
    ?
      <div className="rating-container">
        <div>
          {rating}
          {
            rating >= 1
            ? <BsStarFill style={starColor} onClick={() => setRating(1)} />
            : <BsStar style={starColor} onClick={() => setRating(1)} />
          }
          </div>
          <div>
          {
            rating >= 2
            ? <BsStarFill style={starColor} onClick={() => setRating(2)} />
            : <BsStar style={starColor} onClick={() => setRating(2)} />
          }
          </div>
          <div>
          {
            rating >= 3
            ? <BsStarFill style={starColor} onClick={() => setRating(3)} />
            : <BsStar style={starColor} onClick={() => setRating(3)} />
          }
          </div>
          <div>
          {
            rating >= 4
            ? <BsStarFill style={starColor} onClick={() => setRating(4)} />
            : <BsStar style={starColor} onClick={() => setRating(4)} />
          }
          </div>
          <div>
          {
            rating >= 5
            ? <BsStarFill style={starColor} onClick={() => setRating(5)} />
            : <BsStar style={starColor} onClick={() => setRating(5)} />
          }
        </div>
      </div>
    :
      <div className="rating-container">
        <div>
        {
          rating >= 1
          ? <BsStarFill style={starColor} onClick={() => setRating(1)} />
          : <BsStar style={starColor} onClick={() => setRating(1)} />
        }
        </div>
        <div>
        {
          rating >= 2
          ? <BsStarFill style={starColor} onClick={() => setRating(2)} />
          : <BsStar style={starColor} onClick={() => setRating(2)} />
        }
        </div>
        <div>
        {
          rating >= 3
          ? <BsStarFill style={starColor} onClick={() => setRating(3)} />
          : <BsStar style={starColor} onClick={() => setRating(3)} />
        }
        </div>
        <div>
        {
          rating >= 4
          ? <BsStarFill style={starColor} onClick={() => setRating(4)} />
          : <BsStar style={starColor} onClick={() => setRating(4)} />
        }
        </div>
        <div>
        {
          rating >= 5
          ? <BsStarFill style={starColor} onClick={() => setRating(5)} />
          : <BsStar style={starColor} onClick={() => setRating(5)} />
        }
        </div>
      </div>
  )
}


export default Rating;