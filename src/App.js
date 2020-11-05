 
import './App.css';
import IntroductionComponent from './IntroductionComponent';

function App() {
  const retrievedValues={
    verifyEmail:true,
    firstTransaction: true, 
    phoneNumber:false,
    firstWithdraw:false,
    generateWallet:true,
    exchange300:true,
    firstDeposit:false,
    exchange1000:true,
    firstOffer:true,
    exchange5000:true,
    score:7
  }
  return (
    <div className="App">
      {/* alignItems:"center", */}
      <div style={{display:"flex", justifyContent:"center", margin:"10px"}}>

       <IntroductionComponent retrievedValues={retrievedValues} />

      </div>
    </div>
  );
}

export default App;
