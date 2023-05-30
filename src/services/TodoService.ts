export default {
  fetchTodos: () => {
    return fetch('https://jsonplaceholder.typicode.com/todos').then(
      (response) => response.json()
    );
  },
};
