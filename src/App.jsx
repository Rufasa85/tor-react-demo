import Name from "./components/Name"
import "./App.css"
import Navbar from "./components/Navbar"

function App() {
  const names = ["Joe","Shiva","Bahamut"]
  return (
    <div className="App">
      <Navbar topOffset="50px" bgColor="gray"/>
      <Navbar topOffset="500px" bgColor="yellow"/>
      <h1 className="Headerclass">Hello</h1>
      <h2 className="Apph2">Subhead</h2>
      <Name person="Thom" favColor="deepskyblue"/>
      <hr/>
      {names.map((item,index)=><Name key={index} person={item}/>)}
    </div>
  )
}

export default App
