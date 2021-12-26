import React, { Component, useState } from 'react';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import EventService from '../../../shared/service/EventService';
import PortalUtil from '../../../shared/utils/PortalUtil';


export default class Calendar extends Component {

    render() {
        console.log(PortalUtil.getCurrentUser().getId())
        return (
            <div>
                <FullCalendar
                    plugins={[dayGridPlugin]}
                    initialView="dayGridMonth"
                />
            </div>
        );
    }

    getEvents = function() {
        EventService.getEvents(PortalUtil.getCurrentUser().getId());
    }
}

