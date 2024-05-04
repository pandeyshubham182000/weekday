import React,{useContext,useState} from "react";
import "../Styles/cards.css"
import UserContext from "../Context/UserContext";
import "../Styles/filter.css"
import { Api } from "./Api";

const Cards = () => {
    const {user,setUser} =useContext(UserContext)    
    const arr=[1,23,43,23,45,23,21,23,4,2,2,12,2,45,"sd"]
    return(
        <div>
            <Api/>
            <div className="cardContainer">
                {user && user.map((item)=>
                <div className="cardPlate" key={item.jdUid}><br/>
                    <span id="durationSpan"> &#127942; Posted {item.maxJdSalary > 40 ? 10 : 5} days ago</span><br/>
                    <br/>
                    <div className="header">
                        <div>
                            <img className="refImage coImg" src={item.logoUrl} alt=""/>
                        </div>
                        <div> 
                            {item.companyName} <br/>
                            {item.jobRole} developer<br/>
                            {item.location}
                        </div>
                    </div>
                    <emphasis style={{color:"#36454F"}}>&nbsp;&nbsp;Estimated Salary : {item.salaryCurrencyCode ? <span>&#x24;</span>:<span>&#x20B9;</span>} {item.minJdSalary ? item.minJdSalary:0} - {item.maxJdSalary} LPA &#9989;</emphasis><br/><br/>
                    <emphasis>&nbsp;&nbsp;About Company:</emphasis><br/>
                    <b>&nbsp;&nbsp;About Us:</b>
                    <div className="description">
                       {item.jobDetailsFromCompany}
                    </div>
                    <center><button className="viewJob">View Job</button></center><br/><br/>
                    <emphasis style={{color:"#36454F"}}>&nbsp;&nbsp;Minimum Experience</emphasis><br/>
                    <emphasis>&nbsp;&nbsp;{item.minExp} years</emphasis><br/>
                    <br/><br/>
                    
                    <center>
                        <button className="btn">
                           <span>&#9889;</span>&nbsp;
                           Easy Apply
                        </button><br/>
                        <button className="btn" id="refbtn">
                            <div style={{marginLeft : "15%"}}>
                                <div className="refDiv">
                                    <img className="refImage img1" src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" alt=""/>&nbsp;
                                    <img className="refImage" src="https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg" alt=""/>&nbsp;
                                </div>
                                <div className="refDiv">Unlock referral asks</div>
                            </div>
                        </button>
                        <br/><br/>
                    </center>
                    
                </div>)}
            </div>
        </div>
    )
}

export default Cards
