// Developer note: This helper formats ISO date strings into a readable date label.
// It is used when the blog list or post page needs to display publication dates.
import { parseISO, format } from 'date-fns';
 
export default function Date({ dateString }) {
  // date-fns converts the stored date string into a JavaScript Date object.
  const date = parseISO(dateString);

  // The <time> element is semantic HTML for machine-readable date values.
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}