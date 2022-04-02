import { useNavigate } from 'react-router-dom';
import '../styles/RjCard.css';
const RjQuestionElement = ({
  level,
  title,
  path,
}: {
  level: string;
  title: string;
  path: string;
}) => {
  const navigate = useNavigate();
  const movePage = () => {
    navigate(`${path}`);
  };
  return (
    <section className="listWrapper" onClick={movePage}>
      <main className="listEmenent">
        <h1>{level}</h1>
        <p>{title}</p>
      </main>
    </section>
  );
};

export default RjQuestionElement;
