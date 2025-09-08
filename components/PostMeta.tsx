import React from "react";
import DateComponent from "./Date";
import { LucideCalendarDays, LucideClock5 } from "lucide-react";

const PostMeta = (props: { eRT?: number; date?: string }) => {
  const { eRT, date } = props;
  return (
    <div className="flex flex-col md:flex-row text-base-content/50 justify-start md:items-center md:divide-x md:*:px-3 ">
      <span className="inline-flex items-center gap-2">
        <LucideCalendarDays size={16} />
        <DateComponent dateString={date} />
      </span>
      <span className="inline-flex items-center gap-2">
        <LucideClock5 size={16} /> Tempo di lettura:{" "}
        <EstimatedReadingTime eRT={eRT} />
      </span>
    </div>
  );
};

export const EstimatedReadingTime = (props: { eRT?: number }) => {
  const { eRT } = props;
  const time = eRT == 0 ? "< 1 min" : `${eRT} min`;
  return time;
};

export default PostMeta;
