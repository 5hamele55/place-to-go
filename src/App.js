import { useState } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import Form from "./components/Form";
import Current from "./components/Current";
import History from "./components/History";

function App() {
  const [history, setHistory] = useState([
    [
      1638472244942,
      [
        {
          "curPlaceName": "wa",
          "curMenu": "https://wa.lviv.ua/menu",
          "curAdress": "Князя Романа 7",
          "voted": true,
          "votes": 15
        },
        {
          "curPlaceName": "Голодний Микола",
          "curMenu": "https://golodnyimykola.com.ua/menu",
          "curAdress": "Стрийська 352",
          "voted": false,
          "votes": 10
        }
      ]
    ],
    [
      1638472437257,
      [
        {
          "curPlaceName": "Зелений Змій",
          "curMenu": "https://zelenyjzmij.com.ua/#menu",
          "curAdress": "Вірменська 3",
          "voted": true,
          "votes": 21
        },
        {
          "curPlaceName": "Рафаель",
          "curMenu": "http://rafael.com.ua/menu/",
          "curAdress": "Гонти 1 А",
          "voted": false,
          "votes": 8
        }
      ]
    ]
  ])
  const [currentPlace, setCurrentPlace] = useState([])
  const updateCurrentPlace = obj => {
    const place = currentPlace
    place.push(obj)
    setCurrentPlace(place)
  }
  const changeVote = id => {
    const arr = currentPlace.map(place => {
      if (place.curMenu === id || place.voted) {
        place.voted = !place.voted
        place.voted ? place.votes++ : place.votes--
      }
      return place
    })
    setCurrentPlace(arr)
  }
  const delPlace = id => {
    const arr = currentPlace.filter(place => place.curMenu !== id)
    setCurrentPlace(arr)
  }
  const endVoting = () => {
    const oldHistory = history
    oldHistory.push([Date.now(), [...currentPlace]])
    setHistory(oldHistory)
    setCurrentPlace([])
  }
  const removeFromHistory = id => {
    const arr = history.filter(item => item[0] !== id)
    setHistory(arr)
  }
  return (
    <div className="app">
      <BrowserRouter>
        <nav>
          <NavLink to="/">Voting</NavLink>
          <NavLink to="form">Create voting</NavLink>
          <NavLink to="history">History</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Current currentPlace={currentPlace} changeVote={changeVote} delPlace={delPlace} endVoting={endVoting} />} />
          <Route path="form" element={<Form addPlace={updateCurrentPlace} />} />
          <Route path="history" element={<History history={history} removeFromHistory={removeFromHistory} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
