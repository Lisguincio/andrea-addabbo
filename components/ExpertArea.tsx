import Image from 'next/image';
import React from 'react'

const ExpertArea = () => {

	const fields = [
		{title: "Sicurezza dei macchinari", icon: '/assets/icons/005-excavator.png'},
		{title: "Marcatura CE", icon: '/assets/icons/007-ce.png'},
		{title: "Audit", icon: '/assets/icons/002-search.png'},
		{title: "Sicurezza nei luoghi di lavoro", icon: '/assets/icons/003-wrench.png'},
		{title: "Indagini strumentali", icon: '/assets/icons/006-sign.png'},
		{title: "Supporto ai professionisti", icon: '/assets/icons/001-learning.png'},
    ]

  return (
    <div className="grid  h-full gap-2 grid-cols-3 md:grid-cols-2 xl:grid-cols-3">
      {fields.map((o, index) => (
        <div key={index} className="flex flex-col text-center">
          <div className="w-full h-20 bg-base-200 rounded-2xl p-2 flex justify-center items-center ">
            <Image src={o.icon} alt={o.title} width={32} height={32} />
          </div>
          <span className="text-xs mt-2 px-2">{o.title}</span>
        </div>
      ))}
    </div>
  );
}

export default ExpertArea