import Image from 'next/image';
import './projects.css';

export default function Projects() {
    return (
        <div className="projects">
            <h2>My Projects</h2>
            <ul className="projects-list">
                <li className="project-item">
                    <h3>Crisis Protocol</h3>
                    <Image 
                        src="/images/gameJam.png" 
                        alt=""
                        width={400} 
                        height={300}
                    />
                </li>

                <li className="project-item">
                    <h4>Project 2</h4>
                    <Image 
                        src="/images/gameJam.png" 
                        alt=""
                        width={400} 
                        height={300}
                    />
                </li>

                <li className="project-item">
                    <h4>Project 3</h4>
                    <Image 
                        src="/images/gameJam.png" 
                        alt=""
                        width={400} 
                        height={300}
                    />
                </li>
            </ul>
        </div>
    );
}