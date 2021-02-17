import request from "./services/apiRequest";
import { useEffect, useState } from "react";
import shortid from "shortid";

import Container from "./components/Container/Container";
import User from "./components/UserList/UserList";

export default function App() {
  const [characters, setCharacters] = useState();

  useEffect(() => {
    request.fetchCharacter().then(({ results }) => {
      results.map((element) => (element.id = shortid.generate()));

      setCharacters(results);
      console.log(results);
    });
  }, []);

  return (
    <Container>
      <User charactersList={characters} />
    </Container>
  );
}
