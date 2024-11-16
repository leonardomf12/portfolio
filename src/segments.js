import { FaLinkedin, FaGithub} from 'react-icons/fa';  // Importing specific icons
import { SiLeetcode } from 'react-icons/si';


export function Header(){
    return (
        <div className="h-full bg-slate-900 flex items-center justify-center">
            <div className="h-full w-[50%] bg-green-400 flex items-center justify-center">
                <span className="">Leonardo Ferreira</span>
            </div>
            <div className="h-full w-[50%] bg-white flex items-center justify-center">
                <button className="bg-blue-500 p-2 rounded">Home</button>
                <button className="bg-blue-600 p-2 rounded">Experience</button>
                <button className="bg-blue-700 p-2 rounded">Projects</button>
                <button className="bg-blue-700 p-2 rounded">Contact Me</button>
            </div>
        </div>
    );
}

export function Home(){
    return (
        <div className="h-full w-full bg-blue-400 flex items-center justify-center">

            <div className="h-full w-1/2 bg-red-200 flex items-center justify-center">
                <img src="linkedin_pic.jpeg" alt="LinkedinPic" className="w-[60%] h-[60%] rounded-full"/> 
            </div>

            <div className="h-full w-1/2 bg-green-300 flex flex-col items-center justify-center">
                <span className="w-full bg-slate-500 text-4xl flex items-center justify-center">Hello, I'm</span>
                <span className="w-full bg-slate-800 text-6xl font-bold flex items-center justify-center text-white">Leonardo Ferreira</span>
                <span className="w-full bg-slate-500 text-4xl flex items-center justify-center">Machine Learning Engineer</span>
                <div>
                    {/* CV and CONTACT ME BUTTONS DIV */}
                    <button className="bg-white p-3 font-bold rounded-full border-2 border-black text-black">Download CV</button>
                    <button className="bg-black p-3 font-bold rounded-full border-2 border-black text-white">Contact Me</button>
                </div>
                <div className="w-full bg-slate-100 text-4xl flex items-center justify-center">
                    {/* ICONS DIV */}
                    <IconLink platform={"linkedin"}/>
                    <IconLink platform={"leetcode"}/>
                    <IconLink platform={"github"}/>
                </div>
            </div>
        </div>
    );
}

const IconLink = ({platform}) => {
    const TagFunction = ({href_link, Icon}) => {
        return (
            <a href={href_link} target="_blank" rel="noreferrer">
                <button className="p-4"> {Icon} </button>
            </a>
        );
    }

    const MyLinks = {
        "linkedin": "https://www.linkedin.com/in/leonardoferreira12/",
        "github": "https://github.com/leonardomf12",
        "leetcode": "https://leetcode.com/u/leonardoeng12/",
    }

    const IconsDict = {
        "linkedin": <FaLinkedin />,
        "github": <FaGithub />,
        "leetcode": <SiLeetcode />,
    }


    return(
        TagFunction({ href_link: MyLinks[platform], Icon: IconsDict[platform] })
    );
}


