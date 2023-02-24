
      import './App.css';
      // import About from './components/About';
      import Navbar from './components/Navbar';
      import TextForm from './components/TextForm';
      import React, { useState } from 'react'; 
      import Alert from './components/Alert';
      

      function App() {
        const [mode,setMode]= useState('light');  //whether dark mode is enabled or not
        const[alert, setAlert] = useState(null);
        const toggleMode =()=>{
          if(mode === 'light'){
          setMode('dark'); 
          document.body.style.backgroundColor = 'grey';
        }else{
          setMode('light');
          document.body.style.backgroundColor = 'white';
        }
      }
        return (
          <>
            <Navbar title="TextUtils"  about="About Us"  mode={mode}  toggleMode={toggleMode} />  
            <Alert alert="This is alert"/>
            {/* container is a class of bootstrap  brings in between --- my is margin in y*/}
            <div className="container my-4"> 
            <TextForm heading="Enter the text to be analyzed" mode={mode}  />
            {/* <About/> */}
            </div>
          </>
        
        ); 
      } 

      export default App;
