// import Image from "next/image";

export default function FooterUI () {

return (
    <div className="bg-gray-800 w-full h-[100px]  flex justify-center">
        <div className="max-w-screen-lg w-full flex flex-col md:flex-row justify-center md:justify-between items-center">
        <div className="flex items-center">
        <h1 className="text-white">2025 © Marco Caiazza</h1>
        </div>

        <div className="flex">

            <a href="https://github.com/MarcoCaiazza" target="blank">
            <img src="/githubWhite.png" alt="icons-github" className="w-10 h-10" 

            />
            </a>
            <a href="https://www.linkedin.com/in/marco-caiazza-8898a3266/" target="blank">
            <img src="/linkedinWhite.png" alt="icons-linkedin" className="w-10 h-10"
            />
            </a>
        </div>
        </div>
    </div>
)
}