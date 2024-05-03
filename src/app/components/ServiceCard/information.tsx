import React from 'react'
import { IconManifestType } from 'react-icons/lib';
interface Props {
  icon: string;
  title: string;
  description: string;
}
export const Information: React.FC<Props> = ({icon, title, description}) => {
  return (
     <div className="flex items-center gap-4 p-4">
          <div>{icon}</div>
          <div>
            <h1 className="font-bold">{title}</h1>
            <p>{description}</p>
          </div>
        </div>
  )
}
