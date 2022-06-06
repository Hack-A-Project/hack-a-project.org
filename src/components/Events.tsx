import React from 'react'
import events from "../data/events.json"

const Events = () => {
  return (
    <div className="eventsContainer">
      <h1 className="title">Events(2022)</h1>
      {events.events.map(({ date, title, description, link }) => {
        return (
          <div className="eventWrapper">
            <div>
              <div className="date">{date}</div>
            </div>
            <div>
              <div className="title" onClick={() => window.open(link ? link : "https://csi.campuslabs.com/engage/organization/hack_a_project")}>{title}</div>
              <div className="description">{description}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Events