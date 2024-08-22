

function Item({foodItem, bought, handleBuyButton}) {
    // console.log("fooditem" , props)
    

    
    return (


        <li className={`list-group-item ${bought && 'active'}` } >
            <span>{foodItem}</span>
            <button
                type="button" className="btn btn-info"
                onClick={handleBuyButton}>
                Buy
            </button>
        </li>

    )
}

export default Item