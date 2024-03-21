
// import React, { FC, useEffect, useState } from "react";
// import {
//   ProSidebar,
//   Menu,
//   MenuItem,
//   SidebarHeader,
//   SidebarFooter,
//   SidebarContent,
// } from "react-pro-sidebar";
// import {
//   HomeOutlinedIcon,
//   ArrowForwardIosIcon,
//   ArrowBackIosIcon,
//   PeopleOutlinedIcon,
//   ReceiptOutlinedIcon,
//   BarChatOutlinedIcon,
//   MapOutlinedIcon,
//   GroupsIcon,
//   OndemandyVideoIcon,
//   VideoCallIcon,
//   WebIcon,
//   QuizIcon,
//   WysiwygIcon,
//   ManageHistoryIcon,
//   SettingsIcon,
//   ExitToAppIcon
// } from "./Icon"
// import avatarDefault from "../../../../public/assets/client-3.jpg"
// import { useTheme } from "next-themes"
// import { Box, IconButton, Typography } from "@mui/material";
// import Link from "next/link";
// import { useSelector } from "react-redux";
// import Image from "next/image";


// interface itemProps {
//   title: string;
//   to: string;
//   icon: JSX.Element;
//   selected: string;
//   setSelected: any
// }

// const Item: FC<itemProps> = ({ title, to, icon, selected, setSelected }) => {
//   return (
//     <MenuItem
//       active={selected === title}
//       onClick={() => setSelected(title)}
//       icon={icon}
//     >
//       <Typography className="!text-[16px] dark:text-white !font-Poppins">
//         {title}
//       </Typography>
//       <Link href={to} />
//     </MenuItem>
//   )
// }

// const AdminSidebar = () => {
//   const { user } = useSelector((state: any) => state.auth);
//   const [logout, setLogout] = useState(false);
//   const [isCollapsed, setIsCollapsed] = useState(false);
//   const [selected, setSelected] = useState("Dashboard");
//   const [mounted, setMounted] = useState(false);
//   const { theme, setTheme } = useTheme()

//   useEffect(() => setMounted(true), [])

//   if (!mounted) {
//     return null
//   }
//   const logoutHandler = () => {
//     setLogout(true)
//   }

//   return (
//     <Box
//       sx={{
//         "& .pro-sidebar-inner": {
//           background: `${theme === "dark" ? "#111C43 !important" : "#fff !important"
//             }`,
//         },
//         "& .pro-icon-wrapper": {
//           backgroundColor: "transparent !important",
//         },
//         "& .pro-inner-item:hover": {
//           color: "#868dfb !important",
//         },
//         "& .pro-menu-item.active": {
//           color: "#868dfa !important",
//         },
//         "& .pro-inner-item": {
//           padding: "5px 35px 5px 20px !important",
//           opacity: 1
//         },
//         "& .pro-menu-item": {
//           color: `${theme !== "dark" && "#000"}`,
//         },

//       }}
//       className="!bg-white dark:bg-[#111C43]"
//     >
//       <ProSidebar collapsed={isCollapsed}
//         style={{
//           position: "fixed",
//           top: 0,
//           left: 0,
//           height: "100vh",
//           width: isCollapsed ? "8%" : "16%"
//         }}>

//         <SidebarHeader>
//           {/* Logo add Menu */}
//           <MenuItem
//             onClick={() => setIsCollapsed(!isCollapsed)}
//             icon={isCollapsed ? <ArrowForwardIosIcon /> : undefined}
//             style={{
//               margin: "10px 0 20px 0"
//             }}
//           >

//             {
//               !isCollapsed && (
//                 <Box
//                   display={"flex"}
//                   justifyContent={"space-between"}
//                   alignItems={"center"}
//                   ml={"15px"}
//                 >
//                   <Link href={"/"}>
//                     <h3 className="text-[25px] font-Poppins uppercase dark:text-white text-black">
//                       E-Learning
//                     </h3>
//                   </Link>
//                   <IconButton onClick={() => setIsCollapsed(!isCollapsed)} className="inline-block">
//                     <ArrowBackIosIcon className="text-black dark:text-[#ffffffc1]" />
//                   </IconButton>
//                 </Box>
//               )
//             }
//           </MenuItem>
//           {
//             !isCollapsed && (
//               <Box mb={"25px"}>
//                 <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
//                   <Image
//                     alt="profile-user"
//                     width={100}
//                     height={100}
//                     src={user.avatar ? user.avatar.url : avatarDefault}
//                     style={{
//                       cursor: "pointer",
//                       borderRadius: "50%",
//                       border: "3px solid #5b6fe6"
//                     }}
//                   />
//                 </Box>

