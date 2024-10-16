import { Fragment } from "react/jsx-runtime";
import { MouseEvent, FormEvent, useState } from "react";


function ListGroup() {
  let cities = ["hanoi", "new york", "sao palos", "tokyo"];
  
  // let selectedIndex = 0;
  //selectedIndex is the state variable that holds the current value of the state.
  //setSelectedIndex is the function used to update the value of selectedIndex.
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  //event handler
  //event annotation is the MouseEvent thing, if declare outside like this u must specify the type
  
  // const handleClick = ((event: MouseEvent) => console.log(event))
  const handleClick = (index : number) => {
    setSelectedIndex(index);
  }

  const handleTestingBtn = ((event: MouseEvent) => console.log("testing button clicked!"))
  
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log("you clicked submit");
  }
  
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
        {cities.map((city, index) => (
          <li
            className= {selectedIndex === index ? "list-group-item active" : "list-group-item"}
            key={city}
            onClick={() => handleClick(index)} //see that there is no (), since u just pass the function
          >
            {city}
            <button onClick={handleTestingBtn}>testing</button>
          </li>
          
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default ListGroup;
