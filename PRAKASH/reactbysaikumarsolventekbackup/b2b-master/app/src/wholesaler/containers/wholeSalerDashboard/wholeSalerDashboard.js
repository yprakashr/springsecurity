// import {
//   Box,
//   Container,
//   ImageList,
//   Paper,
//   Stack,
//   Typography,
// } from "@mui/material";
// import React from "react";
// import NewOrders_icon from "../../../assets/images/wholesalerImages/New Orders icon.svg";
// import Cancelled from "../../../assets/images/wholesalerImages/Cancelled icon.svg";
// import return1 from "../../../assets/images/wholesalerImages/Returns icon.svg";
// import delivered from "../../..//assets/images/wholesalerImages/delivered.svg";
// import invoicereturn from "../../../assets/images/wholesalerImages/invoice returned.svg";
// import Chartline from "./chartline";
// // import Stack from "@mui/material/Stack";

// const Sales_Order = [
//   {
//     numbers: 30,
//     title: "New Orders",
//     icon: require("../../../assets/images/wholesalerImages/New Orders icon.svg")
//       .default,
//     bgcolor: "#FE744B",
//   },
//   {
//     numbers: 40,
//     title: "Processed",
//     icon: require("../../../assets/images/wholesalerImages/Processed icon.svg")
//       .default,
//     bgcolor: "#353F5E",
//   },
//   {
//     numbers: 10,
//     title: "Shipped",
//     icon: require("../../../assets/images/wholesalerImages/Dispatched icon.svg")
//       .default,
//     bgcolor: "#2983FE",
//   },
//   {
//     numbers: 20,
//     title: "Delivered",
//     icon: require("../../../assets/images/wholesalerImages/Delivered icon.svg")
//       .default,
//     bgcolor: "#54C885",
//   },
// ];
// const invoices = [
//   {
//     numbers: 30,
//     title: "Invoices Processed",
//     icon: require("../../../assets/images/wholesalerImages/Invoice processed.svg")
//       .default,
//     bgcolor: "#FEB64B",
//   },
//   {
//     numbers: 40,
//     title: "Invoices Shipped",
//     icon: require("../../../assets/images/wholesalerImages/shipped.svg")
//       .default,
//     bgcolor: "#2AB8AE",
//   },
//   {
//     numbers: 10,
//     title: "Pick-up Task Created",
//     icon: require("../../../assets/images/wholesalerImages/pickup.svg").default,
//     bgcolor: "#6F54B8",
//   },
//   {
//     numbers: 20,
//     title: "Delivery-Boy Assigned",
//     icon: require("../../../assets/images/wholesalerImages/deliveryboy_assigned.svg")
//       .default,
//     bgcolor: "#8AC854",
//   },
// ];
// const Retailers = [
//   {
//     numbers: 30,
//     title: "Total Registered Retailers",
//     icon: require("../../../assets/images/wholesalerImages/Retailers.svg")
//       .default,
//     bgcolor: "#FFBD5D",
//   },
//   {
//     numbers: 40,
//     title: "Active Retailers",
//     icon: require("../../../assets/images/wholesalerImages/active_retailer.svg")
//       .default,
//     bgcolor: "#FF727C",
//   },
//   {
//     numbers: 10,
//     title: "Early Account Retailer",
//     icon: require("../../../assets/images/wholesalerImages/early retailer.svg")
//       .default,
//     bgcolor: "#88C855",
//   },
//   {
//     numbers: 20,
//     title: "Key Account Retailers",
//     icon: require("../../../assets/images/wholesalerImages/key.svg").default,
//     bgcolor: "#9E9CFE",
//   },
// ];
// const Retailers2 = [
//   {
//     numbers: 30,
//     title: "Verify KYC",
//     icon: require("../../../assets/images/wholesalerImages/kyc.svg").default,
//     bgcolor: "#35DC95",
//   },
//   {
//     numbers: 40,
//     title: "Reverify KYC",
//     icon: require("../../../assets/images/wholesalerImages/Reverify.svg")
//       .default,
//     bgcolor: "#35616B",
//   },
//   {
//     numbers: 10,
//     title: "OTP List",
//     icon: require("../../../assets/images/wholesalerImages/otp.svg").default,
//     bgcolor: "#A3A818",
//   },
// ];
// export default function WholeSaDshboard() {
//   return (
//     <>
//       <Container>
//         <Box sx={{ display: "flex", justifyContent: "space-between" }}>
//           <Typography
//             sx={{
//               fontSize: "20px",
//               fontFamily: "Montserrat-Bold",
//               letterSpacing: "0.16px",
//               color: "#303030",
//               opacity: 1,

