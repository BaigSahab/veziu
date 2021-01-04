import React, { useState } from 'react'
import DropdownIconAfter from '../../assets/icons/icons-actions-overflow-after.png'


const ContributorCardComponent = (props) => {

    const { fullname, country, reviews, isVerified, avatarSrc } = props

    const [isDropOpen, setDropOpen] = useState(false)

    const openDropdown = () => {
        setDropOpen(!isDropOpen)
    }
    return (
        <div className="contributorsCard">
            <img src={avatarSrc} />
            <div className="contributorCardInner">
                <h4>{fullname}</h4>
                <small>From <strong>{country}</strong></small>
                <div className="reviewsNid">
                    <div> <small>Reviews</small> <br /><strong>{reviews}</strong> </div>
                    <div> <small>Identity</small> <br /><strong>{isVerified ? "Verified" : "Not Verified"}</strong> </div>
                </div>
                <div className={`dropdown ${isDropOpen && "b-color"}`} onClick={openDropdown}>
                    <img src={DropdownIconAfter} />
                </div>
                <div className={`dropdown-items ${isDropOpen && "d-block"}`}>
                    <div className="drop-item">Details</div>
                    <div className="drop-item">Unfavourite</div>
                </div>
            </div>
        </div>
    )
}

export default ContributorCardComponent
