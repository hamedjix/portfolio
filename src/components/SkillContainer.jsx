import skillsData from '../data/skillsData';

const Skill = (skills) => {
  return (
    <div className='skills'>
      {skillsData.map((skill) => (
        <div className='skill' key={skill.name}>
          <img className='skill-img' src={skill.img} alt={skill.name} />
          <div className='skill-description'>
            <h3>{skill.name}</h3>
            <p className=''>{skill.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skill;
