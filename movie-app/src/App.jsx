import React from "react";
import { MoviesList } from "./components/MoviesList/MoviesList";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }
  .App {
    text-align: center;
  }
  .App__header {
  min-height: 10vh;
  background-color: lightblue;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  } 
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <header className="App__header">
          <h1>MovieApp</h1>
        </header>
        <section>
          <MoviesList />
        </section>
      </div>
    </>
  );
}

export default App;
