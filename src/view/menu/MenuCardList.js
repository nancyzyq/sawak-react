import React from 'react'
import './menu.css'

const MenuCardList = (props) => {
	return (
		<div className='row'>
			{props.menu.map(f => <MenuCard item={f} key={f.id}/>)}
		</div>
	)
}

export const MenuCard = (props) => {
    return (
        <div className="menuCard col-md-6 col-xl-4">
            <div className="menuCardInner">
                <div className="menuCardImage">
                </div>
                <div className="menuCardDetail">
                <h4 className="menuCardTitle">{props.item.name}</h4>
                <p><span>${props.item.price}</span></p>
                <p className="summary">
                    <strong>Ingredients: </strong>{props.item.ingredients}</p>
                </div>
            </div>
        </div>
    )
}

export default MenuCardList