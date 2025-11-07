import {Box , Container , Heading , Text , Card ,Flex , Avatar , Badge , Separator , Progress} from '@radix-ui/themes'

function Profile(){
    return(
        
        <Container size="3" py="6"  className='h-screen bg-[#8C00FF]'>
        <Card>
            <Flex direction="column" gap="4">
                <Flex align="center" gap="4">
                    <Avatar size="8" radius='full' fallback="SP" color='blue' src='/public/profile/profilepic2.jpg'/>
                        
                    
                    <Box>
                        <Heading size="7">
                            ธีรภัทร ประชัน
                        </Heading>
                        <Text size="3" color='gray'>
                            นักศึกษาวิศวะกรรมคอมะพิวเตอร์
                        </Text>
                    </Box>
                </Flex>
                    <Separator size="4"/>
                    <Box>
                        <Heading size='5' mb="3">
                            เกี่ยวกับฉัน
                        </Heading>
                        <Text>
                            สวัสดีครับ ผมชื่อนายธีรภัทร ประชัน เป็นนักศึกษาที่มีความสนใจด้านการพัฒนาเว็บไซต์เเละเทคโนโลยีสมัยใหม่ ชอบเรียนรู้สิ่งใหม่ๆ เเละพัฒนาทักษะการเขียนโปรเเกรมอยู่เสมอ
                        </Text>
                    </Box>
                    <Separator size="4"/>

                    <Box>
                        <Heading size="5" mb="3">
                            การศึกษา
                        </Heading>
                        <Card mb="3">
                            <Flex direction="column" gap="2" >
                                <Heading size="4"> ปริญญาตรี สาขาวิศวกรรม วิศวกรรมศาสตร์บัณฑิตย์</Heading>
                                <Text color='gray' >สาขาวิศวกรรมคอมพิวเตอร์</Text>
                                <Text color='gray'>วิศวกรรมศาสตร์บัณฑิตย์</Text>
                                <Text size="2" color='gray' >2566 - ปัจจุบัน</Text>

                            </Flex>

                        </Card>
                    </Box>
                    <Separator size='4'/>
                    <Box>
                        <Heading size="5" mb="3"></Heading>
                        <Flex gap="3" wrap='wrap'>
                            <Badge size="2" color='blue'>HTML CSS</Badge>
                            <Badge size="2" color='green'>JavaScript</Badge>
                            <Badge size="2" color='purple'>TypeScript</Badge>
                            <Badge size="2" color='orange'>React</Badge>
                            <Badge size="2" color='red'>Node.js</Badge>
                            <Badge size="2" color='cyan'>Git</Badge>
                            <Badge size="2" color='pink'>Tailwind</Badge>
                            <Badge size="2" color='indigo'>Radix UI</Badge>
                        </Flex>
                    </Box>

                

            </Flex>
            
            
        </Card>
    </Container>
    )
    
}

export default  Profile