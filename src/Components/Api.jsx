import React, { useEffect, useState, useContext, useCallback } from "react";
import UserContext from "../Context/UserContext";
import axios from "axios"

export const Api =()=>{
    const[data,setData]=useState([])
    const [search,setSearch] =useState([])
    console.log(data)
    //filter values
    const[company, setCompany]=useState("")
    const[loc, setLoc]=useState("")
    const[jd, setJd]=useState("")

    //console.log(search)
    const myapp=0
    const {setUser} = useContext(UserContext)
    setUser(search)

    const fetchData = async ()=>{
        const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
    
            const body = JSON.stringify({
                "limit": 10,
                "offset": 0
            });
    
            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body
            };
    
            const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
            .then((response) => response.text())
            .then((result) => {
                const jsonFile = JSON.parse(result)
                setData(jsonFile.jdList)
                setSearch(jsonFile.jdList)
            }).catch((e)=>console.log("Network Issue"))

            // const newData = await response.json()
            // setData(newData.jdList)

    }
    
    useEffect(()=>{
        fetchData()
    },[])

    const Filter = (e) =>{
        e.preventDefault()
        setSearch(data.filter(f=>f.companyName.toLowerCase().includes((company).toLowerCase()) 
                                && f.location.toLowerCase().includes((loc).toLowerCase())                        
                                && f.jobDetailsFromCompany.toLowerCase().includes((jd).toLowerCase())
                                ))
    }  

    const minSal=(e)=>{
        setSearch(data.filter(f=>f.minJdSalary>=e.target.value))
    }
    const minExp =(e)=>{
        setSearch(data.filter(f=>f.minExp>=e.target.value))
    }
    

    // const exp =(e)=>{
    //     setSearch(data.filter(f=>f.location.toLowerCase().includes(e.target.value)))
    // }
    return(
        <div>
            <input 
            type="text"
            placeholder="Company Name"
            className="searchBox"
            onChange={(e)=>setCompany(e.target.value)}
            />

            <input 
            type="text"
            placeholder="Location"
            className="searchBox"
            onChange={(e)=>{setLoc(e.target.value)}}
            />

            <input 
            type="text"
            placeholder="Min Experience"
            className="searchBox"
            onChange={minExp}
            />

            <input 
            type="text"
            placeholder="Skills"
            className="searchBox"
            onChange={(e)=>{setJd(e.target.value)}}
            />

            <input 
            type="text"
            placeholder="Min Salary"
            className="searchBox"
            onChange={minSal}
            />

            <center><button
                className="searchBox"
                onClick={Filter}
            > Filter </button></center>
            

            
        </div>
    )
}

