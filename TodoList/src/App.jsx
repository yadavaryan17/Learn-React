import './App.css'
import Title from './container/title';
import Add_todo from './container/Add_todo';
import Del1 from './container/Del1';
import Del2 from './container/Del2';

function App() {

  return <center>
    <Title></Title>
    
    <div className="container">

    <div class="container text-center text-container">

      <Add_todo/>
      <Del1/>
      <Del2/>

</div>
    </div>
  </center>
}

export default App;
