
import './App.css'
import Counter from './counter';
import Team from './team';
import Users from './users';


function App() {

  function  handleClick(){
    alert("clicke here active")
  }

  function handleClick2(num){
    alert(num + 3);
  }

  return (
    <>
      <h3>React core concepts part-2</h3>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>

      <button onClick={handleClick}>Click Here</button>
      <button onClick={() => handleClick2(5)}>Click Here 2</button>
      
    </>
  )
}

export default App
