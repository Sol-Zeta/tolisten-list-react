import './App.css';
import { useState } from 'react'
import { v4 as setId } from 'uuid';
import { capitalize } from './utils/utils'
import Input from './components/Input'
import Button from './components/Button'
import SongItem from './components/SongItem'

const TOKEN = "kmgSkAORXltiAXgzvHVSIWzlarvqUlVAITpynFFH"
const API_BASE_URL = "https://api.discogs.com"

function App() {

  const [value, setValue] = useState('')
  const [btnActive, setBtnActive] = useState(false)
  const [songsList, setSongsList] = useState([])
  const [image, setImage] = useState(false)

  const handleValue = (e) => { 
    setValue(capitalize(e.target.value))
    e.target.value ? handleIsActive(true) : handleIsActive(false)
  }
  const handleIsActive = (inputContent) => inputContent ? setBtnActive(true) : setBtnActive(false)

  const handleClickAdd = async() => {
    const imageUrl = await getImage(value)
    setSongsList([...songsList, {title: value, id: setId(), pic: imageUrl}])
    setValue('')
  }

  const handleClickErase = () => setValue('')

  const getImage = (song) =>{
    return fetch(`${API_BASE_URL}/database/search?q=${song}&token=${TOKEN}`)
            .then(res => res.json())
            .then(res => {
              console.log(res.results[0].cover_image)
              console.log(res)
              return res.results[0].cover_image
              })
}

  return (
    <div className="App">
      <div className="row">
        <Input content={value} getValue={(e) => handleValue(e)} />
      </div>
      <div className="row">
        <Button text="ADD" action={handleClickAdd} active={btnActive}/>
      </div>
      <div className="row">
        {value ? <Button text="ERASE" action={handleClickErase} active={btnActive}/> : null}
      </div>
      <div className="col">
        {songsList.map(({title, id, pic},i)=> <SongItem 
                                          key={i} 
                                          title={title} 
                                          imageUrl={pic}
                                          deleteItem={()=>{}}/>)}
      </div>
    </div>
  );
}

export default App;
