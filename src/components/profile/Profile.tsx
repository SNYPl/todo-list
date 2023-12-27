import React from "react";
import style from "./style.module.css";
import profileImg from "../../assets/images/profile.svg";
import settingsImg from "../../assets/images/settings.svg";

const Profile: React.FC = () => {
  return (
    <section className={style.profile}>
      <article className={style.profileInfo}>
        <img src={profileImg} alt="profile" />
        <h2>James Ronald</h2>
      </article>
      <article className={style.setttings}>
        <img src={settingsImg} alt="settings" />
      </article>
    </section>
  );
};

export default Profile;
