import { SideNav, SideNavItems, SideNavLink, SideNavMenu, SideNavMenuItem } from 'carbon-components-react'
import { Analytics16, Fade16, EventSchedule16, FavoriteFilled16, CurrencyDollar16, Settings16, UserFilled16 } from '@carbon/icons-react'
import React from 'react'
import { NavLink } from 'react-router-dom'



const SideNavComponent = () => {
    return (
        <>
            <SideNav aria-label="Side navigation" isRail>
                <SideNavItems>
                    {/* <SideNavMenu renderIcon={Fade16} title="Category title">
                        <SideNavMenuItem href="javascript:void(0)">Link</SideNavMenuItem>
                        <SideNavMenuItem aria-current="page" href="javascript:void(0)">
                            Link
                         </SideNavMenuItem>
                        <SideNavMenuItem href="javascript:void(0)">Link</SideNavMenuItem>
                    </SideNavMenu>
                    <SideNavMenu renderIcon={Fade16} title="Category title">
                        <SideNavMenuItem href="javascript:void(0)">Link</SideNavMenuItem>
                        <SideNavMenuItem href="javascript:void(0)">Link</SideNavMenuItem>
                        <SideNavMenuItem href="javascript:void(0)">Link</SideNavMenuItem>
                    </SideNavMenu>
                    <SideNavMenu renderIcon={Fade16} title="Category title">
                        <SideNavMenuItem href="javascript:void(0)">Link</SideNavMenuItem>
                        <SideNavMenuItem href="javascript:void(0)">Link</SideNavMenuItem>
                        <SideNavMenuItem href="javascript:void(0)">Link</SideNavMenuItem>
                    </SideNavMenu> */}
                    <NavLink exact to="/" activeClassName="active">
                        <SideNavLink renderIcon={Analytics16} href="javascript:void(0)">
                            Analytics
                        </SideNavLink>
                    </NavLink>
                    <NavLink exact to="/events" activeClassName="active">
                        <SideNavLink renderIcon={EventSchedule16}>
                            Events
                        </SideNavLink>
                    </NavLink>
                    <NavLink exact to="/favourites" activeClassName="active">
                        <SideNavLink renderIcon={FavoriteFilled16}>
                            Favourites
                        </SideNavLink>
                    </NavLink>
                    <NavLink exact to="/disputes" activeClassName="active">
                        <SideNavLink renderIcon={CurrencyDollar16}>
                            Dispute
                        </SideNavLink>
                    </NavLink>
                </SideNavItems>
                <SideNavItems
                    className="bottomSideNav"
                >
                    <SideNavLink renderIcon={UserFilled16} href="javascript:void(0)">
                        Account
                    </SideNavLink>
                    <SideNavLink renderIcon={Settings16} href="javascript:void(0)">
                        Settngs
                    </SideNavLink>

                </SideNavItems>
            </SideNav>
            {/* <StoryContent /> */}
            {/* <StoryContent useResponsiveOffset={false} /> */}
        </>
    )
}

export default SideNavComponent
