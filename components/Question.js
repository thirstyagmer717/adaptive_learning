import React, { Component } from 'react'

export class Question extends Component {    
    render() {
        
            if(this.props.isTeacher){return(<div className="questioncontainer">
                <h1 className="questiontext">{this.props.question.name}</h1>
                {this.props.question.answers.map((element)=>{
                    return(
                        <h2 className={element.isCorrect?"text-green-500 answerteachertext":"text-red-500 answerteachertext"}>{element.name}</h2>
                    )
                })}         
            </div>)}
            else{   
                return(<div className="questioncontainer">
                <h1 className="questiontext">{this.props.question.name}</h1>
                {this.props.question.answers.map((element)=>{
                    return(
                        <>
                        <input type="checkbox" className="studentcheckbox" onChange={this.props.changeScore}></input>
                        <h2 className="answerstudenttext">{element.name}</h2>
                        </>
                    )
                })}         
            </div>)
            }
        
    }
}

export default Question
