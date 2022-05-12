import React from 'react'
import './card.css'
import {Card,Button,Row, Container} from 'react-bootstrap'
const foods=[
    {
        id:1,
        name:'Dosa',
        price:35,
        desc:'Dosa is a savoury rice dish made from fermented lentils.,
        img:'https://www.cookwithmanali.com/wp-content/uploads/2020/05/Masala-Dosa-500x500.jpg'
    },
    {
        id:2,
        name:'Idli',
        price:45,
        desc:'Idli is a savoury rice dish made from fermented lentils.,
        img:'https://as1.ftcdn.net/v2/jpg/03/62/02/26/1000_F_362022640_fZ6UM0JycJlFDdBiR1pYlNddKfdGvYwR.jpg'
    },
    {
        id:3,
        name:'Puri',
        price:55,
        desc:'Puri is a savoury rice dish made wheat.,
        img:'https://cdn.cdnparenting.com/articles/2020/02/26144721/PURI-BHAJI-RECIPE.webp'
    },
    {
        id:4,
        name:'Parotta',
        price:65,
        desc:'Parotta is food of South Indian cuisine.',
        img:'https://vegrecipebook.com/wp-content/uploads/2018/06/21-1200x675.jpg'
    },
 
]
function Cards() {
    const [counter,setCounter]=React.useState(0)
    const [color,setColor]=React.useState('')
    const handleIncrement=()=>{
        setCounter(counter+1)
    }
    const handleDecrement=()=>{
        setCounter(counter-1)
    }
    return (
        <>
        <h1>Combos</h1>
        <Container className='container'>
            <Row style={{gap:'80px'}}>
                {foods.map(food=>(
                    <>
                    <Card className='card' style={{width:'16rem'}}>
                        <Card.Img variant="top" className='image' src={food.img} />
                        <Card.Body>
                            <Card.Title>{food.name}</Card.Title>
                            <Card.Text>
                                {food.desc}
                            </Card.Text>
                            <Card.Text>
                                Price: {food.price}
                            </Card.Text>
                           
                        </Card.Body>
                    </Card>
                     </>
                ))}
                    

            </Row>
        </Container>
        <div style={{padding:'20px'}}>
        <button onClick={handleIncrement}>+</button>
        <button>Add to cart:{counter}</button>
        <button onClick={handleDecrement}>-</button>
        <h2>@ the price of  ₹150 only /-</h2>

        <p>Change color <p style={{color}}>{color}</p></p>
        
        <Button className='btn' onClick={()=>setColor('red')}>Red</Button>
        <Button className='btn' onClick={()=>setColor('blue')}>Blue</Button>
        <Button className='btn' onClick={()=>setColor('green')}>Green</Button>
        <Button className='btn' onClick={()=>setColor('orange')}>Orange</Button>
        </div>
        </>
    )



}


     
        
 
export default Cards
