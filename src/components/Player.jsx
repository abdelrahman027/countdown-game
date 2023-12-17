import { useRef, useState } from "react";

export default function Player() {

  const [playerName, setPlayerName] = useState()
  const inputName = useRef()
  const handleClick = () => {
    setPlayerName(inputName.current.value)
    inputName.current.value = ''
  }
  console.log(inputName);
  return (
    <section id="player">
      <h2>Welcome {playerName ?? 'Unknown Entity'}</h2>
      <p>
        <input ref={inputName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
