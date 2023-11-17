import "./styles.css";

const SkillsCard = ({ name, image }) => {
  return (
    <div className="skill-card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
    </div>
  );
};

export default SkillsCard;