//               // lineHeight:"40px"
//             }}
//           >
//             Dashboard &nbsp;
//           </Typography>
//           <Typography
//             sx={{
//               fontSize: "12px",
//               fontFamily: "Montserrat-Medium",
//               letterSpacing: "0.16px",
//               color: "#8A8A8A",
//               opacity: 1,

//               // lineHeight:"40px"
//             }}
//           ></Typography>
//         </Box>
//         <Paper
//           sx={{
//             bgcolor: "#FFFFFF",
//             marginTop: "10px",
//             padding: "10px",
//             "& .MuiPaper-root": {
//               boxShadow: "none",
//             },
//             width: "100%",
//             height: "auto",
//           }}
//         >
//           <Box>
//             <Typography
//               sx={{
//                 color: "#303030",
//                 borderBottom: "2px solid #F3F3FF",
//                 fontSize: "16px",
//                 fontFamily: "Montserrat-Bold",
//               }}
//             >
//               Sales Order
//             </Typography>
//             <Stack direction="row" spacing={6} sx={{ paddingTop: "20px" }}>
//               {Sales_Order.map((rs) => {
//                 return (
//                   <>
//                     <Box
//                       sx={{
//                         width: "210px",
//                         height: "100px",
//                         p: 2,
//                         bgcolor: rs.bgcolor,
//                         boxShadow: "0px 0px 6px #00000029",
//                         borderRadius: "12px",
//                         opacity: 1,
//                       }}
//                     >
//                       <Typography
//                         sx={{
//                           textAlign: "left",
//                           fontSize: "18px",
//                           fontFamily: "Montserrat-Bold",

//                           color: "#FFFFFF",
//                           opacity: 1,
//                         }}
//                       >
//                         {rs.numbers}
//                       </Typography>
//                       <Typography
//                         sx={{
//                           textAlign: "right",
//                         }}
//                       >
//                         <img src={rs.icon} alt="" />
//                       </Typography>
//                       <Typography
//                         sx={{
//                           letterSpacing: "0.13px",
//                           textAlign: "left",
//                           fontSize: "13px",
//                           fontFamily: "Montserrat-Medium",

//                           color: "#FFFFFF",
//                           paddingBottom: "90px",
//                         }}
//                       >
//                         {rs.title}
//                       </Typography>
//                     </Box>
//                   </>
//                 );
//               })}
//             </Stack>
//             <Stack direction="row" spacing={6} sx={{ paddingTop: "20px" }}>
//               <Box
//                 sx={{
//                   width: "210px",
//                   height: "100px",
//                   p: 2,
//                   bgcolor: "#E8534E",
//                   boxShadow: "0px 0px 6px #00000029",
//                   borderRadius: "12px",
//                   opacity: 1,
//                 }}
//               >
//                 <Typography
//                   sx={{
//                     textAlign: "left",
//                     fontSize: "18px",
//                     fontFamily: "Montserrat-Bold",

//                     color: "#FFFFFF",
//                     opacity: 1,
//                   }}
//                 >
//                   80
//                 </Typography>
//                 <Typography
//                   sx={{
//                     textAlign: "right",
//                   }}
//                 >
//                   <img src={Cancelled} alt="" />
//                 </Typography>
//                 <Typography
//                   sx={{
//                     letterSpacing: "0.13px",
//                     textAlign: "left",
//                     fontSize: "13px",
//                     fontFamily: "Montserrat-Medium",

