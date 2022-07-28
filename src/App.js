import { useEffect, useState } from 'react';
import './App.css';
import InputSection
 from './components/InputSection';
import TableEntry from './components/TableEntry';
import axios from 'axios';

function App() {

  const[inputText,setInputText] = useState('');
  const[entries,setEntries] = useState([]);

  useEffect(() => {

    axios.get('http://localhost:8000/getAllData')
    .then(response => {
      setEntries(response.data);
    })
    .catch(error => {
      console.log(error);
    });

  },[])

  const handleClick = () =>{

    axios.post('http://localhost:8000/shortURL', {
      "longUrl" : inputText,
    })
    .then(response => {
      // console.log(response.data.logURL);
      setInputText('');
      setEntries(prevEntries => [...prevEntries,response.data])
    })
    .catch(error => {
      console.log(error);
    });

  }
  const handleDel = (smallUrl) =>{

    axios.post('http://localhost:8000/deleteURL', {
      smallUrl,
    })
    .then(response => {
      // console.log(response.data.logURL);
      setInputText('');
      setEntries(prevEntries => {
        return prevEntries.filter(entry =>{
          return entry.smallURL !== smallUrl;
        })

      })
    })
    .catch(error => {
      console.log(error);
    });

  }

  return (
    <div className='flex flex-col  poster-image bg-slate-100 w-full h-screen'>
      <InputSection handleClick={handleClick} setInputText={setInputText} inputText={inputText} />
      <TableEntry entries={entries} handleDel={handleDel}/>
    </div>
  );
}

export default App;
