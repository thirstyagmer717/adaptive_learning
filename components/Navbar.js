import React, { Component } from 'react'
import Link from "next/link"
import cookies from "js-cookie"
import jwt from "jsonwebtoken"
export class Navbar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
        }
    }
    
    componentDidMount(){
        const token = cookies.get("token")
        try{
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            if(decoded){
                this.setState({isLoggenIn:true})
            }
        }catch(error){if(error.message == "invalid token"){
            cookies.remove('token')
            window.location.href="/login"
        };}
        

    }
    render() {
        return (
            <div className="navbar">
                <span><Link href="/"><a className="inline-block">Home</a></Link></span>
                <span><Link href="/courses"><a className="inline-block coursesnavbar">Courses</a></Link></span>
                <div className={this.state.isLoggenIn?"hidden":""}>
                <Link href="/login"><a className="mr-7">Login</a></Link>
                <Link href="/signup"><a className="ml-2">Signup</a></Link>
                </div>
                <div className={this.state.isLoggenIn?"":"hidden"}>
                <button onClick={()=>{cookies.remove("token");window.location.href="/";this.setState({isLoggenIn:false})}}><a className="ml-2">Logout</a></button>
                </div>
                
            </div>
        )
    }
}

export default Navbar
