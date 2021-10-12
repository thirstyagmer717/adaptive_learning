import React, { Component } from 'react'
import Link from "next/link"
export class Coursecard extends Component {
    constructor(props) {
        super(props )
    
        this.state = {
             
        }
        this.deleteCourse=this.deleteCourse.bind(this)
    }
    async deleteCourse(){
        const ans = confirm("Are you sure you want to delete this course?")
        if(ans){
            await fetch('/api/deletecourse', {
                method:"DELETE",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({_id:this.props._id})
            }).then((response)=>{console.log(response);}).then((data)=>{console.log(data);})
            window.location.reload()
        }
    }
    
    render() {
        return (
            <div className="coursecard">
                <button onClick={this.deleteCourse} className={this.props.isTeacher?"":"hidden"}>delete</button>
                <Link href={`/quiz/${this.props._id}`}><a className="ml-16">{this.props.name} </a></Link>
            </div>
        )
    }
}

export default Coursecard
