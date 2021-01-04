import React from 'react';
import { Column, Grid, Row, Tab, Tabs } from 'carbon-components-react';
import CardComponent from '../Card';
import IconDown from '../../assets/icons/icons-actions-expancd-more.png';
import IconUp from '../../assets/icons/icons-actions-expand-less.png';
import ContributorCardComponent from '../Card/ContributorCard';


const FavouritesComponent = () => {

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

    const contributors = [
        {
            fullname: "Sufyan Baig",
            country: "Pakistan",
            reviews: "453",
            isVerified: true,
            avatarSrc: "data:image/jpeg;base64,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"
        },
        {
            fullname: "Hamza Ashrafi",
            country: "Pakistan",
            reviews: "564",
            isVerified: true,
            avatarSrc: "https://pyxis.nymag.com/v1/imgs/e6c/02c/cbe672af6609198720b69efd475ab5f641-avatar-last-airbender.rsquare.w1200.jpg"
        },
        {
            fullname: "Sufyan Baig",
            country: "Pakistan",
            reviews: "453",
            isVerified: true,
            avatarSrc: "https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/12/9-Best-Online-Avatars-and-How-to-Make-Your-Own-for-Free-image1-5.png"
        },
        {
            fullname: "Sufyan Baig",
            country: "Pakistan",
            reviews: "453",
            isVerified: true,
            avatarSrc: "https://pickaface.net/gallery/avatar/20151109_144853_2380_sample.png"
        },
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
                                                isFavouritesPage
                                            />
                                        </Column>)
                                    })}
                                </Row>
                            </div>
                        </Tab>
                        <Tab
                            // href="#"
                            id="tab-2"
                            label="Contributors"
                        >
                            <div className="eventsTabs">
                                {/* <h4 className="headingWithButtons">Contributors
                                <div>
                                        <button className="icon-up"><img src={IconUp} /></button>
                                        <button className="icon-down"> <img src={IconDown} /></button>
                                    </div>
                                </h4> */}

                                <Row>
                                    {contributors.map((value, idx) => {
                                        return (<Column lg={3} key={idx} className="cardsMargin">
                                            {/* <CardComponent
                                                author={value.author}
                                                country={value.country}
                                                title={value.title}
                                                eventType={value.eventType}
                                                startingTimeHour={value.startingTimeHour}
                                                startingTimeMinute={value.startingTimeMinute}
                                                isFavouritesPage
                                            /> */}
                                            <ContributorCardComponent
                                                fullname={value.fullname}
                                                country={value.country}
                                                reviews={value.reviews}
                                                isVerified={value.isVerified}
                                                avatarSrc={value.avatarSrc}
                                            />
                                        </Column>)
                                    })}
                                </Row>
                            </div>
                        </Tab>
                        {/* <Tab
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
                        </Tab> */}
                    </Tabs>
                </Column>
            </Row>
        </Grid >
    )
}

export default FavouritesComponent
