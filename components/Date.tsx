import { format } from "date-fns";
import { it } from "date-fns/locale";

export default function DateComponent({
  dateString,
}: {
  dateString: string | undefined;
}) {
  if (!dateString) {
    return null;
  }

  return (
    <time dateTime={dateString}>
      {format(new Date(dateString), "d LLLL yyyy", { locale: it })}
    </time>
  );
}
