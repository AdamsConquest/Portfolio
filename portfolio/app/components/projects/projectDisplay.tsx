import { AnimatedTabs } from "@/app/components/projects/animated-tabs"
import './projects.css';

const AnimatedTabsDemo = () => {
    return (
        <div className="animated-tabs-container">
            <h2 className="animated-tabs-title">Projects</h2>
            <AnimatedTabs/>
        </div>
    );
    
}

export { AnimatedTabsDemo }