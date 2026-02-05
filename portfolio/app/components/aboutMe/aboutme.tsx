import './aboutme.css';


export default function AboutMe() {    return (        <div className="about-me">
            <h2 className="about-me-title">About Me</h2>
            <p className="about-me-text">
                I'm a computer science student from Montreal. I enjoy building intuitive, responsive web applications while keeping up to date with the latest tech news. I'm passionate about solving complex problems and continuously expanding my technical skills through personal projects and coursework.
            </p>
            <div className="about-highlights">
                <div className="highlight-item">    
                    <span>Problem-Solving</span>
                </div>
                <div className="highlight-item">
                    <span>Full-Stack Development</span>
                </div>
                <div className="highlight-item">
                    <span>Eager to Learn</span>
                </div>
            </div>
        </div>
    );
}