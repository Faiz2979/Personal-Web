import { RiNextjsFill } from "react-icons/ri";
import { SiCloudinary, SiPrisma, SiTailwindcss, SiTypescript } from "react-icons/si";

const projectsFeatured = [
    {
        name: "Personal Website",
        image: "personal-website.png", // Sesuaikan dengan nama file
        href: "#",
        stack: [
            <RiNextjsFill key="nextjs" />,
            <SiTailwindcss key="tailwindcss" />,
            <SiTypescript key="typescript" />,
        ],
    },
    {
        name: "Cat Management System",
        image: "cat-management-system.png", // Sesuaikan dengan nama file
        href: "https://staging-cat-management-system.vercel.app/",
        stack: [
            <RiNextjsFill key="nextjs" />,
            <SiTailwindcss key="tailwindcss" />,
            <SiTypescript key="typescript" />,
            <SiCloudinary key="cloudinary" />,
            <SiPrisma key="prisma" />
        ],
    },
];

export { projectsFeatured };