//                 <Box textAlign={"center"}>
//                   <Typography
//                     variant="h4"
//                     className="!text-[20px] text-black dark:text-[#ffffffc1]"
//                     sx={{ m: "10px 0 0 0" }}
//                   >
//                     {user.name}
//                   </Typography>
//                   <Typography
//                     variant="h6"
//                     sx={{ m: "10px 0 0 0" }}
//                     className="!text-[20px] text-black dark:text-[#ffffffc1] capitalize"
//                   >
//                     - {user?.role}
//                   </Typography>
//                 </Box>
//               </Box>
//             )
//           }
//         </SidebarHeader>


//           {/* Logo add Menu */}


//           {/* <MenuItem
//             onClick={() => setIsCollapsed(!isCollapsed)}
//             icon={isCollapsed ? <ArrowForwardIosIcon /> : undefined}
//             style={{
//               margin: "10px 0 20px 0"
//             }}
//           > */}

//             {/* {
//               !isCollapsed && (
//                 <Box
//                   display={"flex"}
//                   justifyContent={"space-between"}
//                   alignItems={"center"}
//                   ml={"15px"}
//                 >
//                   <Link href={"/"}>
//                     <h3 className="text-[25px] font-Poppins uppercase dark:text-white text-black">
//                       E-Learning
//                     </h3>
//                   </Link>
//                   <IconButton onClick={() => setIsCollapsed(!isCollapsed)} className="inline-block">
//                     <ArrowBackIosIcon className="text-black dark:text-[#ffffffc1]" />
//                   </IconButton>
//                 </Box>
//               )
//             }
//           </MenuItem>
//           {
//             !isCollapsed && (
//               <Box mb={"25px"}>
//                 <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
//                   <Image
//                     alt="profile-user"
//                     width={100}
//                     height={100}
//                     src={user.avatar ? user.avatar.url : avatarDefault}
//                     style={{
//                       cursor: "pointer",
//                       borderRadius: "50%",
//                       border: "3px solid #5b6fe6"
//                     }}
//                   />
//                 </Box>

//                 <Box textAlign={"center"}>
//                   <Typography
//                     variant="h4"
//                     className="!text-[20px] text-black dark:text-[#ffffffc1]"
//                     sx={{ m: "10px 0 0 0" }}
//                   >
//                     {user.name}
//                   </Typography>
//                   <Typography
//                     variant="h6"
//                     sx={{ m: "10px 0 0 0" }}
//                     className="!text-[20px] text-black dark:text-[#ffffffc1] capitalize"
//                   >
//                     - {user?.role}
//                   </Typography>
//                 </Box>
//               </Box>
//             )
//           } */}
//           {/* <Box paddingLeft={isCollapsed ? undefined : "10%"}> */}
//           <SidebarContent className="overflow-y-auto h-full">
//           <Menu iconShape="square">
//             <Item title="Dashboard"
//               to="/admin"
//               icon={<HomeOutlinedIcon />}
//               selected={selected}
//               setSelected={setSelected}
//             />
//             <Typography
//               variant="h5"
//               sx={{ m: "15px 0 5px 25px" }}
//               className="!text-[18px] text-black dark:text-[#ffffffc1] capitalize !font-[400]"
//             >
//               {!isCollapsed && "Data"}
//             </Typography>
//             <Item title="User"
//               to="/admin/users"
//               icon={<GroupsIcon />}
//               selected={selected}
//               setSelected={setSelected}
//             />
//             <Item title="User"
//               to="/admin/invoices"
//               icon={<ReceiptOutlinedIcon />}
//               selected={selected}
//               setSelected={setSelected}
//             />
//             <Typography
//               variant="h5"
//               sx={{ m: "15px 0 5px 20px" }}
//               className="!text-[18px] text-black dark:text-[#ffffffc1] capitalize !font-[400]"
//             >
//               {!isCollapsed && "Content"}
//             </Typography>

//             <Item title="Create Course"
//               to="/admin/create-course"
//               icon={<VideoCallIcon />}
//               selected={selected}
//               setSelected={setSelected}
//             />
//             <Item title="Live Course"
//               to="/admin/courses"
//               icon={<OndemandyVideoIcon />}
//               selected={selected}
//               setSelected={setSelected}
//             />
//             <Typography
//               variant="h5"
//               sx={{ m: "15px 0 5px 20px" }}
//               className="!text-[18px] text-black dark:text-[#ffffffc1] capitalize !font-[400]"
//             >
//               {!isCollapsed && "Customization"}
//             </Typography>

