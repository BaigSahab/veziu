import React from 'react'
import { Column, Grid, Row, Tab, Tabs, HeaderPanel } from 'carbon-components-react'
import CardComponent from '../Card'
import IconDown from '../../assets/icons/icons-actions-expancd-more.png'
import IconUp from '../../assets/icons/icons-actions-expand-less.png'


const DisputesComponent = () => {

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
                            label="Open"
                        >
                            <div className="eventsTabs">
                                <h4 className="headingWithButtons">Exclusive
                                    <div>
                                        <button className="icon-up"><img src={IconUp} /></button>
                                        <button className="icon-down"> <img src={IconDown} /></button>
                                    </div>
                                </h4>
                                <hr />

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
                                                isDisputePage
                                            />
                                        </Column>)
                                    })}
                                </Row>
                            </div>
                        </Tab>
                        <Tab
                            // href="#"
                            id="tab-2"
                            label="Closed"
                        >
                            <div className="eventsTabs">
                                <h4 className="headingWithButtons">Archived
                                    <div>
                                        <button className="icon-up"><img src={IconUp} /></button>
                                        <button className="icon-down"> <img src={IconDown} /></button>
                                    </div>
                                </h4>
                                <hr />

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
                                                isDisputePage
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

export default DisputesComponent
