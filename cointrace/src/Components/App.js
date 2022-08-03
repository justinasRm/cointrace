import { useEffect, useState } from 'react';
import SignUpPopup from './SignUpPopup';

function App() {
  const [signup, loadSignup] = useState(null);

  return (
    <div className="App">
      <div className='first-load-screen'>
        <div className='text'>
          <span className='first-txt'>Begin by signing up</span>
          <span className='second-txt'>Your life can be changed forever by just a click of a button.</span>
          <button className='sign-up' onClick={()=>{loadSignup(true)}}>Sign up</button>
        </div>
        <img src={require('../Images/btc_phone.png')} height={'400px'}></img>
      </div>
      <SignUpPopup props={signup} />
    </div>
  );
}

export default App;