//                     color: "#FFFFFF",
//                     paddingBottom: "90px",
//                   }}
//                 >
//                   Cancelled
//                 </Typography>
//               </Box>
//               <Box
//                 sx={{
//                   width: "210px",
//                   height: "100px",
//                   p: 2,
//                   bgcolor: "#9263EE",
//                   boxShadow: "0px 0px 6px #00000029",
//                   borderRadius: "12px",
//                   opacity: 1,
//                 }}
//               >
//                 <Typography
//                   sx={{
//                     textAlign: "left",
//                     fontSize: "18px",
//                     fontFamily: "Montserrat-Bold",

//                     color: "#FFFFFF",
//                     opacity: 1,
//                   }}
//                 >
//                   12
//                 </Typography>
//                 <Typography sx={{ textAlign: "right" }}>
//                   <img src={return1} alt="" />
//                 </Typography>
//                 <Typography
//                   sx={{
//                     letterSpacing: "0.13px",
//                     textAlign: "left",
//                     fontSize: "13px",
//                     fontFamily: "Montserrat-Medium",

//                     color: "#FFFFFF",
//                     paddingBottom: "90px",
//                   }}
//                 >
//                   Returns
//                 </Typography>
//               </Box>
//             </Stack>
//           </Box>
//           <Box>
//             <Typography
//               sx={{
//                 color: "#303030",
//                 borderBottom: "2px solid #F3F3FF",
//                 fontSize: "16px",
//                 fontFamily: "Montserrat-Bold",
//                 paddingTop: "25px",
//               }}
//             >
//               Invoices
//             </Typography>

//             <Stack direction="row" spacing={6} sx={{ paddingTop: "20px" }}>
//               {invoices.map((rs) => {
//                 return (
//                   <>
//                     <Box
//                       sx={{
//                         width: "210px",
//                         height: "100px",
//                         p: 2,
//                         bgcolor: rs.bgcolor,
//                         boxShadow: "0px 0px 6px #00000029",
//                         borderRadius: "12px",
//                         opacity: 1,
//                       }}
//                     >
//                       <Typography
//                         sx={{
//                           textAlign: "left",
//                           fontSize: "18px",
//                           fontFamily: "Montserrat-Bold",

//                           color: "#FFFFFF",
//                           opacity: 1,
//                         }}
//                       >
//                         {rs.numbers}
//                       </Typography>
//                       <Typography
//                         sx={{
//                           textAlign: "right",
//                         }}
//                       >
//                         <img src={rs.icon} alt="" />
//                       </Typography>
//                       <Typography
//                         sx={{
//                           letterSpacing: "0.13px",
//                           textAlign: "left",
//                           fontSize: "13px",
//                           fontFamily: "Montserrat-Medium",

//                           color: "#FFFFFF",
//                           paddingBottom: "90px",
//                         }}
//                       >
//                         {rs.title}
//                       </Typography>
//                     </Box>
//                   </>
//                 );
//               })}
//             </Stack>
//             <Stack direction="row" spacing={6} sx={{ paddingTop: "20px" }}>
//               <Box
//                 sx={{
//                   width: "200px",
//                   height: "100px",
//                   p: 2,
//                   bgcolor: "#D846AC",
//                   boxShadow: "0px 0px 6px #00000029",
//                   borderRadius: "12px",
//                   opacity: 1,
//                 }}
//               >
//                 <Typography
//                   sx={{
//                     textAlign: "left",
//                     fontSize: "18px",
//                     fontFamily: "Montserrat-Bold",

//                     color: "#FFFFFF",
//                     opacity: 1,
//                   }}
//                 >
//                   80
//                 </Typography>
//                 <Typography
//                   sx={{
//                     textAlign: "right",
//                   }}
//                 >
//                   <img src={delivered} alt="" />
//                 </Typography>
//                 <Typography
//                   sx={{
//                     letterSpacing: "0.13px",
//                     textAlign: "left",
//                     fontSize: "13px",
//                     fontFamily: "Montserrat-Medium",

//                     color: "#FFFFFF",
//                     paddingBottom: "90px",
//                   }}
//                 >
//                   Invoices Delivered
//                 </Typography>
//               </Box>
//               <Box
//                 sx={{
//                   width: "210px",
//                   height: "100px",
//                   p: 2,
//                   bgcolor: "#D2B335",
//                   boxShadow: "0px 0px 6px #00000029",
//                   borderRadius: "12px",
//                   opacity: 1,
//                 }}
//               >
//                 <Typography
//                   sx={{
//                     textAlign: "left",
//                     fontSize: "18px",
//                     fontFamily: "Montserrat-Bold",

