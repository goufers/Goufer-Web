import React, { useRef, useEffect } from "react";
import ProfileSettings from "./ProfileSettings";
import PasswordSettings from "./PasswordSettings";
import Deactivate from "./Deactivate";
import Privacy from "./Privacy";

const AccountSettings: React.FC = () => {
  const tablinks = useRef<HTMLCollectionOf<Element> | null>(null);
  const tabcontents = useRef<HTMLCollectionOf<Element> | null>(null);

  useEffect(() => {
    tablinks.current = document.getElementsByClassName("tab-links");
    tabcontents.current = document.getElementsByClassName("tab-contents");
  }, []);

  const opentab = (tabname: string) => (event: React.MouseEvent<HTMLParagraphElement>) => {
    if (tablinks.current && tabcontents.current) {
      Array.from(tablinks.current).forEach((tab) => tab.classList.remove("active-link"));
      Array.from(tabcontents.current).forEach((tab) => tab.classList.remove("active-tab"));
      event.currentTarget.classList.add("active-link");
      document.getElementById(tabname)?.classList.add("active-tab");
    }
  };

  return (
    <div className="container mx-auto w-full  h-full mt-6 bg-white font-Roboto  rounded-lg">
      <div className="px-4">
        <div className="tab-titles flex flex-row items-center">
          <p className=" mx-auto text-sm tab-links active-link" onClick={opentab("profile")}>
            Profile Settings
          </p>
          <p className="mx-auto text-sm tab-links" onClick={opentab("password")}>
            Password Settings
          </p>
          <p className="mx-auto text-sm tab-links" onClick={opentab("privacy")}>
            Privacy & Notification
          </p>
          <p className="mx-auto text-sm tab-links" onClick={opentab("deactivate")}>
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
