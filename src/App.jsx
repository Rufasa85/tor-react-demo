import Name from "./components/Name"
import "./App.css"

function App() {
  const names = ["Joe","Shiva","Bahamut"]
  return (
    <div className="App">
      <h1 className="Headerclass">Hello</h1>
      <h2 className="Apph2">Subhead</h2>
      <Name person="Thom" favColor="deepskyblue"/>
      <hr/>
      <Name person="Logan"/>
      <Name person="Manjot"/>
      <Name person="Rahul"/>
      <Name person ="Joe" favColor = "salmon"/>
      <img src="http://placekitten.com/g/200/300"/>
      {[<p>hello</p>,<p>world</p>]}
    </div>
  )
}

export default App