//                     color: "#FFFFFF",
//                     opacity: 1,
//                   }}
//                 >
//                   12
//                 </Typography>
//                 <Typography sx={{ textAlign: "right" }}>
//                   <img src={invoicereturn} alt="" />
//                 </Typography>
//                 <Typography
//                   sx={{
//                     letterSpacing: "0.13px",
//                     textAlign: "left",
//                     fontSize: "13px",
//                     fontFamily: "Montserrat-Medium",

//                     color: "#FFFFFF",
//                     paddingBottom: "90px",
//                   }}
//                 >
//                   Invoices Returned
//                 </Typography>
//               </Box>
//             </Stack>
//           </Box>
//           <Box>
//             <Typography
//               sx={{
//                 color: "#303030",
//                 borderBottom: "2px solid #F3F3FF",
//                 fontSize: "16px",
//                 fontFamily: "Montserrat-Bold",
//                 paddingTop: "25px",
//               }}
//             >
//               Retailers
//             </Typography>

//             <Stack direction="row" spacing={6} sx={{ paddingTop: "20px" }}>
//               {Retailers.map((rs) => {
//                 return (
//                   <>
//                     <Box
//                       sx={{
//                         width: "210px",
//                         height: "100px",
//                         p: 2,
//                         bgcolor: rs.bgcolor,
//                         boxShadow: "0px 0px 6px #00000029",
//                         borderRadius: "12px",
//                         opacity: 1,
//                       }}
//                     >
//                       <Typography
//                         sx={{
//                           textAlign: "left",
//                           fontSize: "18px",
//                           fontFamily: "Montserrat-Bold",

//                           color: "#FFFFFF",
//                           opacity: 1,
//                         }}
//                       >
//                         {rs.numbers}
//                       </Typography>
//                       <Typography
//                         sx={{
//                           textAlign: "right",
//                         }}
//                       >
//                         <img src={rs.icon} alt="" />
//                       </Typography>
//                       <Typography
//                         sx={{
//                           letterSpacing: "0.13px",
//                           textAlign: "left",
//                           fontSize: "13px",
//                           fontFamily: "Montserrat-Medium",

//                           color: "#FFFFFF",
//                           paddingBottom: "90px",
//                         }}
//                       >
//                         {rs.title}
//                       </Typography>
//                     </Box>
//                   </>
//                 );
//               })}
//             </Stack>
//             <Stack direction="row" spacing={6} sx={{ paddingTop: "20px" }}>
//               {Retailers2.map((rs) => {
//                 return (
//                   <>
//                     <Box
//                       sx={{
//                         width: "210px",
//                         height: "100px",
//                         p: 2,
//                         bgcolor: rs.bgcolor,
//                         boxShadow: "0px 0px 6px #00000029",
//                         borderRadius: "12px",
//                         opacity: 1,
//                       }}
//                     >
//                       <Typography
//                         sx={{
//                           textAlign: "left",
//                           fontSize: "18px",
//                           fontFamily: "Montserrat-Bold",

//                           color: "#FFFFFF",
//                           opacity: 1,
//                         }}
//                       >
//                         {rs.numbers}
//                       </Typography>
//                       <Typography
//                         sx={{
//                           textAlign: "right",
//                         }}
//                       >
//                         <img src={rs.icon} alt="" />
//                       </Typography>
//                       <Typography
//                         sx={{
//                           letterSpacing: "0.13px",
//                           textAlign: "left",
//                           fontSize: "13px",
//                           fontFamily: "Montserrat-Medium",

//                           color: "#FFFFFF",
//                           paddingBottom: "90px",
//                         }}
//                       >
//                         {rs.title}
//                       </Typography>
//                     </Box>
//                   </>
//                 );
//               })}
//             </Stack>
//           </Box>
//           <Chartline />
//         </Paper>
//       </Container>
//     </>
//   );
// }
