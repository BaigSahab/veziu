import React, { useState } from 'react'
import { Column, Grid, Row, Tab, Tabs, HeaderPanel, Button } from 'carbon-components-react'
import CardComponent from '../Card'
import IconDown from '../../assets/icons/icons-actions-expancd-more.png'
import IconUp from '../../assets/icons/icons-actions-expand-less.png'
import IconClose from '../../assets/icons/icons-actions-c-lose.png'
import IconStar from '../../assets/icons/icons-actions-star-fill.png'

const EventsComponent = () => {

    const upcomingEvents = [
        {
            title: "Astronomy Or Astrology",
            eventType: "Exclusive",
            author: "Benjamin",
            country: "Greece",
            startingTimeHour: "12",
            startingTimeMinute: "20"
        },
        {
            title: "Astronomy Or Astrology",
            eventType: "Exclusive",
            author: "Benjamin",
            country: "Greece",
            startingTimeHour: "12",
            startingTimeMinute: "20"
        },
        {
            title: "Astronomy Or Astrology",
            eventType: "Exclusive",
            author: "Benjamin",
            country: "Greece",
            startingTimeHour: "12",
            startingTimeMinute: "20"
        },
        {
            title: "Astronomy Or Astrology",
            eventType: "Exclusive",
            author: "Benjamin",
            country: "Greece",
            startingTimeHour: "12",
            startingTimeMinute: "20"
        }
    ]

    const [open, setOpen] = useState(false)
    const [openCancelEventSider, setOpenCancelEventSider] = useState(false)
    const [openReviewSider, setOpenReviewSider] = useState(false)
    return (
        <Grid>
            <HeaderPanel className={open && "eventDetails"} expanded={open} style={{ textAlign: 'left' }} >
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
                        <img className="gallery-all" src="https://images.pexels.com/photos/1420440/pexels-photo-1420440.jpeg" />
                        <img className="gallery-all" src="https://i.pinimg.com/originals/7e/de/35/7ede3587270de0694ebd7fbb669d3fc0.jpg" />
                    </Column>
                    {/* </Row>
                <Row> */}
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
                    <Button kind='secondary' size="field" onClick={() => setOpenCancelEventSider(true)}>CANCEL EVENT</Button>
                    <Button kind='secondary' size="field">REVIEW</Button>
                </Column>
            </HeaderPanel>


            <HeaderPanel className={openCancelEventSider && "eventDetails"} expanded={openCancelEventSider} style={{ textAlign: 'left' }} >
                <div className="cancelEventText">
                    <h4>Are you sure you want to cancel this event?</h4>
                    <p>There is no denying the fact that the success of an advertisement lies mostly in the headline. The headline should attract the reader and make him read the rest of the advertisement. ‘Tylenol – solution for sever cold ‘, write ‘Got sever cold? Try Tylenol’. Never forget to mention the name of the product in the headline.</p>
                </div>
                <div className="footerButtons text-center">
                    <Button kind='secondary' size="field" onClick={() => setOpenCancelEventSider(false)}>NO</Button>
                    <Button kind='secondary' size="field" onClick={() => setOpenCancelEventSider(false)}>YES</Button>
                </div>
            </HeaderPanel>

            <HeaderPanel className={openReviewSider && "eventDetails"} expanded={openReviewSider} style={{ textAlign: 'left' }} >
                <div className="cancelEventText">
                    <h4>Are you sure you want to cancel this event?</h4>
                    <p>There is no denying the fact that the success of an advertisement lies mostly in the headline. The headline should attract the reader and make him read the rest of the advertisement. ‘Tylenol – solution for sever cold ‘, write ‘Got sever cold? Try Tylenol’. Never forget to mention the name of the product in the headline.</p>
                </div>
                <div className="footerButtons text-center">
                    <Button kind='secondary' size="field" onClick={() => setOpenReviewSider(false)}>NO</Button>
                    <Button kind='secondary' size="field" onClick={() => setOpenReviewSider(false)}>YES</Button>
                </div>
            </HeaderPanel>


            <Row>
                <Column>
                    <Tabs>
                        <Tab
                            // href="#"
                            id="tab-1"
                            label="Events"
                        >
                            <div className="eventsTabs">
                                <h4 className="headingWithButtons">Exclusive
                                    <div>
                                        <button className="icon-up" onClick={() => setOpen(!open)}><img src={IconUp} /></button>
                                        <button className="icon-down"> <img src={IconDown} /></button>
                                    </div>
                                </h4>

                                <Row>
                                    {upcomingEvents.map((value, idx) => {
                                        return (<Column lg={4} key={idx} className="cardsMargin">
                                            <CardComponent
                                                author={value.author}
                                                country={value.country}
                                                title={value.title}
                                                eventType={value.eventType}
                                                startingTimeHour={value.startingTimeHour}
                                                startingTimeMinute={value.startingTimeMinute}
                                                openSider={setOpen}
                                                setOpenCancelEventSider={setOpenCancelEventSider}
                                                isEventsPage
                                            />
                                        </Column>)
                                    })}
                                </Row>
                            </div>
                        </Tab>
                        <Tab
                            // href="#"
                            id="tab-2"
                            label="Archived"
                        >
                            <div className="eventsTabs">
                                <h4 className="headingWithButtons">Archived
                                    <div>
                                        <button className="icon-up"><img src={IconUp} /></button>
                                        <button className="icon-down"> <img src={IconDown} /></button>
                                    </div>
                                </h4>

                                <Row>
                                    {upcomingEvents.map((value, idx) => {
                                        return (<Column lg={4} key={idx} className="cardsMargin">
                                            <CardComponent
                                                author={value.author}
                                                country={value.country}
                                                title={value.title}
                                                eventType={value.eventType}
                                                startingTimeHour={value.startingTimeHour}
                                                startingTimeMinute={value.startingTimeMinute}
                                                isEventsPage
                                            />
                                        </Column>)
                                    })}
                                </Row>
                            </div>
                        </Tab>
                        <Tab
                            // href="#"
                            id="tab-3"
                            label='Cancelled'
                        >
                            <div className="eventsTabs">
                                <h4 className="headingWithButtons">Cancelled
                                    <div>
                                        <button className="icon-up"><img src={IconUp} /></button>
                                        <button className="icon-down"> <img src={IconDown} /></button>
                                    </div>
                                </h4>

                                <Row>
                                    {upcomingEvents.map((value, idx) => {
                                        return (<Column lg={4} key={idx} className="cardsMargin">
                                            <CardComponent
                                                author={value.author}
                                                country={value.country}
                                                title={value.title}
                                                eventType={value.eventType}
                                                startingTimeHour={value.startingTimeHour}
                                                startingTimeMinute={value.startingTimeMinute}
                                                isEventsPage
                                            />
                                        </Column>)
                                    })}
                                </Row>
                            </div>
                        </Tab>
                    </Tabs>
                </Column>
            </Row>
        </Grid >
    )
}

export default EventsComponent
