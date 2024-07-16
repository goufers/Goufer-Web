import React from "react";
import ProfileSettings from "./ProfileSettings";
import PasswordSettings from "./PasswordSettings";
import Deactivate from "./Deactivate";
import Privacy from "./Privacy";

const AccountSettings: React.FC = () => {
  const tabLinks = React.useRef<HTMLCollectionOf<Element> | null>(null);
  const tabContents = React.useRef<HTMLCollectionOf<Element> | null>(null);

  React.useEffect(() => {
    tabLinks.current = document.getElementsByClassName("tab-links");
    tabContents.current = document.getElementsByClassName("tab-contents");
  }, []);

  const opentab = (tabname: string) => (event: React.MouseEvent<HTMLParagraphElement>) => {
    if (tabLinks.current && tabContents.current) {
      for (const tab of Array.from(tabLinks.current)) {
        tab.classList.remove("active-link");
      }
      for (const tab of Array.from(tabContents.current)) {
        tab.classList.remove("active-tab");
      }
      event.currentTarget.classList.add("active-link");
      document.getElementById(tabname)?.classList.add("active-tab");
    }
  };

  return (
    <div className="w-3/4 h-screen mt-16 mx-auto ml-4 bg-white ">
      <div className="p-4">
        <h2>Account Settings</h2>

        <div className="tab-titles">
          <p className="tab-links active-link" onClick={opentab("profile")}>
            Profile Settings
          </p>
          <p className="tab-links" onClick={opentab("password")}>
            Password Settings
          </p>
          <p className="tab-links" onClick={opentab("privacy")}>
            Privacy & Notification
          </p>
          <p className="tab-links" onClick={opentab("deactivate")}>
            Deactivate Account
          </p>
        </div>
        <div className="tab-contents active-tab" id="profile">
          <ProfileSettings />
        </div>
        <div className="tab-contents" id="password">
          <ul>
            <PasswordSettings />
          </ul>
        </div>
        <div className="tab-contents" id="privacy">
          <ul>
            <Privacy />
          </ul>
        </div>
        <div className="tab-contents" id="deactivate">
          <ul>
            <Deactivate />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
