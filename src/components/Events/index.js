import { Column, Grid, Row, Tab, Tabs } from 'carbon-components-react'
import React from 'react'
import CardComponent from '../Card'
import IconDown from '../../assets/icons/icons-actions-expancd-more.png'
import IconUp from '../../assets/icons/icons-actions-expand-less.png'

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
    return (
        <Grid>
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
