import { Card } from '@material-ui/core'
import { Check, CheckCircleOutlineRounded } from '@material-ui/icons'
import React from 'react'

export default function IntroductionComponent(props) {
    return (
        <div>
            <Card style={{padding:"10px", width:"40vw"  }}>
               <div className="mainIntro">
                   <div className="header" style={{display:"flex",   justifyContent:"space-between"}}>
                       <h1 style={{marginLeft:"10px"}}>Introduction</h1>
                       <h1 style={{marginLeft:"auto"}}>7/10</h1> 
                       <br/>
                   </div>
                   <hr/>
                   <div className="contentContainer" style={{display:"flex", justifyContent:"space-between"  ,padding:"10%"}}>
                       {/* 1st column */}
                       <div style={{display:"flex", justifyContent:"space-around", flexDirection:"column"}}>
                           <div style={{display:"flex", alignItems:"center", marginTop:"10px",  padding:"5px"}}>
                               <CheckCircleOutlineRounded style={{marginRight:"10px"}}/>
                               <h5>Verify your email address.</h5>
                           </div>
                     {/* separator */}
                           <div style={{display:"flex", alignItems:"center", marginTop:"10px", padding:"5px"}}>
                           <CheckCircleOutlineRounded style={{marginRight:"10px"}}/>
                               <h5>Add a phone Number.</h5>
                           </div>

                           <div style={{display:"flex", alignItems:"center", marginTop:"10px",  padding:"5px"}}>
                               <CheckCircleOutlineRounded style={{marginRight:"10px"}}/>
                               <h5>Generate a crypto wallet.</h5>
                           </div>
                     {/* separator */}
                           <div style={{display:"flex", alignItems:"center", marginTop:"10px", padding:"5px"}}>
                           <CheckCircleOutlineRounded style={{marginRight:"10px"}}/>
                               <h5>Make your first deposit.</h5>
                           </div>

                           <div style={{display:"flex", alignItems:"center", marginTop:"10px",  padding:"5px"}}>
                               <CheckCircleOutlineRounded style={{marginRight:"10px"}}/>
                               <h5>Post your first offer.</h5>
                           </div>
                    
                           
                       </div>
                       {/* 2nd col */}

                       <div style={{display:"flex", justifyContent:"space-around", flexDirection:"column"}}>
                           <div style={{display:"flex", alignItems:"center", marginTop:"10px",  padding:"5px"}}>
                               <CheckCircleOutlineRounded style={{marginRight:"10px"}}/>
                               <h5>Start your first transaction.</h5>
                           </div>
                     {/* separator */}
                           <div style={{display:"flex", alignItems:"center", marginTop:"10px", padding:"5px"}}>
                           <CheckCircleOutlineRounded style={{marginRight:"10px"}}/>
                               <h5>Make your first Withdraw.</h5>
                           </div>
                           <div style={{display:"flex", alignItems:"center", marginTop:"10px",  padding:"5px"}}>
                               <CheckCircleOutlineRounded style={{marginRight:"10px"}}/>
                               <h5>Exchange over $3,000.</h5>
                           </div>
                     {/* separator */}
                           <div style={{display:"flex", alignItems:"center", marginTop:"10px", padding:"5px"}}>
                           <CheckCircleOutlineRounded style={{marginRight:"10px"}}/>
                               <h5>Exchange over $1,000.</h5>
                           </div>
                           <div style={{display:"flex", alignItems:"center", marginTop:"10px",  padding:"5px"}}>
                               <CheckCircleOutlineRounded style={{marginRight:"10px"}}/>
                               <h5>Exchange over $5,000.</h5>
                           </div>
        
                           
                       </div>
                       
                           
                       </div>
                       
                </div>
            </Card>
        </div>
    )
}
