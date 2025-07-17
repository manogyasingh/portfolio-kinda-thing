import React from "react";
import {
    Code,
    Terminal,
    Brain,
    Binary,
    Atom,
    Users,
} from "lucide-react";
import ChromaGrid, { type ChromaItem } from "./external/ChromaGrid";

interface SkillCardProps {
    category: string;
    iconName: string;
    skills: ChromaItem[];
}

const iconMap: { [key: string]: React.ComponentType<any> } = {
    Code,
    Terminal,
    Brain,
    Binary,
    Atom,
    Users,
};

const SkillCard: React.FC<SkillCardProps> = ({
    category,
    iconName,
    skills,
}) => {
    const Icon = iconMap[iconName];

    return (
        <div className="backdrop-blur-[30px] rounded-2xl p-6 break-inside-avoid mb-8 border border-white/10">
            <div className="flex items-center mb-4">
                {Icon && <Icon className="w-6 h-6 mr-3 text-gray-400" />}
                <h3 className="text-xl font-bold">{category}</h3>
            </div>
            <ChromaGrid items={skills} />
        </div>
    );
};

export default SkillCard; 