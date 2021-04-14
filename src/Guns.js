import React from 'react'
import Gun from './Gun'
function Guns({ items }) {


    return (
        <div>
            {items.map((item) => {
                <Gun key={item.id}> {item.title} </Gun>
            })}
        </div>








        // <div className="Gun-List">
        //     {items.map((gunItems) => {
        //         const { id, title, ammo, img, capacity, fireRate, damage } = gunItems;


        //         return (
        //             <div key={id} className="gun-item">
        //                 <img src={img} alt={title} className="photo" />
        //                 <div className="container">
        //                     <h5>{title}</h5>
        //                     <h5>For {title} , {ammo} ammo is used</h5>

        //                     <header>
        //                         <h5>Damage: {damage}</h5>
        //                         <h5>Mag capacity: {capacity}</h5>
        //                     </header>

        //                     <h5>Fire Rate : {fireRate}</h5>
        //                 </div>

        //             </div>
        //         );
        //     })}
        // </div>
    )
}

export default Guns