//             <Item title="Hero"
//               to="/admin/hero"
//               icon={<WebIcon />}
//               selected={selected}
//               setSelected={setSelected}
//             />
//             <Item title="Categories"
//               to="/admin/categories"
//               icon={<WebIcon />}
//               selected={selected}
//               setSelected={setSelected}
//             />

//             <Typography
//               variant="h5"
//               sx={{ m: "15px 0 5px 20px" }}
//               className="!text-[18px] text-black dark:text-[#ffffffc1] capitalize !font-[400]"
//             >
//               {!isCollapsed && "Controllers"}
//             </Typography>

//             <Item title="Manage Team"
//               to="/admin/team"
//               icon={<PeopleOutlinedIcon />}
//               selected={selected}
//               setSelected={setSelected}
//             />
//             <Typography
//               variant="h5"
//               sx={{ m: "15px 0 5px 20px" }}
//               className="!text-[18px] text-black dark:text-[#ffffffc1] capitalize !font-[400]"
//             >
//               {!isCollapsed && "Analytics"}
//             </Typography>
//             <Item title="Courses Analytics "
//               to="/admin/courses-analytics"
//               icon={<PeopleOutlinedIcon />}
//               selected={selected}
//               setSelected={setSelected}
//             />
//             <Item title="Orders Analytics "
//               to="/admin/orders-analytics"
//               icon={<PeopleOutlinedIcon />}
//               selected={selected}
//               setSelected={setSelected}
//             />
//             <Item title="Users Analytics "
//               to="/admin/users-analytics"
//               icon={<PeopleOutlinedIcon />}
//               selected={selected}
//               setSelected={setSelected}
//             />
//             <Typography
//               variant="h5"
//               sx={{ m: "15px 0 5px 20px" }}
//               className="!text-[18px] text-black dark:text-[#ffffffc1] capitalize !font-[400]"
//             >
//               {!isCollapsed && "Extras"}
//             </Typography>

//             <Item title="Settings"
//               to="/admin/settings"
//               icon={<PeopleOutlinedIcon />}
//               selected={selected}
//               setSelected={setSelected}
//             />
//           </Menu>
//           </SidebarContent>

//             <SidebarFooter>
//               <Menu iconShape="square" onClick={logoutHandler}>
//                 <Item title="Logout"
//                   to="/"
//                   icon={<ExitToAppIcon />}
//                   selected={selected}
//                   setSelected={setSelected}
//                 />
//               </Menu>
//             </SidebarFooter>
//             {/* <div onClick={logoutHandler}>
//               <Item title="Logout"
//                 to="/"
//                 icon={<ExitToAppIcon />}
//                 selected={selected}
//                 setSelected={setSelected}
//               />

//             </div> */}
//           {/* </Box> */}

//       </ProSidebar>
//     </Box>);
// };

// export default AdminSidebar;


import React, { FC, useState } from "react";
//react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

import {
  HomeOutlinedIcon,
  ArrowForwardIosIcon,
  ArrowBackIosIcon,
  PeopleOutlinedIcon,
  ReceiptOutlinedIcon,
  BarChatOutlinedIcon,
  MapOutlinedIcon,
  GroupsIcon,
  OndemandyVideoIcon,
  VideoCallIcon,
  WebIcon,
  QuizIcon,
  WysiwygIcon,
  ManageHistoryIcon,
  SettingsIcon,
  ExitToAppIcon
} from "./Icon"
//icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import { SiApacheairflow } from "react-icons/si";
import { GiAbstract050 } from "react-icons/gi";
//sidebar css from react-pro-sidebar module
import "react-pro-sidebar/dist/css/styles.css";
import { Box, IconButton, Typography } from "@mui/material";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useTheme } from "@emotion/react";
import Image from "next/image";
import avatarDefault from "../../../../public/assets/client-3.jpg"

interface itemProps {
  title: string;
  to: string;
  icon: JSX.Element;
  selected: string;
  setSelected: any
}

const Item: FC<itemProps> = ({ title, to, icon, selected, setSelected }) => {
  return (
    <MenuItem
      active={selected === title}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography className="!text-[16px] dark:text-white !font-Poppins">
        {title}
      </Typography>
      <Link href={to} />
    </MenuItem>
  )
}




