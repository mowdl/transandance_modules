import React from 'react';
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";

const Footer: React.FC = () => {
    return (
        <footer className="flex flex-col items-center justify-center py-6 bg-gray-50 mt-10">
            <p className="text-sm text-gray-500  mb-4">
                Made by mowdl
            </p>
            <div className="flex space-x-6">
                <a
                    href="https://github.com/mowdl/transandance_modules"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                    <SiGithub size={24} />
                </a>
                <a
                    href="https://www.linkedin.com/in/mouad-el-mekaoui-934bb6207/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                    <SiLinkedin size={24} />
                </a>
                <a
                    href="https://x.com/mowdl_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                    <SiX size={24} />
                </a>
            </div>
        </footer>
    );
};

export default Footer; 