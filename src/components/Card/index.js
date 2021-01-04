import { Column, Dropdown, HeaderPanel, Row, Tab, Tabs } from 'carbon-components-react';
import React, { useState } from 'react'
import DropdownIcon from '../../assets/icons/icons-actions-overflow.png'
import DropdownIconAfter from '../../assets/icons/icons-actions-overflow-after.png'

import {
    Chat16,
    NotificationFilled16
} from '@carbon/icons-react'

const CardComponent = (props) => {
    const { eventType, title, author, country, startingTimeHour, startingTimeMinute, isEventsPage, isFavouritesPage, isDisputePage, isAnalyticsPage, openSider, setOpenCancelEventSider } = props

    const [isDropOpen, setDropOpen] = useState(false)

    const openDropdown = () => {
        setDropOpen(!isDropOpen)
    }

    const openSidePanel = () => {
        setDropOpen(false)
        openSider(true)
    }

    const openSidePanelCancelEvent = () => {
        setDropOpen(false)
        setOpenCancelEventSider(true)
    }
    return (
        <>
            <div className="upcomingEventsCard">
                <img src="https://images.pexels.com/photos/235986/pexels-photo-235986.jpeg" />
                <div className="upcomingEventsCardInner">
                    <p>Event Type | <b>{eventType}</b></p>
                    <h4>{title}</h4>
                    <div className="author">
                        <img className="avatar" src="https://static.toiimg.com/photo/76729750.cms" />
                        <p>by {author} | From {country}</p>
                    </div>
                    {(isFavouritesPage || isDisputePage)
                        &&
                        <>
                            <div className={`dropdown ${isDropOpen && "b-color"}`} onClick={openDropdown}>
                                <img src={DropdownIconAfter} />
                            </div>
                            <div className={`dropdown-items ${isDropOpen && "d-block"}`}>
                                <div className="drop-item" onClick={openSidePanel}>Details</div>
                                <div className="drop-item">Unfavourite</div>
                            </div>
                        </>
                    }
                </div>

                {(isEventsPage || isAnalyticsPage) && <div className="eventTime">
                    {isEventsPage
                        &&
                        <>
                            <div className={`dropdown ${isDropOpen && "b-color"}`} onClick={openDropdown}>
                                <img src={isDropOpen ? DropdownIconAfter : DropdownIcon} />
                            </div>
                            <div className={`dropdown-items ${isDropOpen && "d-block"}`}>
                                <div className="drop-item" onClick={openSidePanel}>Details</div>
                                <div className="drop-item" onClick={openSidePanelCancelEvent}>Cancel Event</div>
                            </div>
                        </>
                    }
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
                </div>}
            </div>
            {/* <HeaderPanel className={open && "eventDetails"} expanded={open} style={{ textAlign: 'left' }} >
                <button className="closeBtn" onClick={() => setOpen(false)}><img src={IconClose} /></button>
                <Row className="m-0">
                    <Column sm={2} md={5} lg={7} className="p-0">
                        <img className="gallery-1" src="https://i.pinimg.com/originals/c8/2a/f9/c82af9c8a818d8dba545fb896b8a6b2c.jpg" />
                    </Column>
                    <Column sm={2} md={3} lg={5} className="p-0">
                        <img className="gallery-all" src="https://images.unsplash.com/photo-1563570971183-88011da1e470?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&w=1000&q=80" />
                        <img className="gallery-all" src="https://images.unsplash.com/photo-1515513263345-cf961d304898?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&w=1000&q=80" />
                        <img className="gallery-all" src="https://images.pexels.com/photos/4173624/pexels-photo-4173624.jpeg" />
                        <img className="gallery-all" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" />
                        <img className="gallery-all" src="data:image/jpeg;base64,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" />
                        <img className="gallery-all" src="https://i.pinimg.com/originals/7e/de/35/7ede3587270de0694ebd7fbb669d3fc0.jpg" />
                    </Column>
                    
                    <Column lg={12} className="eventDetailsTabs p-0">
                        <Tabs>
                            <Tab
                                id="overview"
                                label="Overview"
                            >
                                <h4>Explore the Cyclades and other Islands in Greece</h4>
                                <div className="author">
                                    <img src="https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/12/9-Best-Online-Avatars-and-How-to-Make-Your-Own-for-Free-image1-5.png" />
                                    <p>by <strong>Benjamin Atkins</strong> from <strong>Cyclades, Greece</strong> &nbsp; &nbsp; &nbsp; | &nbsp; &nbsp; </p>
                                    <img src={IconStar} className="rating" />
                                    <p>4.98(46)</p>
                                </div>
                                <h4>Overview</h4>
                                <p>Most travel around Greece tends to focus on the Greek Islands — and for good reason. They’re beautiful, historic, relaxing, filled with great nightlife, and, overall, just exciting.
                                With over 6,000 islands, Greece has a lot of options for travelers.
                                It’s always been a dream of mine to spend a summer slowly moving from island to island, getting to know the character of each while also working on a great tan. Like most travelers, I started the Cyclades, the main island chain closest to Athens and the one with the most famous of islands. I had planned two months of travel but found myself barely moving as I ended up spending most of my time on Ios.</p>

                            </Tab>
                            <Tab
                                id="host"
                                label="Host"
                            >
                                Some Content Host
                            </Tab>
                            <Tab
                                id="reviews"
                                label="Reviews"
                            >
                                Some Content Reviews
                            </Tab>
                        </Tabs>
                    </Column>
                </Row>
                <Column lg={12} className="footerButtons text-center">
                    <Button kind='secondary' size="field">CANCEL EVENT</Button>
                    <Button kind='secondary' size="field">REVIEW</Button>
                </Column>
            </HeaderPanel> */}
        </>
    )
}

export default CardComponent
