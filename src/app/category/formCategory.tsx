// "use client";
// import React, { useEffect, useState } from "react";
// import { Button, Box, Typography, InputBase } from "@mui/material";
// // import {
// //   getCategories,
// //   CreateCategory,
// //   deleteCategory,
// //   updateCategoryViaAxios,
// // } from "../hooks/MySQL";
// import CheckIcon from "@mui/icons-material/Check";
// import BasicModal from "../components/Modal/modal";

// function CategoryForm() {
//   const [petition, setPetition] = useState(1);
//   const [title, setTitle] = useState("");
//   const [edit, setEdit] = useState(false);
//   const [categories, setCategories] = useState<
//     Array<{
//       categoryName: string;
//       idCategories: number;
//     }>
//   >([
//     {
//       categoryName: "",
//       idCategories: 1,
//     },
//   ]);
//   const errorForm = {
//     title: {
//       msg: "Title is required and should be at most 15 characters.",
//       validation: title.length === 0 || title.length > 15,
//     },
//   };
//   const validationAll = () => {
//     return errorForm?.title?.validation;
//   };
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (validationAll()) {
//       console.error("Please make sure all fields are filled out.");
//       return;
//     }
//     resetFields();
//   };

//   const resetFields = () => {
//     setTitle("");
//   };

//   // useEffect(() => {
//   //   const getCategoriess = async () => {
//   //     const categories: any = await getCategories();
//   //     setCategories(categories);
//   //   };
//   //   getCategoriess();
//   // }, [petition]);

//   const styleBox = {
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "space-around",
//     minHeight: "20vh",
//     width: "30vw",
//     padding: "50px",
//     borderRadius: "40px",
//     background: "#08315C",
//     boxShadow:
//       "0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
//   };
//   const handleInputChange = (event: any, id: any) => {
//     const newValue = event.target.value;
//     setCategories((prevCategories) =>
//       prevCategories.map((cat) =>
//         cat.idCategories === id ? { ...cat, categoryName: newValue } : cat
//       )
//     );
//   };

//   // const createCategory = async () => {
//   //   if (validationAll()) {
//   //     //   setMsg("There was a validation error. Please check your input.");
//   //     return;
//   //   }

//   //   try {
//   //     await CreateCategory(title);
//   //     setPetition((e) => e + 1);
//   //     setTitle("");
//   //     //   setMsg("Category created successfully!");
//   //   } catch (error) {
//   //     console.error("Error creating category:", error);
//   //     //   setMsg("There was an error creating the category. Please try again.");
//   //   }
//   // };
//   // const DeleteCategory = async (id: number) => {
//   //   try {
//   //     await deleteCategory(id);
//   //     setPetition((e) => e + 1);
//   //     setTitle("");
//   //     setEdit(false);
//   //   } catch (error) {
//   //     console.error("Error creating category:", error);
//   //     //   setMsg("There was an error creating the category. Please try again."); // Proporciona feedback de error al usuario
//   //   }
//   // };

//   // const updateCategory = async (event: any, id: number) => {
//   //   const categoryToUpdate = categories.find(
//   //     (category) => category.idCategories === id
//   //   );

//   //   if (!categoryToUpdate) {
//   //     console.error(`No category found with ID: ${id}`);
//   //     return;
//   //   }

//   //   const updatedCategoryData = {
//   //     categoryName: categoryToUpdate.categoryName,
//   //   };

//   //   await updateCategoryViaAxios(id, updatedCategoryData);
//   //   setPetition((e) => e + 1);
//   //   setEdit(false);
//   // };

//   return (
//     <Box>
//       <Box component="form" onSubmit={handleSubmit} sx={styleBox}>
//         <Typography
//           align="center"
//           sx={{
//             color: "#FFF",
//             fontFamily: "Nunito",
//             fontSize: "24px",
//             fontStyle: "normal",
//             fontWeight: "700",
//             lineHeight: "normal",
//             marginBottom: "40px",
//           }}
//         >
//           TITLE/ NAME{" "}
//         </Typography>
//         <InputBase
//           sx={{
//             padding: "10px",
//             borderRadius: "40px",
//             background: "#D9D9D9",
//             boxShadow:
//               "0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
//           }}
//           placeholder="Category"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           fullWidth
//           margin={"dense"}
//           required
//         />
//         <Typography
//           sx={{
//             display: errorForm.title.validation ? "block" : "none",
//           }}
//           variant="body1"
//           color="error"
//         >
//           {errorForm.title.msg}
//         </Typography>

//         <Button
//           disabled={validationAll()}
//           sx={{
//             margin: "0 auto",
//             width: "180px",
//             background: "#FF6B00",
//             marginTop: "40px",
//             borderRadius: "40px",
//             boxShadow:
//               "0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
//             "&.Mui-disabled": {
//               backgroundColor: "#8492a6",
//             },
//           }}
//           type="submit"
//           variant="contained"
//           color="primary"
//           onClick={createCategory}
//         >
//           <Typography
//             sx={{
//               color: "#FFF",
//               fontFamily: "Nunito",
//               fontSize: "24px",
//               fontStyle: "normal",
//               fontWeight: 700,
//               lineHeight: "normal",
//             }}
//           >
//             CREATE
//           </Typography>
//         </Button>
//       </Box>
//       <Box sx={styleBox} marginTop={"40px"} minWidth={"100px"}>
//         <Box
//           display={"flex"}
//           sx={{ justifyContent: "space-around", flexWrap: "wrap" }}
//         >
//           {categories.map(
//             (category: { categoryName: string; idCategories: number }) => {
//               return (
//                 <Box
//                   sx={{
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center",
//                     padding: "5 10px",
//                     margin: "10px",
//                     minWidth: "100px",
//                     justifyContent: "space-around",
//                     borderRadius: "40px",
//                     background: "#FF6B00",
//                     boxShadow:
//                       "0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
//                   }}
//                   key={category.idCategories}
//                 >
//                   <Box sx={{ display: "flex", paddingLeft: "5px" }}>
//                     <Box
//                       component={"img"}
//                       src="/icons/label.svg"
//                       sx={{
//                         marginRight: "10px",
//                         display: edit ? "none" : "block",
//                       }}
//                     />
//                     <InputBase
//                       sx={{
//                         padding: "0 20px",
//                         borderRadius: "40px",
//                         background: "#fff",
//                         fontFamily: "Nunito",
//                         fontSize: "15px",
//                         fontStyle: "normal",
//                         fontWeight: "700",
//                         lineHeight: "normal",
//                         "&.Mui-disabled": {
//                           webkitTextFillColor: "red",
//                           color: "#FFF",
//                           background: "transparent",
//                         },
//                       }}
//                       disabled={!edit}
//                       value={category.categoryName}
//                       onChange={(e) =>
//                         handleInputChange(e, category.idCategories)
//                       }
//                     />
//                   </Box>
//                   <Box
//                     display={"flex"}
//                     sx={{ display: edit ? "block" : "none" }}
//                   >
//                     <Button
//                       onClick={(e) => updateCategory(e, category.idCategories)}
//                     >
//                       <CheckIcon sx={{ color: "#FFF" }} />
//                     </Button>
//                     <BasicModal
//                       msg={
//                         "Desea eliminar esta categoria, recuerde que tambien se eliminara las notas asociadas a ella ?"
//                       }
//                       title={"Delete Note"}
//                       icon={"/icons/delete.svg"}
//                       id={0}
//                       handleclickAccept={() =>
//                         DeleteCategory(category.idCategories)
//                       }
//                       setPetition={setPetition}
//                     />
//                   </Box>
//                 </Box>
//               );
//             }
//           )}
//         </Box>
//         <Box sx={{ marginLeft: "auto" }}>
//           <Button>
//             <Box
//               onClick={() => setEdit((prevEdit) => !prevEdit)}
//               component={"img"}
//               src="/icons/edit.svg"
//             />
//           </Button>
//         </Box>
//       </Box>
//     </Box>
//   );
// }

// export default CategoryForm;
