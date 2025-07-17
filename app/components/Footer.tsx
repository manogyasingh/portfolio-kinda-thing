import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { IconType } from 'react-icons';
import socialLinksData from '../lib/socialLinks.json';

interface SocialLink {
    name: string;
    url: string;
    icon: string;
}

const socialLinks: SocialLink[] = socialLinksData;

const iconMap: { [key: string]: IconType } = {
    Github: FaGithub,
    Linkedin: FaLinkedin,
    Twitter: FaTwitter,
    Mail: FaEnvelope,
};

const Footer = () => {
    return (
        <footer className="w-full py-8 text-white/50">
            <div className="w-[80%] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-white/10 pt-8">
                <p className="text-sm text-center sm:text-left">&copy; {new Date().getFullYear()} Manogya Singh. All Rights Reserved.</p>
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
                                <Icon />
                            </a>
                        );
                    })}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
