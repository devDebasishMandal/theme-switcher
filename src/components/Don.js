import React,{useContext, useState,useEffect} from 'react'
import styleContext from '../context/styleContext';


const Don = () => {

    const {theme,darkTheme,lightTheme}=useContext(styleContext);

     const [isDark,setIsDark]=useState(false);



 useEffect(()=>{
   let currentTheme= localStorage.getItem("isDark");
   setIsDark(currentTheme =="true"?true:false);
   //displaying the current theme whe the page starts loading
if(currentTheme ==="false"){
    lightTheme();
    
}else{
    darkTheme();
}
 },[])


 // setting the current theme 
    function handleTheme(){
      if (isDark === false) {
        darkTheme();
      } else {
        lightTheme();
      }
      // setting it value true/false because toggle between light and dark
      let currentTheme = !isDark;
      setIsDark(currentTheme);
      // whenever we relod the page it get back to default
      // so need to store setting in localstorage 
      localStorage.setItem("isDark", currentTheme);
    }


    
  return (
    <div>
      <div
        style={{
          color: theme.color,
          backgroundColor: theme.backgroundColor,
          border: theme.border,
        }}
      >
        <h1>Hello DON</h1>
        <h5>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
          consequuntur quam numquam sequi illum repellat cum, nulla, in aliquam
          voluptas cupiditate nisi ab dignissimos vitae quod commodi fugiat
          repellendus itaque voluptatibus hic iure obcaecati reiciendis.
        </h5>
        <ol>
          <li>This is 7 state Police</li>
          <li>This is 7 state Police</li>
          <li>This is 7 state Police</li>
          <li>This is 7 state Police</li>
        </ol>
      </div>
{/* 3---------- */}
<button onClick={handleTheme}>Switch theme</button>
{/* 2---------- */}
      {/* <button onClick={darkTheme}>Goin Dark</button>
      <button onClick={lightTheme}>Light after victory</button> */}


      {/* 1------------ */}
      {/* <button onClick={()=>{
        setTheme({
          color: "white",
          backgroundColor: "black",
          border: "2px solid red",
        })
      }}>Switch</button> */}
    </div>
  );
}

export default Don;