const AdminSidebar = () => {
  const { user } = useSelector((state: any) => state.auth);
  const [logout, setLogout] = useState(false);
  // const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  //   const [mounted, setMounted] = useState(false);
  // const { theme, setTheme } = useTheme()

  //menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false)
  //custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    // menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    setMenuCollapse(!menuCollapse)
  };
  return (
    <>
      <div id="header">
        {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse} >
          <SidebarHeader>
            {/* Logo add Menu */}
            <MenuItem
              onClick={() => setMenuCollapse(!menuCollapse)}
              icon={menuCollapse ? <ArrowForwardIosIcon /> : undefined}
              style={{
                margin: "10px 0 20px 0"
              }}
            >

              {
                !menuCollapse && (
                  <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    ml={"15px"}
                  >
                    <Link href={"/"}>
                      <h3 className="text-[25px] font-Poppins uppercase dark:text-white text-black">
                        E-Learning
                      </h3>
                    </Link>
                    <IconButton onClick={() => setMenuCollapse(!menuCollapse)} className="inline-block">
                      <ArrowBackIosIcon className="text-black dark:text-[#ffffffc1]" />
                    </IconButton>
                  </Box>
                )
              }
            </MenuItem>
            {
              !menuCollapse && (
                <Box mb={"25px"}>
                  <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
                    <Image
                      alt="profile-user"
                      width={100}
                      height={100}
                      src={user.avatar ? user.avatar.url : avatarDefault}
                      style={{
                        cursor: "pointer",
                        borderRadius: "50%",
                        border: "3px solid #5b6fe6"
                      }}
                    />
                  </Box>

                  <Box textAlign={"center"}>
                    <Typography
                      variant="h4"
                      className="!text-[20px] text-black dark:text-[#ffffffc1]"
                      sx={{ m: "10px 0 0 0" }}
                    >
                      {user.name}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{ m: "10px 0 0 0" }}
                      className="!text-[20px] text-black dark:text-[#ffffffc1] capitalize"
                    >
                      - {user?.role}
                    </Typography>
                  </Box>
                </Box>
              )
            }
          </SidebarHeader>
          <SidebarContent className="overflow-y-auto h-full">

            <Menu iconShape="square" >
              <Item title="Dashboard"
                to="/admin"
                icon={<HomeOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Typography
                variant="h5"
                sx={{ m: "15px 0 5px 25px" }}
                className="!text-[18px] text-black dark:text-[#ffffffc1] capitalize !font-[400]"
              >
                {!menuCollapse && "Data"}
              </Typography>
              <Item title="Courses Analytics "
                to="/admin/courses-analytics"
                icon={<PeopleOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item title="User"
                to="/admin/users"
                icon={<GroupsIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item title="Invoices"
                to="/admin/invoices"
                icon={<ReceiptOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Typography
                variant="h5"
                sx={{ m: "15px 0 5px 20px" }}
                className="!text-[18px] text-black dark:text-[#ffffffc1] capitalize !font-[400]"
              >
                {!menuCollapse && "Content"}
              </Typography>

              <Item title="Create Course"
                to="/admin/create-course"
                icon={<VideoCallIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item title="Live Course"
                to="/admin/courses"
                icon={<OndemandyVideoIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Typography
                variant="h5"
                sx={{ m: "15px 0 5px 20px" }}
                className="!text-[18px] text-black dark:text-[#ffffffc1] capitalize !font-[400]"
              >
                {!menuCollapse && "Customization"}
              </Typography>

              <Item title="Hero"
                to="/admin/hero"
                icon={<WebIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item title="Categories"
                to="/admin/categories"
                icon={<WebIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Typography
                variant="h5"
                sx={{ m: "15px 0 5px 20px" }}
                className="!text-[18px] text-black dark:text-[#ffffffc1] capitalize !font-[400]"
              >
                {!menuCollapse && "Controllers"}
              </Typography>

              <Item title="Manage Team"
                to="/admin/team"
                icon={<PeopleOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Typography
                variant="h5"
                sx={{ m: "15px 0 5px 20px" }}
                className="!text-[18px] text-black dark:text-[#ffffffc1] capitalize !font-[400]"
              >
                {!menuCollapse && "Analytics"}
              </Typography>
              <Item title="Courses Analytics "
                to="/admin/courses-analytics"
                icon={<PeopleOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item title="Orders Analytics "
                to="/admin/orders-analytics"
                icon={<PeopleOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item title="Users Analytics "
                to="/admin/users-analytics"
                icon={<PeopleOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item title="FAQ"
                to="/admin/faq"
                icon={<PeopleOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Typography
                variant="h5"
                sx={{ m: "15px 0 5px 20px" }}
                className="!text-[18px] text-black dark:text-[#ffffffc1] capitalize !font-[400]"
              >
                {!menuCollapse && "Extras"}
              </Typography>

              <Item title="Settings"
                to="/admin/settings"
                icon={<PeopleOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
}
export default AdminSidebar