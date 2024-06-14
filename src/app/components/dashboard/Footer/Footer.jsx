import React from 'react'
import Style from "./footer.module.css"
import Image from 'next/image'
const Footer = () => {
  return (
    <div className={Style.conatainer}>
        <div className={Style.logo}>
            <Image src="/decentrawood.png" alt='' width={30} height={30} />
            <p>DECENTRAWOOD</p>
        </div>
        <p>@All copyright</p>
    </div>
  )
}

export default Footer