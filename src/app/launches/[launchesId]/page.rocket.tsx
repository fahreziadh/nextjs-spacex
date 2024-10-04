"use client"

import { GET_ROCKET_DETAIL } from '@/lib/query/rocket/rocker.detail'
import { useLazyQuery } from '@apollo/client'
import React from 'react'

const PageRocket = ({ rocketId }: { rocketId: string }) => {
  const [getRocket, { data, loading }] = useLazyQuery(GET_ROCKET_DETAIL, {
    variables: { id: rocketId },
    onCompleted: (data) => {
      console.log(data)
    }
  })
  if (loading) {
    return <div>Loading...</div>
  }

  if (!loading && !data) {
    return <button onClick={() => { getRocket() }}>Load Rocket</button>
  }

  return (
    <div>
    {data && data.rocket && (
      <div>
        <h1>{data.rocket.name}</h1>
        <p>Active: {data.rocket.active ? 'Yes' : 'No'}</p>
        <p>Boosters: {data.rocket.boosters}</p>
        <p>Company: {data.rocket.company}</p>
        <p>Cost per Launch: ${data.rocket.cost_per_launch ? data.rocket.cost_per_launch.toLocaleString() : 'N/A'}</p>
        <p>Country: {data.rocket.country}</p>
        <p>Description: {data.rocket.description}</p>
        <p>Diameter: {data.rocket.diameter ? `${data.rocket.diameter.feet} feet (${data.rocket.diameter.meters} meters)` : 'N/A'}</p>
        <p>Engines:</p>
        <ul>
          <li>Layout: {data.rocket.engines ? data.rocket.engines.layout : 'N/A'}</li>
          <li>Number: {data.rocket.engines ? data.rocket.engines.number : 'N/A'}</li>
          <li>Propellant 1: {data.rocket.engines ? data.rocket.engines.propellant_1 : 'N/A'}</li>
          <li>Propellant 2: {data.rocket.engines ? data.rocket.engines.propellant_2 : 'N/A'}</li>
          <li>Thrust Sea Level: {data.rocket.engines && data.rocket.engines.thrust_sea_level ? `${data.rocket.engines.thrust_sea_level.kN} kN (${data.rocket.engines.thrust_sea_level.lbf} lbf)` : 'N/A'}</li>
          <li>Thrust to Weight: {data.rocket.engines ? data.rocket.engines.thrust_to_weight : 'N/A'}</li>
          <li>Thrust Vacuum: {data.rocket.engines && data.rocket.engines.thrust_vacuum ? `${data.rocket.engines.thrust_vacuum.kN} kN (${data.rocket.engines.thrust_vacuum.lbf} lbf)` : 'N/A'}</li>
          <li>Type: {data.rocket.engines ? data.rocket.engines.type : 'N/A'}</li>
          <li>Version: {data.rocket.engines ? data.rocket.engines.version : 'N/A'}</li>
        </ul>
        <p>First Flight: {data.rocket.first_flight}</p>
        <p>Height: {data.rocket.height ? `${data.rocket.height.feet} feet (${data.rocket.height.meters} meters)` : 'N/A'}</p>
        <p>ID: {data.rocket.id}</p>
        <p>Landing Legs:</p>
        <ul>
          <li>Material: {data.rocket.landing_legs ? (data.rocket.landing_legs.material ? data.rocket.landing_legs.material : 'N/A') : 'N/A'}</li>
          <li>Number: {data.rocket.landing_legs ? data.rocket.landing_legs.number : 'N/A'}</li>
        </ul>
        <p>Mass: {data.rocket.mass ? `${data.rocket.mass.kg} kg (${data.rocket.mass.lb} lb)` : 'N/A'}</p>
        <p>Payload Weights:</p>
        <ul>
          {data.rocket.payload_weights?.map((weight) => (
            <li key={weight?.id}>{weight?.name}: {weight?.kg} kg ({weight?.lb} lb)</li>
          ))}
        </ul>
        <p>Stages: {data.rocket.stages}</p>
        <p>Success Rate: {data.rocket.success_rate_pct}%</p>
        <p>Type: {data.rocket.type}</p>
        {data.rocket.wikipedia ? <p>Wikipedia: <a href={data.rocket.wikipedia } target="_blank" rel="noopener noreferrer">Link</a></p>:null}

      </div>
    )}
    </div>
  )
}

export default PageRocket