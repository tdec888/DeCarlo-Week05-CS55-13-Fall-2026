// Import the date-fns functions needed to parse and format the stored ISO dates.
import { parseISO, format } from 'date-fns';

// Export a reusable date component so page files can show readable dates.
export default function Date({ dateString }) {
  // Convert the ISO date string from the JSON data into a JavaScript Date object.
  const date = parseISO(dateString);

  // Return a semantic <time> element that contains the user-friendly formatted date.
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}