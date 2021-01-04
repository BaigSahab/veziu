import { Dropdown } from 'carbon-components-react';
import React, { useState } from 'react'
import DropdownIcon from '../../assets/icons/icons-actions-overflow.png'
import DropdownIconAfter from '../../assets/icons/icons-actions-overflow-after.png'

import {
    Chat16,
    NotificationFilled16
} from '@carbon/icons-react'

const CardComponent = (props) => {
    const { eventType, title, author, country, startingTimeHour, startingTimeMinute } = props

    const [isDropOpen, setDropOpen] = useState(false)

    const items = [
        {
            id: 'option-0',
            text:
                'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, aliquam. Blanditiis quia nemo enim voluptatibus quos ducimus porro molestiae nesciunt error cumque quaerat, tempore vero unde eum aperiam eligendi repellendus.',
        },
        {
            id: 'option-1',
            text: 'Option 1',
        },
        {
            id: 'option-2',
            text: 'Option 2',
        },
        {
            id: 'option-3',
            text: 'Option 3',
        },
        {
            id: 'option-4',
            text: 'Option 4',
        },
        {
            id: 'option-5',
            text: 'Option 5',
        },
    ];

    const openDropdown = () => {
        setDropOpen(!isDropOpen)
        console.log(isDropOpen)
    }
    return (
        <div className="upcomingEventsCard">
            <img src="https://images.pexels.com/photos/235986/pexels-photo-235986.jpeg" />
            <div className="upcomingEventsCardInner">
                <p>Event Type | <b>{eventType}</b></p>
                <h4>{title}</h4>
                <div className="author">
                    <img className="avatar" src="https://static.toiimg.com/photo/76729750.cms" />
                    <p>by {author} | From {country}</p>
                </div>
            </div>
            <div className="eventTime">
                <div className={`dropdown ${isDropOpen && "b-color"}`} onClick={openDropdown}>
                    <img src={isDropOpen ? DropdownIconAfter : DropdownIcon} />
                </div>
                <div className={`dropdown-items ${isDropOpen && "d-block"}`}>
                    <div className="drop-item">Details</div>
                    <div className="drop-item">Cancel Event</div>
                </div>
                <p className="text-center">Starting in</p>
                <div className="time">
                    <h4>
                        {startingTimeHour}
                        <span>Hours</span>
                    </h4>
                    <span>:</span>
                    <h4>
                        {startingTimeMinute}
                        <span>MINUTES</span>
                    </h4>
                </div>
            </div>
        </div>
    )
}

export default CardComponent
