import { useState } from "react"
import Item from "./Item"

function FoodItem({ fooditems }) {
    // console.log("fooditems" ,fooditems)

    const  [activeItem, setActiveItem]=useState([])

    let onBuyButton = (event ,item) =>{
        let newItem = [...activeItem , item]
        setActiveItem(newItem)
    }

    return (

        <ul className="list-group">
            {fooditems.map((item) => (

                <Item
                    key={item}
                    foodItem={item}
                    bought = {activeItem.includes(item)}
                    handleBuyButton={(event) => onBuyButton(event , item)} >

                </Item>


            ))}
        </ul>
    )
}

export default FoodItem