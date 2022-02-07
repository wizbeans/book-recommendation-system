import React from 'react';
import CardItem from '../CardItem';
import '../../App.css'
import '../Cards.css';

// import Cards from '../Cards';


 function Suggestions(){
    return (
   <>
    <div className='cards'>
    <h1>HERE ARE SOME SUGGESTIONS:</h1>
    <div className="cards__container">
        <div className="cards__wrapper">
            <ul className="cards__item">
                <CardItem 
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEPdq7Wqnzw9XKQD2jD4tDFgzlcx8WDcBJ1g&usqp=CAU'
                text=' OPTION 1 '
                label='1'
                path='./'
   
                />
                 <CardItem 
                src='http://images.unsplash.com/photo-1473773508845-188df298d2d1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max'
                text=' OPTION 2'
                label='2'
                path='./'
   
                />
                 <CardItem 
                src='https://images.saymedia-content.com/.image/t_share/MTc4NzM1OTc4MzE0MzQzOTM1/how-to-create-cool-website-backgrounds-the-ultimate-guide.png'
                text=' OPTION 3'
                label='3'
                path='./'
   
                />
</ul>

</div>
</div>
</div>
</>
)

}

export default Suggestions