import AnimatedBackground from '@/app/components/Skills/animated-background';
import './skills.css';

export default function AnimatedCardBackgroundHover() {  const ITEMS = [
    {
      id: 1,
      title: 'Frontend',
      description: 'React, Next.js, TypeScript, Tailwind CSS, HTML5, CSS3',
    },
    {
      id: 2,
      title: 'Backend',
      description: 'Node.js, Java, C#, PHP, REST APIs, Authentication'
    },
    {
      id: 3,
      title: 'Database',
      description: 'MySQL, SQLite, SQL, Database Design & Optimization',
    },
    {
      id: 4,
      title: 'Tools & DevOps',
      description: 'Git, GitHub, VS Code, Vercel, Linux/Bash, npm',
    },
    {
      id: 5,
      title: 'Game Development',
      description: 'Unity 3D, C#, WebGL, Game Mechanics, Physics'
    },
    {
      id: 6,
      title: 'Soft Skills',
      description: 'Problem-solving, Collaboration, Communication, Quick Learner'
    },
    
  ];
  return (
    <div className='skills-container'>
      <h2 className='skills-h2'>Skills & Expertise</h2>
      <div className='skills-grid'>
        <AnimatedBackground
        className='skills-background'
        transition={{
          type: 'spring',
          bounce: 0.2,
          duration: 0.6,
        }}
        enableHover
      >
        {ITEMS.map((item, index) => (
          <div key={index} data-id={`card-${index}`}>
            <div className='skill-card-content'>
              <h3 className='skill-title'>
                {item.title}
              </h3>
              <p className='skill-description'>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </AnimatedBackground>
      </div>
    </div>
  );
}
