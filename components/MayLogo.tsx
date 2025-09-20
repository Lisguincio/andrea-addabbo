import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const MayLogo = () => {
  return (
	<Link href={'https://maysicurezza.it/'} target='_blank' className='flex flex-col w-full h-full items-center justify-center text-center'>

    <Image
      src={
		  "https://maysicurezza.it/wp-content/uploads/2020/03/cropped-Logo-MAY-4.png"
		}
		width={200}
		height={200}
		alt="Logo MAY"
		/>
		<h2 className='font-bold text-3xl mb-2'>MAY S.R.L.S.</h2>
		<h3 className='uppercase italic text-2xl'>SOLUZIONI PER L'INDUSTRIA</h3>
		</Link>
  );
}

export default MayLogo