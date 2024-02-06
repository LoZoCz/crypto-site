import HalfTimeline from "./HalfTimeline";
import MidTimeLine from "./MidTimeLine";
import { FirstHalfData, SecondHalfData } from "../utils/TimelineData";

const DesktopTimeline = () => {
  return (
    <section className="about__main-timelineWrapper timeline__box content-grid">
      <HalfTimeline data={FirstHalfData} className="timeline__box-firstHalf" />
      <MidTimeLine className="timeline__box-middleLineBox" />
      <HalfTimeline
        data={SecondHalfData}
        className="timeline__box-secondHalf"
      />
    </section>
  );
};

export default DesktopTimeline;
