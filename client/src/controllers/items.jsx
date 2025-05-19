const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';

const getItems = async () => {
  const response = await fetch(`${apiUrl}/api/items`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data;
};

const createItem = async (item) => {
  const response = await fetch(`${apiUrl}/api/items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(item)
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data;
};

const updateItem = async (item) => {
  const response = await fetch(`${apiUrl}/api/items/${item.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(item)
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data;
};

const deleteItem = async (id) => {
  const response = await fetch(`${apiUrl}/api/items/${id}`, {
    method: 'DELETE'
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return true;
};

export { getItems, createItem, updateItem, deleteItem };
