import request from "./services/apiRequest";
import { useEffect, useState } from "react";

import Container from "./components/Container/Container";
import User from "./components/UserList/UserList";

export default function App() {
  const [characters, setCharacters] = useState();

  useEffect(() => {
    request.fetchCharacter().then(({ results }) => setCharacters(results));
  }, []);

  return (
    <Container>
      <User charactersList={characters} />
    </Container>
  );
}
