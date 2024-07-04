import React from "react";
import ProfileSettings from "./ProfileSettings";
import PasswordSettings from "./PasswordSettings";
import PrivacyAndNotification from "./PrivacyAndNotification";
import Deactivate from "./Deactivate";

type SettingsMenu = {
    index:number;
    name: string;
    path: string;
    element: React.ReactNode;
};
const menu: SettingsMenu[] = [
    {
        index: 1,
        name: 'Profile Settings',
        path: '/profilesettings', 
        element: <ProfileSettings />
    },{
        index: 2,
        name:'Password Settings',
        path:'/passwordsettings',
        element:<PasswordSettings />
    },{
        index: 3,
        name:'Privacy & Notification',
        path:'/privacy&notification',
        element:<PrivacyAndNotification/>
    },{
        index: 4,
        name:'Deactivate Account',
        path:'/deactivateaccount',
        element:<Deactivate />
    }
];

export default menu;
