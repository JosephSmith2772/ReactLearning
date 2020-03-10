import React, {useState, useEffect} from 'react';
import './App.css';

function Shop() {

  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const res = await fetch('https://fortniteapi.io/items/upcoming?lang=en', {
      headers: new Headers({
        'Authorization': '5aa407d3-bb8f0883-8c3852e2-72eb2ea2'
      })
    }
    );
   
    const data = await res.json();
    console.log(data.items);
    setItems(data.items);
  };

  let itemsElements = items.map(item =>(
    <h1 key={item.itemid}>{item.name}</h1>
  ))

  return (
    <div>
      {itemsElements}
    </div>
  );
}

export default Shop;