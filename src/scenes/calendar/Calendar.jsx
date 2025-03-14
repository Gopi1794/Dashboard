import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useSnackbar } from "notistack"; // Importa correctamente useSnackbar
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { tokens } from "../../theme";
import { formatDate } from "@fullcalendar/core/index.js";

const createAlert = withReactContent(Swal);
const deleteAlert = withReactContent(Swal);

const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);
  const { enqueueSnackbar } = useSnackbar(); // Asegúrate de que esté aquí

  const handleDateClick = async (selected) => {
    const { value: title } = await createAlert.fire({
      title: "Enter the title of the event",
      input: "text",
      inputPlaceholder: "Here...",
      showCancelButton: true,
      confirmButtonColor: colors.modeColor[500],
      cancelButtonColor: "#ccc7",
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

      // Mostrar notificación de éxito
      enqueueSnackbar(`Evento "${title}" agregado con éxito!`, {
        variant: "success",
      });
    }
  };

  const handleEventClick = async (selected) => {
    const result = await deleteAlert.fire({
      title: `Are you sure you want to delete the event "${selected.event.title}"?`,
      showCancelButton: true,
      confirmButtonColor: colors.modeColor[500],
      cancelButtonColor: "#ccc7",
      color: "#ffffff",
      confirmButtonText: "Yes, delete it",
      cancelButtonText: "Cancel",
      background: "rgb(27, 24, 24)",
    });
    if (result.isConfirmed) {
      selected.event.remove();
      enqueueSnackbar(`Evento "${selected.event.title}" eliminado!`, {
        severity: "error",
      });
    }
  };

  return (
    <Box p="40px" width="95%" borderRadius="25px">
      <Typography variant="h5">CALENDAR</Typography>
      <Box p="20px 0 0 0 " display="flex" justifyContent="space-between">
        {/* SIDEBAR */}
        <Box
          flex="1 1 20%"
          backgroundColor={colors.primary[400]}
          p="15px"
          borderRadius="4px"
        >
          <Typography variant="h5">Events</Typography>
          <List>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.modeColor[300],
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

        {/* CALENDAR */}
        <Box flex=" 1 1 100%" ml="15px">
          <FullCalendar
            height="75vh"
            backgroundColor="#000"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev next today",
              center: "title",
              right: "dayGridMonth timeGridWeek timeGridDay listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
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
