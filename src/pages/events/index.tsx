import Layout from "src/components/Layout";

// import fs from "fs";
// import { type GetServerSideProps } from "next";
// import Image from "next/image";

// const getEventFiles = () => {
//   readdir("../images", (err, files) => {
//     if (err) {
//       console.error("Node error", err);
//       return;
//     }

//     console.log("Files:");
//     files.forEach((f) => {
//       console.log(f);
//     });
//   });
// };

interface EventProps {
  doesFileExist: boolean;
  files: string[];
}

// TODO(steevejoseph): Fix this
// export const getServerSideProps: GetServerSideProps = async () => {
//   const fileExists = fs.existsSync("/some-file");
//   const eventImageDirectory = "public/images/events";
//   let filePaths: string[] = [];

//   fs.readdir(eventImageDirectory, (err, files) => {
//     if (err) {
//       console.error("Node error", err);
//       return [];
//     }

//     const imgFileRegex = /.*(png|jpeg|jpg)/;
//     filePaths = files.filter((f) => imgFileRegex.test(f));
//     console.log(`filePaths: ${filePaths}`);
//   });

//   return {
//     props: {
//       doesFileExist: fileExists,
//       files: filePaths || [],
//     } as EventProps,
//   };
// };

// const renderFileListImages = (files: string[]) => {
//   return files.map((f) => {
//     console.log(`Processing: ${f}`);
//     return (
//       <li key={f}>
//         <Image src={`${f}`} alt={`${f}`} width={`100`} height={`100`} />
//       </li>
//     );
//   });
// };

const Events = ({ files, doesFileExist }: EventProps) => {
  return (
    <Layout>
      <h2>Events</h2>
      {/* <li>{renderFileListImages(files)}</li> */}
      <h2>Calendar</h2>
    </Layout>
  );
};

export default Events;
