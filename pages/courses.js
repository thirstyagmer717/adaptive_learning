import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import cookies from "js-cookie"
import jwt from 'jsonwebtoken'
import Coursecard from '../components/Coursecard'
export class courses extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            data:[],
            createCourse:false,
        }
        this.createCourse=this.createCourse.bind(this)
        this.onSubmit=this.onSubmit.bind(this)
        this.getData = this.getData.bind(this)
    }
    async onSubmit(e){
        e.preventDefault()
        const res = await fetch('/api/createcourse', {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                name:this.state.name,
            })
        })

        const res2 = await res.json()
        if(res2.error){
            console.log(res2.error)
        }
        if(res2.message == "Course created successful"){
            alert(res2.message)
            this.setState({createCourse:false})
            window.location.reload()
        }
    }
    createCourse(){
        this.setState({createCourse:true})
        
    }
    async getData(){
        const response = await fetch('/api/getcourses', {
                    method:"GET",
                    headers:{
                        "Content-Type":"application/json"
                    }
                })
                const res2 = await response.json()
                this.setState({data:res2})
                console.log(this.state.data);
            }
    componentDidMount(){
        const token = cookies.get("token")
        this.getData()
        try{
            const decoded = jwt.verify(token,process.env.JWT_SECRET)
            if(decoded.userNow.teacherSelector){
                this.setState({isTeacher:true})
            }
        }
        catch(error){
            if(error.message == "invalid token"){
                cookies.remove('token')
                window.location.href="/login"
            }
        }
    }
    
    render() {
        return (
            <>
            <Navbar/>
            <div>
                <button className={this.state.isTeacher?"createcoursebutton":"hidden"} onClick={this.createCourse}>Create Course</button>
                <form onSubmit={this.onSubmit}>
                    <input placeholder="Name of Course" type="text" className={this.state.createCourse?"createcourseinput":"hidden"} onChange={(e)=>{this.setState({name:e.target.value})}}></input>
                    <button type="submit" className={this.state.createCourse?"createcoursesubmit":"hidden"}>Save</button>
                </form>
                {this.state.data.map((course)=>{
                    return(

                        <Coursecard name={course.name} _id={course._id} isTeacher={this.state.isTeacher} />
                    )
                })}
            </div>
            </>
        )
    }
}

export default courses
