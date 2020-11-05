import { Card } from '@material-ui/core'
import { CancelOutlined, Check, CheckCircleOutlineRounded } from '@material-ui/icons'
import React, { useState } from 'react'

export default function IntroductionComponent(props) {
    const [verifyEmail, setVerifyEmail]= useState(props.retrievedValues.verifyEmail);
    const [firstTransaction, setFirstTransaction]= useState(props.retrievedValues.firstTransaction);
    const [phoneNumber, setPhoneNumber]= useState(props.retrievedValues.phoneNumber);
    const [firstWithdraw, setFirstWithdraw]= useState(props.retrievedValues.firstWithdraw);
    const [generateWallet, setGenerateWallet]= useState(props.retrievedValues.generateWallet);
    const [exchange300, setExchange300]= useState(props.retrievedValues.exchange300);
    const [firstDeposit, setFirstDeposit]= useState(props.retrievedValues.firstDeposit);
    const [exchange1000, setExchange1000]= useState(props.retrievedValues.exchange1000);
    const [firstOffer, setFirstOffer]= useState(props.retrievedValues.firstOffer);
    const [exchange5000, setExchange5000]= useState(props.retrievedValues.exchange5000);
    const [score, setScore]= useState(props.retrievedValues.score);
    return (
        <div>
            <Card style={{padding:"10px", width:"40vw",  margin:"40px"  }}>
               <div className="mainIntro">
                   <div className="header" style={{display:"flex",   justifyContent:"space-between"}}>
                       <h1 style={{marginLeft:"10px", color:"grey"}}>Introduction</h1>
                       <h1 style={{marginLeft:"auto", color:"grey"}}>{`${score}/10`}</h1> 
                       <br/>
                   </div>
                   <hr/>
                   <div className="contentContainer" style={{display:"flex", justifyContent:"space-between"  ,paddingLeft:"10%", paddingRight:"10%"}}>
                       {/* 1st column */}
                       <div style={{display:"flex", justifyContent:"space-around", flexDirection:"column"}}>
                           <div style={{display:"flex", alignItems:"center", marginTop:"10px",  }}>
                             {verifyEmail?  <CheckCircleOutlineRounded style={{marginRight:"10px", color:"lightpink"}}/>: <CancelOutlined  style={{marginRight:"10px", color:"grey"}}/>}
                               <h6>Verify your email address.</h6>
                           </div>
                     {/* separator */}
                           <div style={{display:"flex", alignItems:"center",  }}>
                           {phoneNumber?  <CheckCircleOutlineRounded style={{marginRight:"10px", color:"lightpink"}}/>: <CancelOutlined  style={{marginRight:"10px", color:"grey"}}/>}
                               <h6>Add a phone Number.</h6>
                           </div>

                           <div style={{display:"flex", alignItems:"center", }}>
                           {generateWallet?  <CheckCircleOutlineRounded style={{marginRight:"10px", color:"lightpink"}}/>: <CancelOutlined  style={{marginRight:"10px", color:"grey"}}/>}
                               <h6>Generate a crypto wallet.</h6>
                           </div>
                     {/* separator */}
                           <div style={{display:"flex", alignItems:"center",  }}>
                           {firstDeposit?  <CheckCircleOutlineRounded style={{marginRight:"10px", color:"lightpink"}}/>: <CancelOutlined  style={{marginRight:"10px", color:"grey"}}/>}
                               <h6>Make your first deposit.</h6>
                           </div>

                           <div style={{display:"flex", alignItems:"center",   }}>
                           {firstOffer?  <CheckCircleOutlineRounded style={{marginRight:"10px", color:"lightpink"}}/>: <CancelOutlined  style={{marginRight:"10px", color:"grey"}}/>}
                               <h6>Post your first offer.</h6>
                           </div>
                    
                           
                       </div>
                       {/* 2nd col */}

                       <div style={{display:"flex", justifyContent:"space-around", flexDirection:"column"}}>
                           <div style={{display:"flex", alignItems:"center", marginTop:"10px",  }}>
                           {firstTransaction?  <CheckCircleOutlineRounded style={{marginRight:"10px", color:"lightpink"}}/>: <CancelOutlined  style={{marginRight:"10px", color:"grey"}}/>}
                               <h6>Start your first transaction.</h6>
                           </div>
                     {/* separator */}
                           <div style={{display:"flex", alignItems:"center",  }}>
                           {firstWithdraw?  <CheckCircleOutlineRounded style={{marginRight:"10px", color:"lightpink"}}/>: <CancelOutlined  style={{marginRight:"10px", color:"grey"}}/>}
                               <h6>Make your first Withdraw.</h6>
                           </div>
                           <div style={{display:"flex", alignItems:"center",  }}>
                           {exchange300?  <CheckCircleOutlineRounded style={{marginRight:"10px", color:"lightpink"}}/>: <CancelOutlined  style={{marginRight:"10px", color:"grey"}}/>}
                               <h6>Exchange over $300.</h6>
                           </div>
                     {/* separator */}
                           <div style={{display:"flex", alignItems:"center",  }}>
                           {exchange1000?  <CheckCircleOutlineRounded style={{marginRight:"10px", color:"lightpink"}}/>: <CancelOutlined  style={{marginRight:"10px", color:"grey"}}/>}
                               <h6>Exchange over $1,000.</h6>
                           </div>
                           <div style={{display:"flex", alignItems:"center",  }}>
                           {exchange5000?  <CheckCircleOutlineRounded style={{marginRight:"10px", color:"lightpink"}}/>: <CancelOutlined  style={{marginRight:"10px", color:"grey"}}/>}
                               <h6>Exchange over $5,000.</h6>
                           </div>
        
                           
                       </div>
                       
                           
                       </div>
                       
                </div>
            </Card>
        </div>
    )
}
