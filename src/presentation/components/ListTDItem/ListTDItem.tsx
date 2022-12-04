import React from 'react'

interface ListTDItemInterface {
    title:string,
    description:string
}

const ListTDItem:React.FC<ListTDItemInterface> = ({title,description}) => {
  return (
    <div>{title}, {description}</div>
  )
}

export default ListTDItem