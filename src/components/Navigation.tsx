import {Link , useLocation} from 'react-router-dom'
import {Flex , Button , Box} from '@radix-ui/themes'
import {IoHome} from 'react-icons/io5'
import {FaUser} from 'react-icons/fa'
import { MdOutlineMapsHomeWork } from "react-icons/md";


function Navigaton(){
    const location = useLocation();
    const isActive = (path:string) =>{
        return location.pathname === path;
    }

    return(
        <Box className='border-b border-gray-200  bg-[#450693]'>
            <Flex direction="row" gap="7" p="6" justify="center" wrap="wrap" >
                <Link to="/" className='no-underline'>
                    <Button variant={isActive('/')? 'solid' : 'soft'} size='3' color='crimson'>
                        <IoHome size={18}>หน้าหลัก</IoHome>
                    </Button>
                </Link >
                    
                <Link to='/profile' className='no-underline'>
                    <Button  variant={isActive('/profile')? 'solid' : 'soft'} size='3' color='crimson'>
                        <FaUser size={16}>ประวัติส่วนตัว</FaUser>
                    </Button>
                </Link>
                <Link to='/experience' className='no-underline'>
                    <Button  variant={isActive('/experience')? 'solid' : 'soft'} size='3' color='crimson'>
                        <MdOutlineMapsHomeWork size={16}>ประสบการณ์ทำงาน</MdOutlineMapsHomeWork>
                    </Button>
                </Link>
            </Flex>
        </Box>
    )
}

export default Navigaton