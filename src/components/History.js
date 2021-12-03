const History = ({ history, removeFromHistory }) => {
  return (
    <div>{history.length > 0 ? (
      history.map(item => (
        <div key={item[0]} className="place-container"><ul>{item[1].map(i => (
          <li key={i.curMenu}>
            <div>{i.curPlaceName}</div>
            <a href={i.curMenu}>Menu</a>
            <div>{i.curAdress}</div>
            <div>Votes: {i.votes}</div>
          </li>
        ))}
        </ul>
          <button
            onClick={() => removeFromHistory(item[0])}
          >Remove</button>
        </div>
      ))
    ) : (<div>History is empty</div>)}</div>
  );
}

export default History;