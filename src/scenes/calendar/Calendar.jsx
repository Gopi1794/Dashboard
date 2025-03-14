import { useState } from "react";
import multimonthPlugin from "@fullcalendar/multimonth";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { formatDate } from "@fullcalendar/core/index.js";

const createAlert = withReactContent(Swal);
const deleteAlert = withReactContent(Swal);

const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);

  const handleDateClick = async (selected) => {
    const { value: title } = await createAlert.fire({
      title: "Enter the title of the event",
      input: "text",
      inputPlaceholder: "Here...",
      showCancelButton: true,
      confirmButtonColor: colors.greenAccent[500],
      cancelButtonColor: "#cccc",
      color: "#ffffff",
      confirmButtonText: "Agregar",
      cancelButtonText: "Cancelar",
      background: "rgb(27, 24, 24)",
    });
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.start,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = async (selected) => {
    const result = await deleteAlert.fire({
      title: `Are you sure you want to delete the event "${selected.event.title}"?`,
      showCancelButton: true,
      confirmButtonColor: colors.greenAccent[500],
      cancelButtonColor: "#cccc",
      color: "#ffffff",
      confirmButtonText: "Yes, delete it",
      cancelButtonText: "Cancel",
      background: "rgb(136, 136, 136)",
    });

    if (result.isConfirmed) {
      selected.event.remove();
    }
  };
  return (
    <Box p="40px" width="95%" borderRadius="25px">
      <Header title="CALENDAR" subtitle="Full Calendar Iteractive Page" />
      <Box p="20px 0 0 0 " display="flex" justifyContent="space-between">
        {/*CALENDAR SIDEBAR*/}
        <Box
          flex="1 1 20%"
          backgroundColor={colors.primary[400]}
          p="15px"
          borderRadius="4px"
        >
          <Typography variant="h5" display="flex" alignItems="center">
            Events
          </Typography>
          <List>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.modeColor[400],
                  margin: "10px 0",
                  borderRadius: "2px",
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {formatDate(event.start, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>
        <Box flex=" 1 1 100%" ml="15px">
          <FullCalendar
            height="75vh"
            backgroundColor="#000"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
              multimonthPlugin,
            ]}
            headerToolbar={{
              left: "prev next today",
              center: "title",
              right:
                "dayGridMonth timeGridWeek multimonthYear timeGridDay listMonth",
            }}
            initialView="multimonthYear"
            editable={true}
            selectable={true}
            selecMirror={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;
