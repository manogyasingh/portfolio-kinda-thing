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
            className="flex flex-col lg:flex-row items-center justify-center min-h-screen px-4 py-8 lg:py-0 lg:space-x-12 space-y-8 lg:space-y-0"
        >
            <div className="h-[75px] block lg:hidden" />
            <div className="flex-shrink-0">
                <Card />
            </div>
            <div className="w-full max-w-2xl lg:max-w-3xl">
                <div className="text-base sm:text-lg lg:text-xl">
                    <ShinyText
                        text="I'm a rising junior at IIT Delhi, pursuing a B.Tech in Engineering Physics with a minor in Computer Science. My skillset is uniquely diverse — I have varying experience with everything from low level and competitive programming to machine learning to cybersecurity; webdev to design; math, physics, and more."
                        disabled={false}
                        speed={3}
                        className='custom-class'
                    />

                    <div className="h-6 sm:h-8" />
                    <ShinyText
                        text="This page showcases some of the projects and experiences I've gathered along the way."
                        disabled={false}
                        speed={3}
                        className='custom-class'
                    />

                    <div className="h-6 sm:h-8" />
                    <div className="flex flex-wrap items-center gap-3 sm:gap-5">
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
                            download="ManogyaSingh_Resume.pdf"
                            className="flex items-center gap-2 hover:text-white transition-colors duration-200 border border-gray-500 px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg text-xs sm:text-sm ml-0 sm:ml-2 mt-2 sm:mt-0"
                        >
                            <FaDownload />
                            <span>Download CV</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}