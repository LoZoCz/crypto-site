import { FirstHalfData, SecondHalfData } from "../utils/TimelineData";
import TimelineItem from "./TimelineItem";

const MobileTimeline = () => {
  type TimelineItem = {
    title: string;
    image: string;
    desc: string;
  };

  const CombinedData: TimelineItem[] = FirstHalfData.reduce(
    (result, item, index) => {
      return result.concat(item, SecondHalfData[index] || []);
    },
    [] as TimelineItem[],
  );

  return (
    <div className="about__main-timelineWrapper timeline__box content-grid">
      {CombinedData.map((item, index) => (
        <TimelineItem key={index} itemData={item} />
      ))}
    </div>
  );
};

export default MobileTimeline;
