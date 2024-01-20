import { useState, useEffect } from 'react';
import PizzaList from './PizzaList';
import React from 'react';

const term = "Pizza";

interface PizzaItem {
  id: number;
  name: string;
  description: string;
}

function Pizza() {
  const [data, setData] = useState<PizzaItem[]>([]);
  const [maxId, setMaxId] = useState<number>(0);

  useEffect(() => {
    fetchPizzaData();
  }, []);

  const fetchPizzaData = () => {
    // Simulate fetching data from API
    const pizzaData: PizzaItem[] = [
      { id: 1, name: 'Margherita', description: 'Tomato sauce, mozzarella, and basil' },
      { id: 2, name: 'Pepperoni', description: 'Tomato sauce, mozzarella, and pepperoni' },
      { id: 3, name: 'Hawaiian', description: 'Tomato sauce, mozzarella, ham, and pineapple' },
    ];
    setData(pizzaData);
    setMaxId(Math.max(...pizzaData.map(pizza => pizza.id)));
  };

  const handleCreate = (item: PizzaItem) => {
    // Simulate creating item on API
    const newItem: PizzaItem = { ...item, id: data.length + 1 };
    setData([...data, newItem]);
    setMaxId(maxId + 1);
  };

  const handleUpdate = (item: PizzaItem) => {
    // Simulate updating item on API
    const updatedData = data.map(pizza => (pizza.id === item.id ? item : pizza));
    setData(updatedData);
  };

  const handleDelete = (id: number) => {
    // Simulate deleting item on API
    const updatedData = data.filter(pizza => pizza.id !== id);
    setData(updatedData);
  };

  return (
    <div>
      <PizzaList
              name={term}
              data={data}
              onCreate={handleCreate}
              onUpdate={handleUpdate}
              onDelete={handleDelete} error={undefined}      />
    </div>
  );
}

export default Pizza;