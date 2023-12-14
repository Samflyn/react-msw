import './App.css';

const App = () => {
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    body: JSON.stringify({
      id: 1,
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));

  fetch('https://jsonplaceholder.typicode.com/posts/2', {
    method: 'PUT',
  })
    .then((response) => response.json())
    .then((json) => console.log(json));

  return (
    <div className="App">
      <header className="App-header">
        <p>Tests with msw handler</p>
      </header>
    </div>
  );
};

export default App;
