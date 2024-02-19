import TimelineItem from "./TimelineItem";

type HalfTimelineProps = {
  data: {
    title: string;
    image: string;
    desc: string;
  }[];
  className?: string;
};

const HalfTimeline = ({ data, ...props }: HalfTimelineProps) => {
  return (
    <div {...props}>
      {data.map((_, index) => (
        <TimelineItem key={index} itemData={data[index]} />
      ))}
    </div>
  );
};

export default HalfTimeline;
