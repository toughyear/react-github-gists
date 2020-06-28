import React, { useState, useEffect } from "react";
import ReactEmbedGist from "react-embed-gist";

export default function ReactGithubGists(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  let { user, gistID } = props;

  useEffect(() => {
    console.log(user);
    fetch("https://api.github.com/users/toughyear/gists")
      .then((res) => res.json())
      .then(
        (result) => {
          setItems(result);
          setIsLoaded(true);
          console.log(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    if (gistID) {
      return <ReactEmbedGist gist={user + "/" + gistID} />;
    }

    return (
      <ul>
        {items.map((item) => (
          <ReactEmbedGist key={item.id} gist={user + "/" + item.id} />
        ))}
      </ul>
    );
  }
}
