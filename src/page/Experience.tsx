

import CardSkill from '../components/CardSkill'

function Experience() {
  return (
    
    <div className="bg-[#473472] min-h-screen w-full ">
        <div className="flex flex-row h-full justify-center  2xl:items-center  flex-wrap gap-[20px]">
                
                <CardSkill imgsrc='https://i.pinimg.com/474x/fe/57/10/fe571020f2e476bca20e1ae6441569ec.jpg' name='HTML CSS' score={90}></CardSkill>


                <CardSkill imgsrc='https://www.w3schools.com/js/img_javascript_480.jpg' name='JavaScript' score={60}></CardSkill>

                <CardSkill imgsrc='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Typescript.svg/1200px-Typescript.svg.png' name='TypeScript' score={50}></CardSkill>

                <CardSkill imgsrc='https://images.icon-icons.com/2108/PNG/512/react_icon_130845.png' name='React' score={70}></CardSkill>

                <CardSkill imgsrc='https://images-cdn.openxcell.com/wp-content/uploads/2024/07/25090553/nodejs-inner.webp' name='Node JS' score={20}></CardSkill>

                <CardSkill imgsrc='https://datascientest.com/en/files/2024/04/git.jpg' name='Git' score={70}></CardSkill>

                <CardSkill imgsrc='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDKn3vA2YUbXzN0ZC3gALWJ08gJN-Drl15w&s' name='Tailwind' score={80}></CardSkill>

                <CardSkill imgsrc='https://avatars.githubusercontent.com/u/75042455?s=280&v=4' name='Radix UI' score={40}></CardSkill>
                 

            
        </div>
    
    </div>
  );
}

export default Experience;
