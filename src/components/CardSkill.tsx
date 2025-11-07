import React from 'react'
import {

  Text,

  Flex,
  Avatar,

  Progress,
} from "@radix-ui/themes";


interface CardSkillProps{
    imgsrc: string,
    name : string,
    score : number
}

const CardSkill:React.FC<CardSkillProps> = ({imgsrc,name,score}) => {
    return (
        <Flex direction='row' gap="7"  className="md:p-[30px] p-[20px] 2xl:w-[1000px]">
                    
            <Avatar src={imgsrc} fallback="A" className="xl:!w-[130px] xl:!h-[130px] lg:!w-[100px] lg:!h-[100px] md:!w-[80px] md:!h-[80px] !w-[60px] !h-[60px]"/>
                    
                    
            <div className='flex flex-col md:gap-[5px]  lg:gap-[10px] 2xl:w-[800px] lg:w-[200px] md:w-[200px] w-[100px]'>
                <Text className="lg:text-[30px] md:text-[24px] font-bold text-white text-start">{name}</Text>
                <Flex direction="column" gap="4" maxWidth="300px" >
                    <Progress value={score}  variant="soft" size='3'/>
                </Flex>
                        
            </div>
                    
        </Flex>
    )
}

export default CardSkill