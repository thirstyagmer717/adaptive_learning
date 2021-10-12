import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import cookie from 'js-cookie'
export class login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            email:"",
            password:""
        }
        this.onSubmit=this.onSubmit.bind(this)
    }
    async onSubmit(e){
        e.preventDefault()
        const res = await fetch('/api/login', {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                email:this.state.email,
                password:this.state.password
            })
        })

        const res2 = await res.json()
        if(res2.error){
            alert(res2.error)
        }
        else{
            cookie.set('token', res2.token)
            window.location.href="/"
        }
    }

    render() {
        return (
            <>
                <Navbar/>
                <div className="loginform flex justify-center">
                    <form onSubmit={this.onSubmit} className="flex flex-col">
                        <input type="text" placeholder="Email" onChange={(e)=>this.setState({email:e.target.value})}></input>
                        <input type="password" placeholder="Password" onChange={(e)=>this.setState({password:e.target.value})}></input>
                        <button type="submit" className="bg-blue-500" >Login</button>
                    </form>
                </div>
            </>
        )
    }
}

export default login
