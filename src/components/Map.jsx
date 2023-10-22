import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

const Map = () => {
  const ubicacionDeseada = [1.2295203251192612, -77.28999038843449]; // Coordenadas de Pasto, Nariño

  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        center: ubicacionDeseada, // Coordenadas de Pasto, Nariño
        scale: 200, // Ajusta el nivel de zoom según tus necesidades
      }}
      style={{ width: "100%", height: "100%" }}
    >
      <Geographies geography="/features.json" fill="#2C065D" stroke="#FFFFFF" strokeWidth={0.5}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={ubicacionDeseada}
        dx={-250}
        dy={-260}
        connectorProps={{
          stroke: "white",
          strokeWidth: 1,
          strokeLinecap: "round",
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="white">
          {"Pasto, Nariño"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
