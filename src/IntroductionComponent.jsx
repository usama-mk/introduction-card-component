import { Card } from '@material-ui/core'
import { Check, CheckCircleOutlineRounded } from '@material-ui/icons'
import React from 'react'

export default function IntroductionComponent(props) {
    return (
        <div>
            <Card style={{padding:"10px",  }}>
               <div className="mainIntro">
                   <div className="header" style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                       <h1>Introduction</h1>
                       <div>Score 7/10</div><br/>
                   </div>
                   <hr/>
                   <div className="contentContainer" style={{padding:"10%"}}>
                       {/* 1st row */}
                       <div style={{display:"flex", justifyContent:"space-between"}}>
                           <div style={{display:"flex", alignItems:"center", marginTop:"10px",  padding:"10px"}}>
                               <CheckCircleOutlineRounded style={{marginRight:"10px"}}/>
                               <h5>Verify your email address</h5>
                           </div>
                     {/* separator */}
                           <div style={{display:"flex", alignItems:"center", marginTop:"10px", padding:"10px"}}>
                           <CheckCircleOutlineRounded style={{marginRight:"10px"}}/>
                               <h5>Verify your email address</h5>
                           </div>
                           
                       </div>
                       {/* 2nd row */}

                       <div style={{display:"flex", justifyContent:"space-between"}}>
                           <div style={{display:"flex", alignItems:"center",  marginTop:"3px", padding:"10px"}}>
                               <CheckCircleOutlineRounded style={{marginRight:"10px"}}/>
                               <h5>Verify your email address</h5>
                           </div>
                     {/* separator */}
                           <div style={{display:"flex", alignItems:"center", marginTop:"3px", padding:"10px"}}>
                           <CheckCircleOutlineRounded style={{marginRight:"10px"}}/>
                               <h5>Verify your email address</h5>
                           </div>
                           
                       </div>
                       {/*  
                       */}
                           {/* 1st row */}
                           <div style={{display:"flex", justifyContent:"space-between"}}>
                           <div style={{display:"flex", alignItems:"center", marginTop:"10px",  padding:"10px"}}>
                               <CheckCircleOutlineRounded style={{marginRight:"10px"}}/>
                               <h5>Verify your email address</h5>
                           </div>
                     {/* separator */}
                           <div style={{display:"flex", alignItems:"center", marginTop:"10px", padding:"10px"}}>
                           <CheckCircleOutlineRounded style={{marginRight:"10px"}}/>
                               <h5>Verify your email address</h5>
                           </div>
                           
                       </div>
                       {/* 2nd row */}

                       <div style={{display:"flex", justifyContent:"space-between"}}>
                           <div style={{display:"flex", alignItems:"center",  marginTop:"3px", padding:"10px"}}>
                               <CheckCircleOutlineRounded style={{marginRight:"10px"}}/>
                               <h5>Verify your email address</h5>
                           </div>
                     {/* separator */}
                           <div style={{display:"flex", alignItems:"center", marginTop:"3px", padding:"10px"}}>
                           <CheckCircleOutlineRounded style={{marginRight:"10px"}}/>
                               <h5>Verify your email address</h5>
                           </div>
                           
                       </div>
                       {/* 
                        */}
                            {/* 1st row */}
                       <div style={{display:"flex", justifyContent:"space-between"}}>
                           <div style={{display:"flex", alignItems:"center", marginTop:"10px",  padding:"10px"}}>
                               <CheckCircleOutlineRounded style={{marginRight:"10px"}}/>
                               <h5>Verify your email address</h5>
                           </div>
                     {/* separator */}
                           <div style={{display:"flex", alignItems:"center", marginTop:"10px", padding:"10px"}}>
                           <CheckCircleOutlineRounded style={{marginRight:"10px"}}/>
                               <h5>Verify your email address</h5>
                           </div>
                           
                       </div>
                       
                   </div>
               </div>
            </Card>
        </div>
    )
}
