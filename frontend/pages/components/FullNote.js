import React from 'react'

function FullNote({ data, createdAt }) {
  return (
    <div className="flex flex-col">
      <div className="border">{data.title}</div>
      <div className="flex gap-4">
        <div className="border text-sm">{createdAt}</div>
        <div className="border text-xs">{data.label || 'Loading...'}</div>
      </div>
      <div className="border">{data.content}</div>
    </div>
  )
}

export default FullNote
