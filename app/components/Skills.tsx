import React from "react";
import skillsData from "../lib/skillsData.json";
import SkillCard from "./SkillCard";

const gradients = [
    "linear-gradient(145deg, #4F46E5, #000)",
    "linear-gradient(210deg, #10B981, #000)",
    "linear-gradient(165deg, #F59E0B, #000)",
    "linear-gradient(195deg, #EF4444, #000)",
    "linear-gradient(225deg, #8B5CF6, #000)",
    "linear-gradient(135deg, #06B6D4, #000)",
];

const Skills = () => {
    const categories = skillsData.map((category, categoryIndex) => ({
        ...category,
        skills: category.skills.map((skill, skillIndex) => ({
            title: skill.name,
            subtitle: skill.experience,
            gradient: gradients[(categoryIndex * 5 + skillIndex) % gradients.length],
        })),
    }));

    return (
        <div className="py-20" id="skills">
            <h2 className="text-4xl font-bold text-center mb-4">Technical Skills</h2>
            <p className="text-lg text-center text-gray-400 mb-12">
                Hover over any skill to see specific instances where I've demonstrated
                proficiency.
            </p>
            <div className="container mx-auto px-4">
                <div className="columns-1 md:columns-2 lg:columns-3 gap-8">
                    {categories.map((category, index) => (
                        <SkillCard
                            key={index}
                            category={category.category}
                            iconName={category.iconName}
                            skills={category.skills}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;