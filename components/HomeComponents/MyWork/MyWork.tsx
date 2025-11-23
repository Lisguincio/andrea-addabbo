import { Card, CardBody, CardTitle } from '@/components/Card/Card';
import MayLogo from '@/components/MayLogo';
import React from 'react'

const MyWork = () => {
  return (
    <Card className="flex flex-1 flex-col">
      <CardBody className="flex flex-col h-full">
        <CardTitle>La mia azienda</CardTitle>
        <div className="flex-1">
          <MayLogo />
        </div>
      </CardBody>
    </Card>
  );
}

export default MyWork