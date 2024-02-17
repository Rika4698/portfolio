import Marquee from "react-fast-marquee";
import HtmlLogo from "./../../src/assets/skills/html.png";
import CssLogo from "./../../src/assets/skills/css.png";
import TailwindLogo from "./../../src/assets/skills/tailwind.png";

import JsLogo from "./../../src/assets/skills/js.png";
import ReactLogo from "./../../src/assets/skills/reactjs.png";
import NodejsLogo from "./../../src/assets/skills/nodejs.png";
import ExpressLogo from "./../../src/assets/skills/expres.js.png";
import FirebaseLogo from "./../../src/assets/skills/firebase.png";
import GitLogo from "./../../src/assets/skills/git.png";
import GitHubLogo from "./../../src/assets/skills/github.png";
import MongoDbLogo from "./../../src/assets/skills/mongodb.png";
import CLogo from "./../../src/assets/skills/cprogramming.png";
import CpLogo from "./../../src/assets/skills/c++.png";

import VsCodeLogo from "./../../src/assets/skills/vscode.png";

const Experience = () => {
    return (
        <div>
            <div id="skills" className=" py-20 bg-gray-900 text-white">
      <h3 className="text-4xl text-center font-clashDisplay font-semibold underline underline-offset-8 decoration-primary">
          My Experience 
        </h3>
        <Marquee className="container mx-auto my-20 ">
        <div className="mr-10">
         {/* className='glow-animation bg-[#ff6f0130] w-fit p-2 rounded-lg'> */}
          <img className='w-[100px]' src={HtmlLogo} alt="html logo" />
                            <span className='text-center text-[10px] block'>html</span>
          </div>
          <div className="mr-10"> 
            {/* className='bg-[#0278bd30] w-fit p-2 rounded-lg'> */}
          <img className='w-[100px]' src={CssLogo} alt="css logo" />
                            <span className='text-center text-[10px] block'>css</span>
          </div>
          <div className="mr-10"> 
            {/* className='bg-[#05acc130] w-fit p-2 rounded-lg'> */}
          <img className='w-[100px]' src={TailwindLogo} alt="tailwind logo" />
                            <span className='text-center text-[10px] block'>tailwind css</span>
          </div>
          <div className="mr-10">
            {/* className='bg-[#fed70350] w-fit p-2 rounded-lg'> */}
          <img className='w-[100px]' src={JsLogo} alt="js logo" />
                            <span className='text-center text-[10px] block'>javascript</span>
          </div>
          <div className="mr-10">
             {/* className='bg-[#3977bd35] w-fit p-2 rounded-lg'> */}
          <img className='w-[100px]' src={ReactLogo} alt="reactjs logo" />
                            <span className='text-center text-[10px] block'>react js</span>
          </div>
          <div className="mr-10">
             {/* className='bg-[#21a36635] w-fit p-2 rounded-lg'> */}
          <img className='w-[100px]' src={NodejsLogo} alt="nodejs logo" />
                            <span className='text-center text-[10px] block'>node js</span>
          </div>
          <div className="mr-10">
             {/* className='bg-[#00000038] w-fit p-2 rounded-lg'> */}
          <img className='w-[100px]' src={ExpressLogo} alt="exress logo" />
                            <span className='text-center text-[10px] block'>express js</span>
          </div>
          <div className="mr-10">
             {/* className='bg-[#4caf5030] w-fit p-2 rounded-lg'> */}
          <img className='w-[100px]' src={MongoDbLogo} alt="mongodb logo" />
                            <span className='text-center text-[10px] block'>mongodb</span>
          </div>
          <div className="mr-10">
             {/* className='bg-[#ffc40345] w-fit p-2 rounded-lg'> */}
          <img className='w-[100px]' src={FirebaseLogo} alt="firebase logo" />
                            <span className='text-center text-[10px] block'>firebase</span>
          </div>
          <div className="mr-10">
             {/* className='bg-[#f4511e35] w-fit p-2 rounded-lg'> */}
          <img className='w-[100px]' src={GitLogo} alt="git logo" />
                            <span className='text-center text-[10px] block'>git</span>
          </div>
          <div className="mr-10">
             {/* className='bg-[#00000030] w-fit p-2 rounded-lg'> */}
          <img className='w-[100px]' src={GitHubLogo} alt="github logo" />
                            <span className='text-center text-[10px] block'>github</span>
            
          </div>
          <div className="mr-10">
             {/* className='bg-[#0088d130] w-fit p-2 rounded-lg'> */}
          <img className='w-[100px]' src={VsCodeLogo} alt="vscode logo" />
                            <span className='text-center text-[10px] block'>vs code</span>
            
          </div>
          <div className="mr-10">
             {/* className='bg-[#565f9f30] w-fit p-2 rounded-lg'> */}
          <img className='w-[100px]' src={CLogo} alt="c logo" />
                            <span className='text-center text-[10px] block'>c programming</span>
            
          </div>
          <div className="mr-10">
             {/* className='bg-[#0277bd30] w-fit p-2 rounded-lg'> */}
                            <img className='w-[100px]' src={CpLogo} alt="java logo" />
                            <span className='text-center text-[10px] block'>c++ programming</span>
                        </div>
          
        </Marquee>
        </div>
      </div>
    );
};

export default Experience;