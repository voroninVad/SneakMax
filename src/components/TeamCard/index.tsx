import { FC } from "react";
import style from "./index.module.css";
import { ITeam } from "../../Redux/slices/teamSlice";

interface IProps {
    data: ITeam;
  }
const TeamCard: FC<IProps> = ({ data }) => {
  return (
    <li className={style.people}>
      <picture>
        <img src={data.imgUrl} alt={data.name} />
      </picture>
      <h3>{data.name}</h3>
      <p>{data.role}</p>
    </li>
  );
};

export default TeamCard;
