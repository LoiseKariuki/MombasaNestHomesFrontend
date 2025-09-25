"use client";

import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import { DateSelectArg, EventClickArg, EventInput } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

export default function AvailabilityCalendar() {
  const [events, setEvents] = useState<EventInput[]>([]);

  // Handle selecting new availability dates
  const handleDateSelect = (selectInfo: DateSelectArg) => {
    const title = prompt("Enter availability or rate note:");
    const calendarApi = selectInfo.view.calendar;
    calendarApi.unselect(); // clear selection

    if (title) {
      const newEvent: EventInput = {
        id: String(events.length + 1),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
      };
      setEvents((prevEvents) => [...prevEvents, newEvent]);
    }
  };

  // Handle deleting events
  const handleEventClick = (clickInfo: EventClickArg) => {
    if (confirm(`Delete availability "${clickInfo.event.title}"?`)) {
      setEvents((prevEvents) =>
        prevEvents.filter((event) => event.id !== clickInfo.event.id),
      );
    }
  };

  return (
    <div className="p-4 bg-white rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-4">Availability Calendar</h2>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        selectable={true}
        editable={true}
        events={events}
        select={handleDateSelect}
        eventClick={handleEventClick}
        height="auto"
      />
    </div>
  );
}
