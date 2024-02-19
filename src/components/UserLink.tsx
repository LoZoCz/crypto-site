import { Link } from "react-router-dom";

type UserLinkProps = {
  content: string;
  path: string;
  addClasses?: string[];
};

const UserLink = ({ content, path, addClasses = [] }: UserLinkProps) => {
  return (
    <Link to={path} className={`userLink ${addClasses.join(" ")}`}>
      {content}
    </Link>
  );
};

export default UserLink;
