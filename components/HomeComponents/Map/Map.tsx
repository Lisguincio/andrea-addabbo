"use client";
import React from "react";
import {
  APIProvider,
  AdvancedMarker,
  Map as VisMap,
} from "@vis.gl/react-google-maps";
import POSITION from "../../../constants/position";
import { Card, CardBody, CardTitle } from "@/components/Card/Card";

const Map = () => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string;
  const { lat, lng, defaultZoom } = POSITION;

  return (
    <Card className="h-full min-h-[320px] flex flex-col">
      <CardBody className="flex flex-col h-full">
        <CardTitle className="mb-2">Dove mi trovi</CardTitle>
        <div className="flex flex-1 overflow-hidden relative rounded-2xl min-h-[1px]">
          <APIProvider apiKey={apiKey}>
            <VisMap
              className=""
              center={{ lat, lng }}
              defaultZoom={defaultZoom}
              gestureHandling={"greedy"}
              disableDefaultUI={true}
              mapId="DEMO_MAP_ID"
            >
              <AdvancedMarker position={{ lat, lng }} />
            </VisMap>
          </APIProvider>
        </div>
      </CardBody>
    </Card>
  );
};

export default Map;
