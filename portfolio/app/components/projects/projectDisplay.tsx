import { AnimatedTabs } from "@/app/components/projects/animated-tabs"
import './projects.css';

const AnimatedTabsDemo = () => {
    return (
        <div className="animated-tabs-container">
            <h1 className="animated-tabs-title">Projects</h1>
            <AnimatedTabs/>
        </div>
    );
    
}

export { AnimatedTabsDemo }