import { useNavigate } from 'react-router-dom';
import '../styles/RjCard.css';
const RjQuestionElement = ({
  question,
  title,
  path,
}: {
  question: string;
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
        <h1>{question}</h1>
        <p>{title}</p>
      </main>
    </section>
  );
};

export default RjQuestionElement;
