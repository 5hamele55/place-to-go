const Current = ({ currentPlace, changeVote, delPlace, endVoting }) => {
  return (
    <>
      {currentPlace.length > 0 ? <div className="place-container"><ul>
        {currentPlace.map(place => (
          <li key={place.curMenu}>
            <div>{place.curPlaceName}</div>
            <a href={place.curMenu}>Menu</a>
            <div>{place.curAdress}</div>
            <div
              style={{
                color: place.voted ? 'red' : 'grey',
                cursor: "pointer",
                fontSize: "20px"
              }}
              onClick={() => changeVote(place.curMenu)}
            >&hearts;</div>
            <div>Votes: {place.votes}</div>
            <button
              className="del-btn"
              onClick={() => delPlace(place.curMenu)}
            >Remove</button>
          </li>
        ))}
      </ul>
        <button onClick={endVoting}>End voting</button>
      </div> :
        <div>No places to vote</div>}
    </>
  );
}

export default Current;