import React, {Component} from 'react';
import './recipie.css' ;

class Recipie extends Component{
    render(){
        const {title,img} = this.props;
        const ingredients = this.props.ingredients.map((item,i) =>(<li key={i}>{item}</li>));
        const instructions = this.props.instructions.map((instrution,i) =>(<li key={i}>{instrution}</li>));
        return(
            <div className='card rounded-top'>
                <img src={img} alt={title} className='card-image'/>
                <div className='card-title'>{title}</div>
                <div className='card-content'>
                <h3> Ingredients : -</h3>
                <ul>
                    {ingredients}
                </ul>
                <h3> Instructions : -</h3>
                <ol> {instructions}</ol>
                </div>
                
                
            </div> 
            
            );
    }
}

export default Recipie ;