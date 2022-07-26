import './App.css';
import InputSection
 from './components/InputSection';
import TableEntry from './components/TableEntry';
function App() {
  return (
    <div className='flex flex-col  poster-image bg-slate-100 w-full h-screen'>
      <InputSection/>
      <TableEntry/>
    </div>
  );
}

export default App;
