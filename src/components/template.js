import React, { Component } from "react";

export default class Template extends Component{
    constructor(){
        super();

        this.state = {
            textInput: "",
            display: "none"
        }
        
    }
   

    renderTemplate(){
        const template = [
            "A vacation is when you take a trip to some ",
            "Adjective",
            " place with your ",
            "Adjective",
            " family. Usually you go to some place that is near a/an ",
            "Noun",
            ". A good vacation place is one where you can ride ",
            "Plural Noun",
            " or play ",
            "Game",
            " or go hunting for ",
            "Plural Noun",
            ". I like to spend my time ",
            "Verb Ending In 'Ing'",
            " or ",
            "Verb Ending In 'Ing'",
            ". When parents go on a vacation, they spend their time eating three ",
            "Plural Noun",
            " a day, and fathers play golf, and mothers sit around ",
            "Verb Ending In 'Ing'",
            ". Last summer, my little brother fell in a/an ",
            "Noun",
            " and got poison ",
            "Plant",
            " all over his ",
            "Part Of The Body",
            ". My family is going to go to (the) ",
            "A Place",
            ", and I will practice ",
            "Verb Ending In 'Ing'",
            ". Parents need vacations more than kids because parents are always very ",
            "Adjective",
            " and because they have to work ",
            "Number",
            " hours every day all year making enough ",
            "Plural Noun",
            " to pay for the vacation.",
          ];

          return template.map((portion, index)=>{
              if (index % 2 != 0){
                  return <input 
                  className="user-input"
                  placeholder={portion} 
                  type="text" 
                  key={index} 
                  value={this.state.textInput}/>
              }
              else {
                  return (<div 
                    className= "template-text" 
                    key={index} 
                    style={{display: this.state.display}}
                    >
                        {portion} 
                    </div>)
              }
          })
    }

    handleChange(){

    }

    handleSubmit(){

    }


    
    render(){

        return(
            <div>
                <form className="inputs">
                {this.renderTemplate()}
                <button type="submit" className="btn">Submit</button>
                </form>
           </div>
        )
    }
}

