import { Column, Grid, Row } from 'carbon-components-react'
import React from 'react'
import { Doughnut } from 'react-chartjs-2';

const AnalyticsComponent = () => {

    const data = {
        labels: [
            'Red',
            'Green',
            'Yellow'
        ],
        datasets: [{
            data: [300, 50, 100],
            backgroundColor: [
                '#e5e5e5',
                '#929292',
                '#000000'
            ],
            hoverBackgroundColor: [
                '#e5e5e5',
                '#929292',
                '#000000'
            ]
        }]
    };

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
    // Chart.defaults.global.legend.display = false;
    return (
        <Grid>
            <Row>
                <Column sm={4} md={8} lg={9}>
                    <Row>
                        <Column>
                            <div className="analyticsCard">
                                <h2 >Summary</h2>
                                <div className="summaryDetails">
                                    <div>
                                        <p>Total Sessions</p>
                                        <h2>10</h2>
                                    </div>
                                    <div>
                                        <p>Total Payments</p>
                                        <h2>20$</h2>
                                    </div>
                                    <div>
                                        <p>Total Penalties</p>
                                        <h2>60$</h2>
                                    </div>
                                </div>
                            </div>
                        </Column>
                        <Column>
                            <div className="sessionsCard">
                                <h2 >Sessions</h2>
                                <div className="sessionDetails">
                                    <Doughnut data={data} legend={false} />
                                </div>
                                <div className="sessiontable">
                                    <table className="text-center">
                                        <thead></thead>
                                        <tbody>
                                            <tr>
                                                <td>Exclusive<br /><h5>20</h5></td>
                                                <td>Private<br /><h5>04</h5></td>
                                                <td>Public<br /><h5>08</h5></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </Column>
                        <Column>
                            <div className="sessionsCard">
                                <h2 >Penalties</h2>
                                <div className="sessionDetails">
                                    <Doughnut data={data} legend={false} />
                                </div>
                                <div className="sessiontable">
                                    <table className="text-center">
                                        <thead></thead>
                                        <tbody>
                                            <tr>
                                                <td>Exclusive<br /><h5>20</h5></td>
                                                <td>Private<br /><h5>04</h5></td>
                                                <td>Public<br /><h5>08</h5></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </Column>
                    </Row>
                    <h2 className="upcomingHeading">Up Coming Events</h2>
                    <Row>
                        {upcomingEvents.map((value, idx) => {
                            return (<Column lg={6} className="cardsMargin">
                                <div className="upcomingEventsCard">
                                    <img src="https://images.pexels.com/photos/235986/pexels-photo-235986.jpeg" />
                                    <div className="upcomingEventsCardInner">
                                        <p>Event Type | <b>{value.eventType}</b></p>
                                        <h4>{value.title}</h4>
                                        <div className="author">
                                            <img className="avatar" src="https://static.toiimg.com/photo/76729750.cms" />
                                            <p>by {value.author} | From {value.country}</p>
                                        </div>
                                    </div>
                                    <div className="eventTime">
                                        <p className="text-center">Starting in</p>
                                        <div className="time">
                                            <h4>
                                                {value.startingTimeHour}
                                                <span>Hours</span>
                                            </h4>
                                            <span>:</span>
                                            <h4>
                                                {value.startingTimeMinute}
                                                <span>MINUTES</span>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </Column>)
                        })}
                        <Column lg={6}>

                        </Column>
                        <Column lg={6}>

                        </Column>
                        <Column lg={6}>

                        </Column>
                    </Row>
                </Column>
                <Column sm={4} md={8} lg={3}>
                    <div className="paymentSection">
                        <h2 >Payments</h2>
                        <div className="paymentDetails">
                            <h2 >Exclusive</h2>
                            <table>
                                <thead></thead>
                                <tbody>
                                    <tr>
                                        <td>Paid</td>
                                        <td><h4>$05</h4></td>
                                        <td rowSpan={3} className="v-middle">
                                            <Doughnut data={data} legend={false} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>In Progress</td>
                                        <td><h4>$10</h4></td>
                                    </tr>
                                    <tr>
                                        <td>In Dispute</td>
                                        <td><h4>$120</h4></td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                        <div className="paymentDetails">
                            <h2 >Exclusive</h2>
                            <table>
                                <thead></thead>
                                <tbody>
                                    <tr>
                                        <td>Paid</td>
                                        <td><h4>$05</h4></td>
                                        <td rowSpan={3} className="v-middle">
                                            <Doughnut data={data} legend={false} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>In Progress</td>
                                        <td><h4>$10</h4></td>
                                    </tr>
                                    <tr>
                                        <td>In Dispute</td>
                                        <td><h4>$120</h4></td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                        <div className="paymentDetails">
                            <h2 >Exclusive</h2>
                            <table>
                                <thead></thead>
                                <tbody>
                                    <tr>
                                        <td>Paid</td>
                                        <td><h4>$05</h4></td>
                                        <td rowSpan={3} className="v-middle">
                                            <Doughnut data={data} legend={false} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>In Progress</td>
                                        <td><h4>$10</h4></td>
                                    </tr>
                                    <tr>
                                        <td>In Dispute</td>
                                        <td><h4>$120</h4></td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>

                    </div>
                </Column>
            </Row>
        </Grid>
    )
}

export default AnalyticsComponent
