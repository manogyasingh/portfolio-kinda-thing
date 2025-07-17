import { FaGithub } from "react-icons/fa";
import Dither from "./external/Dither";

const Projects = () => {
    return (
        <div id="projects" className="relative w-[80%] h-[70vh] overflow-hidden mx-auto shadow-2xl border border-white/10 backdrop-blur-sm bg-black/20" style={{ borderRadius: '50px' }}>
            <Dither
                waveColor={[0.5, 0, 0.2]}
                disableAnimation={false}
                enableMouseInteraction={true}
                mouseRadius={0.3}
                colorNum={4}
                waveAmplitude={0.3}
                waveFrequency={3}
                waveSpeed={0.05}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-8">
                <h2 className="text-5xl font-bold mb-4 text-shadow-lg">Projects</h2>
                <p className="text-xl max-w-2xl mb-8 text-white/80 text-shadow">
                    I've built a bunch of stuff. Check it out on my GitHub.
                </p>
                <a
                    href="https://github.com/manogyasingh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-xl text-lg font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105"
                >
                    <FaGithub size={24} />
                    <span>View on GitHub</span>
                </a>
            </div>
        </div>
    );
};

export default Projects;

