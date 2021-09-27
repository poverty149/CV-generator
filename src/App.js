
import './App.css';

import AddWork from './Components/AddWork';

import AddEducation from './Components/AddEducation';
import Basic from './Components/General_info';

import Footer from './Components/Footer';
import Header from './Components/Header';
function App() {
  return (
    <div className="App">
      <Header/>
     {/* Basic details */}
     {/* <h1 id="title" className="cv">Title</h1> */}
      <div id="main" className="Main">
         <Basic/>


         {/* Education */}
         <h1 id="title_edu" className="cv">Education</h1>
         <AddEducation/>
         {/* Work Experience */}
         <h1 id="title_work" className="cv">Work</h1>
         <AddWork/>
      </div>
      <div className="container">
        <Footer/>
       
      </div>

     

    </div>
  );
}

export default App;
