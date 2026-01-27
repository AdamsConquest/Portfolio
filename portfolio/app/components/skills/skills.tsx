import './skills.css';

export default function Skills() {
    return (
        <div className="skills">
            <h2>Skills</h2>
            
            <div className="skills-grid">
                <div className="skills-category">
                    <h3>Frontend</h3>
                    <div className="skills-list">
                        <div className="skill-item">
                            <span>HTML</span>
                            <span className="skill-icon">💻</span>
                        </div>
                        <div className="skill-item">
                            <span>CSS</span>
                            <span className="skill-icon">🎨</span>
                        </div>
                        <div className="skill-item">
                            <span>JavaScript</span>
                            <span className="skill-icon">⚡</span>
                        </div>
                        <div className="skill-item">
                            <span>Bootstrap</span>
                            <span className="skill-icon">🅱️</span>
                        </div>
                    </div>
                </div>

                <div className="skills-category">
                    <h3>Backend</h3>
                    <div className="skills-list">
                        <div className="skill-item">
                            <span>PHP</span>
                            <span className="skill-icon">🐘</span>
                        </div>
                        <div className="skill-item">
                            <span>SQL (MySQL)</span>
                            <span className="skill-icon">🗄️</span>
                        </div>
                        <div className="skill-item">
                            <span>C#</span>
                            <span className="skill-icon">🔷</span>
                        </div>
                        <div className="skill-item">
                            <span>Java</span>
                            <span className="skill-icon">☕</span>
                        </div>
                    </div>
                </div>

                <div className="skills-category">
                    <h3>Tools & Platforms</h3>
                    <div className="skills-list">
                        <div className="skill-item">
                            <span>Git & GitHub / GitLab</span>
                            <span className="skill-icon">🔧</span>
                        </div>
                        <div className="skill-item">
                            <span>VS Code / Visual Studio</span>
                            <span className="skill-icon">💼</span>
                        </div>
                        <div className="skill-item">
                            <span>Unity</span>
                            <span className="skill-icon">🎮</span>
                        </div>
                        <div className="skill-item">
                            <span>Godot</span>
                            <span className="skill-icon">🤖</span>
                        </div>
                    </div>
                </div>

                <div className="skills-category">
                    <h3>Other</h3>
                    <div className="skills-list">
                        <div className="skill-item">
                            <span>OOP</span>
                            <span className="skill-icon">📦</span>
                        </div>
                        <div className="skill-item">
                            <span>Linux / Terminal</span>
                            <span className="skill-icon">🖥️</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}