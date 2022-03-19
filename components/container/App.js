const App = ({ children }) => {
  return (
    <>
      <main className="app">
        <article className="app__container">{children}</article>
      </main>
    </>
  );
};

export default App;
