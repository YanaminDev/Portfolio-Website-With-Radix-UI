import {
  Box,
  Container,
  Heading,
  Text,
  Card,
  Flex,
  Inset,
  Strong,
  AspectRatio,
  Avatar,
  Link,
  Button,
} from "@radix-ui/themes";
import { Link as RouterLink } from "react-router-dom";

function Home() {
  return (
    <div>
      <Flex
        direction="row"
        gap="5"
        align="center"
        justify="center"
        className="
          h-[300px] w-screen
         drop-shadow-2xl
          px-8
          md:h-[600px]
          flex-col-reverse md:flex-row
          text-center md:text-left
          overflow-hidden
        
        "
      >
        <div
          className="
      absolute inset-0
      bg-[url('https://images.pexels.com/photos/6424591/pexels-photo-6424591.jpeg')]
      bg-cover bg-center
      filter blur-md brightness-75
      scale-110
    "
        ></div>

        <Flex direction="column" gap="4" justify="center" className="h-full">
          <Text
            highContrast
            className="
            xl:text-[110px] lg:text-[70px] md:text-[50px] text-[30px]
              font-poppins
              text-[#FFC400]
              font-extrabold
              leading-tight
              tracking-wide
              drop-shadow-[0_5px_15px_rgba(0,0,0,0.6)]
              uppercase

            "
          >
            WELCOME TO MY WEBSITE
          </Text>

          <Text
            className="
              font-kanit
              text-[#FFE08C]
              font-semibold
              tracking-widest
              drop-shadow-md
              text-[18px] md:text-[24px] lg:text-[50px]
              text-center
              
            "
          >
            introduction and personal history
          </Text>

          <Flex direction='row'  className="!self-center md:gap-[70px] gap-[20px] mt-[20px]">
            <RouterLink to="/profile" className='no-underline'>
              <Button variant="classic" color="crimson" className="md:!w-[150px] md:!h-[60px] !w-[100px] !h-[40px] !text-[12px] md:!text-[18px]" >INFORMATION</Button>
            </RouterLink>
            <RouterLink to="/experience" className='no-underline'>
              <Button variant="classic" color="crimson" className="md:!w-[150px] md:!h-[60px] !w-[100px] !h-[40px] !text-[12px] md:!text-[18px]" >MY SKILL</Button>
            </RouterLink>
            
          </Flex>
          
          
        </Flex>
      </Flex>

      <Container
        size="2"
        py="6"
        className="bg-[#450693] md:h-[1100px] lg:h-[650px] w-screen p-[30px] flex justify-center"
      >
        <Box>
          <Flex
            direction={{ initial: "column", md: "row" }}
            gap="5"
            justify="center"
            className="p-2 items-center"
          >
            <Box className="flex-1 md:min-w-[250px] min-w-[150px] max-w-[270px]">
              <Card
                className="h-full flex flex-col transform transition-transform duration-300 
      hover:scale-105 hover:shadow-2xl hover:-translate-y-2
      cursor-pointer"
              >
                <Inset clip="padding-box" side="top" pb="current">
                  <img
                    src="https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000"
                    alt="Bold typography"
                    style={{
                      display: "block",
                      objectFit: "cover",
                      width: "100%",
                      height: 140,
                      backgroundColor: "var(--gray-5)",
                    }}
                  />
                </Inset>
                <Text as="p" className="text-[8px] md:text-[16px]">
                  <Strong>The reason for this website</Strong>{" "}
                  เว็บไซต์นี้สร้างขึ้นมาเพื่อเเนะนำข้อมูลส่วนตัว ประวัิการศึกษา
                  เเละความสามารถต่างๆ โดยใช้เทคโนโลยี React , React Router ,
                  Radix UI
                </Text>
              </Card>
            </Box>

            <Box className="flex-1 md:min-w-[250px] min-w-[150px] max-w-[270px]">
              <Card
                size="2"
                className="h-full flex flex-col transform transition-transform duration-300 
      hover:scale-105 hover:shadow-2xl hover:-translate-y-2
      cursor-pointer"
              >
                <Inset clip="padding-box" side="top" pb="current">
                  <img
                    src="https://images.wallpaperscraft.com/image/single/code_text_programming_192795_3840x2400.jpg"
                    alt="Bold typography"
                    style={{
                      display: "block",
                      objectFit: "cover",
                      width: "100%",
                      height: 140,
                      backgroundColor: "var(--gray-5)",
                    }}
                  />
                </Inset>
                <Text as="p" className="text-[8px] md:text-[16px]">
                  <Strong>เกี่ยวกับเว็บไซต์นี้</Strong>{" "}
                  เว็บไซต์นี้สร้างขึ้นมาเพื่อเเนะนำข้อมูลส่วนตัว ประวัิการศึกษา
                  เเละความสามารถต่างๆ โดยใช้เทคโนโลยี React , React Router ,
                  Radix UI
                </Text>
              </Card>
            </Box>

            <Box className="flex-1 md:min-w-[250px] min-w-[150px] max-w-[270px]">
              <Card
                size="2"
                className="h-full flex flex-col transform transition-transform duration-300 
      hover:scale-105 hover:shadow-2xl hover:-translate-y-2
      cursor-pointer"
              >
                <Inset clip="padding-box" side="top" pb="current">
                  <img
                    src="https://www.pixelstalk.net/wp-content/uploads/images5/4K-Programming-Wallpaper-High-Quality.jpg"
                    alt="Bold typography"
                    style={{
                      display: "block",
                      objectFit: "cover",
                      width: "100%",
                      height: 140,
                      backgroundColor: "var(--gray-5)",
                    }}
                  />
                </Inset>
                <Text as="p" className="text-[8px] md:text-[16px]">
                  <Strong>เทคโนโลยีที่ใช้</Strong> - React 19 + TypeScript-
                  React Router สำหรับจัดการหน้า - Radix UI สำหรับ UI Components
                  - Vite สำหรับ Build Tools
                </Text>
              </Card>
            </Box>
          </Flex>
        </Box>

        <div className="w-full mt-[60px] justify-center items-center flex flex-col md:flex-row gap-[10px] md:gap-[20px] ">
          <Link href="https://www.instagram.com/sxn_boxs/">
            <Box className="md:max-w-[240px] w-[150px]">
              <Card>
                <Flex align="center" className="md:gap-[10px] gap-[4px]">
                  <Avatar
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                    radius="full"
                    fallback="T"
                  />
                  <Box>
                    <Text as="div" weight="bold" className="text-[12px]">
                      instagram
                    </Text>
                    <Text as="div" color="gray" className="text-[8px]">
                      sxn_boxn
                    </Text>
                  </Box>
                </Flex>
              </Card>
            </Box>
          </Link>

          <Link href="https://www.facebook.com/bosskooza/?locale=th_TH">
            <Box className="md:max-w-[240px] w-[150px]">
              <Card>
                <Flex align="center" className="md:gap-[10px] gap-[4px]">
                  <Avatar
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png"
                    radius="full"
                    fallback="T"
                  />
                  <Box>
                    <Text as="div" weight="bold" className="text-[12px]">
                      facebook
                    </Text>
                    <Text as="div" color="gray" className="text-[8px]">
                      Theeraphat Prachan
                    </Text>
                  </Box>
                </Flex>
              </Card>
            </Box>
          </Link>

          <Link href="https://www.threads.com/@sxn_boxs">
            <Box className="md:max-w-[240px] w-[150px]">
              <Card>
                <Flex align="center" className="md:gap-[10px] gap-[4px]">
                  <Avatar
                    src="https://img.freepik.com/free-vector/threads-app-logo-icon-isolated-white-background_1017-45264.jpg?semt=ais_hybrid&w=740&q=80"
                    radius="full"
                    fallback="T"
                  />
                  <Box>
                    <Text as="div" weight="bold" className="text-[12px]">
                      threads
                    </Text>
                    <Text as="div" color="gray" className="text-[8px]">
                      sxn_boxn
                    </Text>
                  </Box>
                </Flex>
              </Card>
            </Box>
          </Link>
        </div>
      </Container>
      <Container className="bg-[#FF3F7F] w-screen lg:min-h-[600px] md:min-h-[300px] py-10">
        <Flex
          direction="row"
          justify="center"
          align="center"
          className="lg:h-[500px] md:h-[300px] xl:gap-[90px] lg:gap-[40px] md:gap-[50px] gap-[8px] px-6"
        >
          <img
            src="profile/profilepic.jpg"
            alt="Profile"
            className="
        h-[150px] w-[150px]
        md:h-[200px] md:w-[200px]
        lg:h-[300px] lg:w-[300px]        
        

        object-cover rounded-full
        shadow-2xl
      "
          />

          <Flex
            direction="column"
            className="text-center md:text-left lg:w-[400px] md:w-[400px] 2xl:w-[700px] 2xl:gap-[10px]"
          >
            <Text
              highContrast
              className="font-bold text-[#FFC400] text-[30px] md:text-[60px] lg:text-[70px] leading-tight"
            >
              ABOUT ME
            </Text>

            <Text className=" 2xl:text-[20px] md:text-[16px] text-[8px] font-medium text-white leading-relaxed">
              I’m a passionate Frontend Developer who enjoys turning creative
              ideas into clean, functional, and visually engaging web
              applications. With strong skills in React, TypeScript, and UI/UX
              design principles, I focus on delivering seamless user experiences
              and writing maintainable, efficient code. I’m always eager to
              learn, collaborate, and build products that make a real impact.
            </Text>
          </Flex>
        </Flex>
      </Container>
    </div>
  );
}

export default Home;
