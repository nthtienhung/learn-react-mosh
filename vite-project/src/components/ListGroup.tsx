import { Fragment } from "react/jsx-runtime";
import { MouseEvent } from "react";

function ListGroup() {
  let cities = ["hanoi", "new york", "sao palos"];
  //event handler
  //event annotation is the MouseEvent thing, if declare outside like this u must specify the type
  const handleClick = ((event: MouseEvent) => console.log(event))
  // cities = []
  // let message = cities.length === 0 ? <p>no item found</p> : null
  const getMessage = () => {
    return cities.length === 0 ? <p>no item found</p> : null;
  };

  return (
    //wrap in div cuz component can only have 1 element
    //empty is the same as using Fragment tag
    <>
      <h1>List Group</h1>
      {getMessage()}
      <ul className="list-group">
        {cities.map((city) => (
          <li
            className="list-group-item"
            key={city}
            onClick={handleClick} //see that there is no (), since u just pass the function
          >
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
