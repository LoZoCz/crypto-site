import GlassyBox from "../../../components/GlassyBox";

type TimelineItemProps = {
  itemData: {
    title: string;
    image: string;
    desc: string;
  };
};

const TimelineItem = ({ itemData }: TimelineItemProps) => {
  return (
    <GlassyBox addClasses={["timeline__box-item"]}>
      <h2 className="timeline__box-itemTitle h2">{itemData.title}</h2>
      {itemData.image && (
        <img
          src={itemData.image}
          alt="timeline image"
          className="timeline__box-image p"
        />
      )}
      {itemData.desc && (
        <p className="timeline__box-itemDesc p">{itemData.desc}</p>
      )}
    </GlassyBox>
  );
};

export default TimelineItem;
