import React, { useEffect, useState } from "react";
import axios from "axios";
import MenuRegion from "../componentes/MenuRegion";

export default function Sierra() {
  const [experiencias, setExperiencias] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/experiencias/sierra")
      .then((response) => {
        setExperiencias(response.data);
      })
      .catch((error) => {
        console.error("Error al cargar experiencias:", error);
      });
  }, []);

  return <MenuRegion experiencias={experiencias} />;
}