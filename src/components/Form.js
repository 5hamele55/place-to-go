import { useState } from "react";

const Form = ({ addPlace }) => {

  const [curPlaceName, setCurPlaceName] = useState("")
  const [curMenu, setCurMenu] = useState("")
  const [curAdress, setCurAdress] = useState("")

  const pushPlace = (e) => {
    e.preventDefault()
    addPlace({
      curPlaceName,
      curMenu,
      curAdress,
      voted: false,
      votes: 0
    })
    setCurPlaceName("")
    setCurMenu("")
    setCurAdress("")
  }
  return (
    <form onSubmit={(e) => pushPlace(e)}>
      <label htmlFor="name">Place name:</label>
      <input
        type="text"
        id="name"
        value={curPlaceName}
        onInput={e => setCurPlaceName(e.target.value)}
        required
      ></input>
      <label htmlFor="menu">Menu link:</label>
      <input
        type="text"
        id="menu"
        value={curMenu}
        onInput={e => setCurMenu(e.target.value)}
        required
      ></input>
      <label htmlFor="adress">Adress:</label>
      <input
        type="text"
        id="adress"
        value={curAdress}
        onInput={e => setCurAdress(e.target.value)}
        required
      ></input>
      <input type="submit" value="Add"></input>
    </form>
  );
}

export default Form;