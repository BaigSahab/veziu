import React, { useState } from 'react';
import {
    Header,
    HeaderContainer,
    HeaderName,
    HeaderNavigation,
    HeaderMenuButton,
    HeaderMenuItem,
    HeaderGlobalBar,
    HeaderGlobalAction,
    SkipToContent,
    SideNav,
    SideNavItems,
    HeaderSideNavItems,
} from 'carbon-components-react';
import {
    Chat16,
    NotificationFilled16
} from '@carbon/icons-react'

const HeaderComponent = () => {
    return (
        <HeaderContainer
            render={() => (
                <Header aria-label="Carbon Tutorial">
                    <SkipToContent />
                    {/* <HeaderMenuButton
                        aria-label="Open menu"
                        onClick={onClickSideNavExpand}
                        isActive={isSideNavExpanded}
                        style={{ width: "100px", background: "red", padding: "100px" }}
                    /> */}
                    {/* <HeaderName href="/" prefix="IBM">
                        Carbon Tutorial
                    </HeaderName> */}
                    <div className="logo">

                        <span className="text-center">  VEZIU</span>
                    </div>
                    {/* <HeaderNavigation aria-label="Carbon Tutorial">
                        <HeaderMenuItem href="/repos">Repositories</HeaderMenuItem>
                    </HeaderNavigation> */}
                    <HeaderGlobalBar className="header-icons">
                        {/* <HeaderGlobalAction
                            aria-label="Search"
                        // onClick={action('search click')}
                        >
                            <NotificationFilled16 />
                        </HeaderGlobalAction>
                        <HeaderGlobalAction
                            aria-label="Notifications"
                        // onClick={action('notification click')}
                        >
                            <Chat16 />
                        </HeaderGlobalAction>
                        <HeaderGlobalAction
                            aria-label="App Switcher"
                        // onClick={action('app-switcher click')}
                        >
                            <div className="Avatar">
                                <img src="https://static.toiimg.com/photo/76729750.cms" />
                            </div>
                        </HeaderGlobalAction > */}
                        <div className="header-side-buttons">
                            <div>
                                <NotificationFilled16 />
                            </div>
                            <div>
                                <Chat16 />
                            </div>
                            <div>
                                <img className="avatar" src="https://static.toiimg.com/photo/76729750.cms" />
                            </div>
                        </div>
                    </HeaderGlobalBar >
                </Header >
            )}
        />
    )
};

export default HeaderComponent