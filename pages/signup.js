import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import {useRouter} from "next/router"

export class signup extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            name:"",
            password:"",
            email:"",
            teacherSelector:false
        }
        this.onSubmit = this.onSubmit.bind(this)
    }
    async onSubmit(e){
        e.preventDefault()
        const data = this.state
        const res = await fetch("/api/signup",{
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(this.state)
         })

         const res2 = await res.json()
         if(res2.error){
            alert(res2.error)
         }else{
            console.log("SignUp form submitted")
            window.location.href="/login"
        }
    }
    render() {
        return (
            <>
                <Navbar/>
                <div className="loginform flex justify-center">
                <form onSubmit={this.onSubmit} className="flex flex-col">
                <div className="flex justify-evenly teacherstudentselector">
                            <span className={this.state.teacherSelector?"":"selected"} onClick={()=>this.setState({teacherSelector:false})}>Student</span>
                            <span className={this.state.teacherSelector?"selected":""} onClick={()=>this.setState({teacherSelector:true})}>Teacher</span>
                        </div>
                    <input type="text" placeholder="Full Name" onChange={(e)=>this.setState({name:e.target.value})}></input>
                    <input type="text" placeholder="Email" onChange={(e)=>this.setState({email:e.target.value})}></input>
                    <input type="password" placeholder="Password" onChange={(e)=>this.setState({password:e.target.value})}></input>
                    <button type="submit" className="bg-blue-500">Signup</button>

                </form>
                </div>
            </>
        )
    }
}

export default signup
