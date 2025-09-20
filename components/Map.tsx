"use client";
import React from "react";
import { APIProvider, Marker, Map as VisMap } from "@vis.gl/react-google-maps";
import POSITION from "../constants/position";

const Map = () => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string;
  const { lat, lng, defaultZoom } = POSITION;

  return (
    <div className="flex h-58 overflow-hidden relative rounded-2xl min-h-52">
      <APIProvider apiKey={apiKey}>
        <VisMap
          className=""
          center={{ lat, lng }}
          defaultZoom={defaultZoom}
          gestureHandling={"greedy"}
          disableDefaultUI={true}
        >
          <Marker position={{ lat, lng }} />
        </VisMap>
      </APIProvider>
    </div>
  );
};

export default Map;
