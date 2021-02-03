import React from 'react';
import './Firstimage.css'
import Banner from "../Images/Banner.jpg";
import { Grid } from '@material-ui/core';
import Red from "../Images/red.png";
import Blue from "../Images/Blue.png";
import Green from "../Images/Green.png";
import Violet from "../Images/Violet.png";
import Infographic from "../Images/Infographic.jpg";
import circle_1 from "../Images/Circle_1.png";
import circle_2 from "../Images/Circle_2.png";
import circle_3 from "../Images/Circle_3.png";
import circle_4 from "../Images/Circle_4.png";
import circle_5 from "../Images/Circle_5.png";
import circle_6 from "../Images/Circle_6.png";
import circle_7 from "../Images/Circle_7.png";
import Arrow from "../Images/arrow.png";
import Prevois from "../Images/prevarrow.png";
import UIpath from "../Images/UI Path.png";
import path2 from "../Images/images (3).png";
import Paper from '@material-ui/core/Paper';


class FirstImage extends React.Component{
    render(){
        return(
            <div style={{width:'100%'}}>
 {/* first image */}
              <div style={{backgroundImage: `url(${Banner})`, width:'100%',height:"480px"}}>
              <div style={{textAlign:'center'}}>
                  <p className="sss">BUSINESS PROCESS AUTOMATION</p>
                  <p  className="kk">Harness the power of automation to improve your bottom line and librate tour highly skilled employees from routine, repetitive tasks </p>
                  <div style={{display:"flex", justifyContent:"center"}}>
                  <p className="border_align">TELL US ABOUT UR PROJECT</p>

                  </div>
                 
              </div>
              </div>
              <div className="container mded">
                  <p style={{fontSize:'18px'}}>Our automation solutions provide value to business by helping them minimize human errors, achieve greater accuracyand time and savings
                      in the workflow processes while boostinfg efficienc and employee morale.
                  </p>
                  <p className="caps_color">DURING THE STRATEGY & CONSULTING PHASE, WE ASSESS YOUR BUSINESS NEE AND ZERO IN ON THE MOST OPTIMAL AUTOMATION SOLUTION FROM AVAILABLE OPTIONS</p>
              </div>
              <div className= "container" style={{display:'flex'}}> 
                <Grid container spacing={10}>
                    <Grid item md ={2}>
                    <img style={{width:'200px', marginLeft:'100px'}} src={Red}/>
                    </Grid>
                    <Grid item md ={2}>
                    <img style={{width:'200px', marginLeft:'100px'}} src={Blue}/>
                    </Grid >
                    <Grid item md ={2}>
                    <img style={{width:'200px', marginLeft:'100px'}} src={Green}/>
                    </Grid>
                    <Grid item md ={1}>
                    <img style={{width:'200px', marginLeft:'100px'}} src={Violet}/>
                    </Grid>
                </Grid>
                
              </div>
              <div className="container ">
                  <p style={{fontWeight:'bold', display:'flex', justifyContent:'center', fontSize:'18px',
                marginTop:'20px'}}>WE ARE PROUD OF TWO OF THE MOST WIDELY USED 'BEST IN CLASS' RPA TOOLS IN THE MARKET</p>
                <div style={{display:'flex', justifyContent:'center'}}>
                    <img src={UIpath}/>
                    <img style={{width:'142px'}}src={path2}/>
                </div>
              </div>
    {/*second image  */}
               <div>
               <div className="second_header"> OUR STEPS TO SUCESSFULL AUTOMATION </div>
               <div className="sec_image">
                   <img className="round_image" src={Infographic}/>
               </div>
               <div style={{backgroundColor:'lightgray'}}>
                  <div className="round_header">
                      <p style={{fontSize:'20px'}}>OUR AUTOMATION AREAS OF EXPERTISE</p>
                  </div>
                  <p style={{display:'flex', justifyContent:'center', fontSize:'16px'}}> In the 5years we've been involved with Automaton projects, our <span style={{fontWeight:'bold'}}>Certifird ROPA Engineers</span> have deployed automation
                  solutions for several business scenarios.</p>
                  <Grid container style={{justifyContent:'center'}} >
                    <Grid item md ={1} style={{marginRight:'35px'}}>
                    <img style={{width:'120px'}} src={circle_1}/>
                    <p>Train new employess</p>
                    </Grid>
                    <Grid item md ={1} style={{marginRight:'35px'}}>
                    <img style={{width:'120px'}} src={circle_2}/>
                    <p>Support customer Service</p>
                    </Grid >
                    <Grid item md ={1} style={{marginRight:'35px'}}>
                    <img style={{width:'120px'}} src={circle_3}/>
                    <p>Monitor market trends </p>
                    </Grid>
                    <Grid item md ={1} style={{marginRight:'35px'}}>
                    <img style={{width:'120px'}} src={circle_4}/>
                    <p>Generate financial reports</p>
                    </Grid>
                    <Grid item md ={1} style={{marginRight:'35px'}}>
                    <img style={{width:'120px'}} src={circle_5}/>
                    <p>Process insurance claims</p>
                    

                    </Grid>
                    <Grid item md ={1} style={{marginRight:'35px'}}>
                    <img style={{width:'120px'}} src={circle_6}/>
                     <p>Handle medical billing</p>
                    </Grid>
                    <Grid item md ={1} style={{marginRight:'35px'}}>
                    <img style={{width:'120px'}} src={circle_7}/>
                    <p>Classify legal documents</p>
                    </Grid>
                </Grid>
               <div>
                
                 
               </div>

               </div>
          
               <div style={{backgroundColor:"goldenrod", display:"flex", paddingTop:'20px', paddingBottom:'20px'}}>
 
                   <div style={{marginLeft:'250px'}}>
                   <img style={{width:'100px'}} src ={Prevois}></img>
                   </div>
                   <div style={{borderStyle:'solid', borderRadius:'21px'}}>
                       <p style={{paddingLeft:'20px'}}>Your team as prompt, responsive, professional and gave us exacrly whaat we were looking for</p>
                       <p style={{color:'blue',paddingLeft:'20px'}}>Varun Mehts, Singapore</p>
                       <p  style={{paddingLeft:'20px'}}>Global Producurment Manager, Unilever</p>

                   </div>
                   <div>
                   <img style={{width:'100px'}} src ={Arrow}></img>
                   </div>

               </div>

               </div>
 

        
           
     
             </div>
        )
    }
} 
export default FirstImage;