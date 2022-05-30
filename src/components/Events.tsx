import React from 'react'
import events from "../data/events.json"

const Events = () => {
  return (
    <div>
      <h1>Events</h1>
      {events.events.map(({ date, title, description, link }) => {
        return (
          <>
            <div>
              <div>{date}</div>
            </div>
            <div>
              <div onClick={() => window.open(link ? link : "https://csi.campuslabs.com/engage/organization/hack_a_project")}>{title}</div>
              <div>{description}</div>
            </div>
          </>
        )
      })}
    </div>
  )
}

export default Events