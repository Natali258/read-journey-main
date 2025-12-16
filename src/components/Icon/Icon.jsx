import React from 'react'
import Icons from '../../assets/icon/sprite.svg'

export const Icon = ({id, name,className,size, color}) => {
  return (
    <svg className={className} height={size} width={size} fill={color}>
        {/* <use href={Icons+'#icon-'+id}></use> */}
        <use href={`${Icons}#${name}`} />
    </svg>
  )
}
