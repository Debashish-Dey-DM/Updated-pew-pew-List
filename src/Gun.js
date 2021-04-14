import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const Gun = ({ items }) => {

    const [showData, setShowData] = useState(false);
    return (
        <div className="Gun-List">
            {items.map((gunItems) => {
                const { id, title, ammo, img, capacity, fireRate, damage } = gunItems;

                const restItems = () => {
                    return (
                        <div>
                            <h5>For {title} , {ammo} ammo is used</h5>

                            <header>
                                <h5>Damage: {damage}</h5>
                                <h5>Mag capacity: {capacity}</h5>
                            </header>

                            <h5>Fire Rate : {fireRate}</h5>
                        </div>
                    )
                }
                return (
                    <div key={id} className="gun-item">
                        <img src={img} alt={title} className="photo" />
                        <div className="container">

                            <p>{showData ? restItems() : ``}</p>
                            <button className="btn-style" onClick={() => setShowData(!showData)}>
                                {showData ? <FontAwesomeIcon icon={faMinus} /> : <FontAwesomeIcon icon={faPlus} />}</button>


                            {


                            /* <h5>{title}</h5>
                            <h5>For {title} , {ammo} ammo is used</h5>

                            <header>
                                <h5>Damage: {damage}</h5>
                                <h5>Mag capacity: {capacity}</h5>
                            </header>

                            <h5>Fire Rate : {fireRate}</h5> */}
                        </div>

                    </div>
                );
            })}
        </div>
    )
}
export default Gun;
