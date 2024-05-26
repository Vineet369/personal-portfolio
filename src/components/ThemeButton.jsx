import React from "react";
import useTheme from "../context/Theme";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import Checkbox from '@mui/material/Checkbox';


export default function ThemeBtn() {
    
    const {themeMode, lightTheme, darkTheme} = useTheme()
    const onChangeBtn = (e) => {
        const darkModeStatus = e.currentTarget.checked
        if (darkModeStatus){
            darkTheme()
        } else {
            lightTheme()
        }
    }
    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <Checkbox
              
                
                icon={<MdDarkMode size={27} className='text-slate-700'/>} checkedIcon={<MdOutlineDarkMode size={27} className='text-slate-300'/>}
                onChange={onChangeBtn}
                checked={themeMode==="dark"}
            />
            {/* <span className="ml-3 text-lg font-medium text-gray-900 dark:text-slate-300">Toggle Theme</span> */}
        </label>
    );
}

