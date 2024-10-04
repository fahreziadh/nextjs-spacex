import React from 'react'

export const dynamicParams = true;
export const revalidate = 900 // 15 minutes

export async function generateStaticParams() {
  return [{ launchesId:"5eb87cd9ffd86e000604b32a" }];
}

const Page = async() => {
  return (
    <div style={{color: "white"}}>{Date.now()}</div>
  )
}

export default Page