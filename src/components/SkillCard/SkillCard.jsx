import "./styles.css";

const SkillCard = ({ name, image }) => {
  return (
    <div className="skills_card">
      <img className="skills__cardimage" src={image} alt={name} />
    </div>
  );
};

export default SkillCard;
