import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Recipie from './recipie';
import './recipieList.css' ;

class RecipieList extends Component{
    
    static defaultProps ={
        recipies:[{
                    title: "Spaghetti",
                    instructions: ['Open jar of Spaghetti sauce.','  Bring to simmer.','  Boil water',' Cook pasta until done.','Combine pasta and sauce.'],
                    ingredients: ["pasta", "8 cups water", "1 box spaghetti"],
                    img: "recipe-image-1.jpg"
                  },
                  {
                    title: "Milkshake",
                    instructions: ['Combine ice cream and milk.','  Blend until creamy'],
                    ingredients: ["2 Scoops Ice cream", "8 ounces milk"],
                    img: "recipe-image-1.jpg"
                  },
                  {
                    title: "Avocado Toast",
                    instructions: ['Toast bread.','  Slice avocado and spread on bread.','  Add salt, oil, and pepper to taste.'],
                    ingredients: ["2 slices of bread", "1 avocado", "1 tablespoon olive oil", "1 pinch of salt", "pepper"],
                    img: "recipe-image-1.jpg"
                  }
                ]};
        
    static propTypes = {
            recipies: PropTypes.arrayOf(PropTypes.object).isRequired
        }
    render(){
        
        const recipies = this.props.recipies.map((recipie,index)=>{
           return <Recipie key={index} title={recipie.title} instructions={recipie.instructions} img={recipie.img} ingredients={recipie.ingredients} /> ;
        });
        
        return(
            <div className='recipielist'>{recipies}</div>
            );
    }
}

export default RecipieList;