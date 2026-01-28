import AnimatedBackground from '@/app/components/skills/animated-background';
import './skills.css';

export default function AnimatedCardBackgroundHover() {
  const ITEMS = [
    {
      id: 1,
      title: 'Frontend',
      description: 'CSS, React, Next.js, Bootstrap,',
    },
    {
      id: 2,
      title: 'Backend',
      description: 'Java, C#, PHP, Node.js'
    },
    {
      id: 3,
      title: 'Database',
      description: 'SQL (MySQL / SQLite)',
    },
    {
      id: 4,
      title: 'Tools and Environments',
      description: 'Git / GitHub, Bash',
    },
    {
      id: 5,
      title: 'Development Practices',
      description: 'Team collaboration, Academic projects',
    },
    
  ];

  return (
    <div className='skills-container'>
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
