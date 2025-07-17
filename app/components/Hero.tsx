import Card from "./Card";
import ShinyText from './external/ShinyText';
import socialLinksData from '../lib/socialLinks.json';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaDownload } from 'react-icons/fa';
import React from 'react';

interface SocialLink {
    name: string;
    url: string;
    icon: string;
}

const socialLinks: SocialLink[] = socialLinksData;

const iconMap: { [key: string]: React.ComponentType<{ size: number }> } = {
    Github: FaGithub,
    Linkedin: FaLinkedin,
    Twitter: FaTwitter,
    Mail: FaEnvelope,
};

export default function Hero() {
    return (
        <div
            id="about"
            className="flex flex-row items-center justify-center h-screen space-x-12"
        >
            <div>
                <Card />
            </div>
            <div style={{ width: '10vw' }} />
            <div style={{ maxWidth: '40vw', fontSize: '20px' }}>
                <ShinyText text="I'm a rising junior at IIT Delhi, pursuing a B.Tech in Engineering Physics with a minor in Computer Science. My skillset is uniquely diverse — I have varying experience with everything from HFT relevant Low Level Programming to Machine Learning to Cybersecurity; Webdev to Design; Math, Physics, and more." disabled={false} speed={3} className='custom-class' />

                <div style={{ height: '2em' }} />
                <ShinyText text="This page showcases some of the projects and experiences I've gathered along the way." disabled={false} speed={3} className='custom-class' />

                <div style={{ height: '2em' }} />
                <div className="flex items-center gap-5">
                    {socialLinks.map((link) => {
                        const Icon = iconMap[link.icon];
                        if (!Icon) return null;
                        return (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={link.name}
                                className="hover:text-white transition-colors duration-200"
                            >
                                <Icon size={22} />
                            </a>
                        );
                    })}
                    <a
                        href="/resume_concise.pdf"
                        download="Mano_Sriram_Resume.pdf"
                        className="flex items-center gap-2 hover:text-white transition-colors duration-200 border border-gray-500 px-3 py-1.5 rounded-lg text-sm ml-2"
                    >
                        <FaDownload />
                        <span>Download CV</span>
                    </a>
                </div>
            </div>
        </div>
    );
}