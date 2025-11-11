"use client";
import React from "react";
import { APIProvider, Marker, Map as VisMap } from "@vis.gl/react-google-maps";
import POSITION from "../../../constants/position";
import { Card, CardBody, CardTitle } from "@/components/Card/Card";

const Map = () => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string;
  const { lat, lng, defaultZoom } = POSITION;

  return (
    <Card className="h-full">
      <CardBody>
        <CardTitle className="mb-2">Dove mi trovi</CardTitle>

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
      </CardBody>
    </Card>
  );
};

export default Map;
