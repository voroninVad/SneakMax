import { useDispatch, useSelector } from "react-redux";
import style from "./index.module.css";
import { AppDispatch, RootState } from "../../Redux/store";
import { fetchTeam, ITeam } from "../../Redux/team/teamSlice";
import { useEffect } from "react";
import TeamCard from "../TeamCard";

const Team = () => {
  const dispatch = useDispatch<AppDispatch>();
  const teamData = useSelector<RootState, ITeam[]>((state) => state.team.data);

  useEffect(() => {
    dispatch(fetchTeam());
  }, [dispatch]);
  return (
    <section id="team" className={style.team}>
      <div className={style.container_team}>
        <h2>Наша команда</h2>
        <ul className={style.list_team}>
          {teamData &&
            teamData.map((item: ITeam) => (
              <TeamCard data={item} key={item.id} />
            ))}
        </ul>
      </div>
    </section>
  );
};

export default Team;
