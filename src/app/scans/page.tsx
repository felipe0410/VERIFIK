"use client";
import { Box } from "@mui/material";
import Container from "../components/Container/Container";
import { useEffect, useState } from "react";
import CardScan from "./CardScan";
import { getDataFromFirestore } from "../firebase";
import { ScanData } from "./interface";

export default function Home() {
  const [data, setData] = useState<ScanData[]>([
    {
      id: "1",
      last_name: "*******",
      validationMethod: "*******",
      client: "*******",
      first_name: "*******",
      documentNumber: "*******",
      documentType: "*******",
      img: "*******",
    },
  ]);
  const [petition, setPetition] = useState(1);

  useEffect(() => {
    const functionGetData = async () => {
      const getData = await getDataFromFirestore();
      setData(getData);
    };
    functionGetData();
  }, []);

  return (
    <main>
      <Box>
        <Container>
          <Box width={"90%"} sx={{ display: "flex", flexWrap: "wrap" }}>
            {data?.map((scan: any) => (
              <Box key={scan.id}>
                {
                  <CardScan
                    categorie={scan.validationMethod}
                    title={scan.id}
                    first_name={scan.first_name}
                    id={0}
                    setPetition={setPetition}
                    Categories_idCategories={0}
                    lastName={scan.last_name}
                    documentNumber={scan.first_name}
                    img={scan.img}
                    open={false}
                  />
                }
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </main>
  );
}
