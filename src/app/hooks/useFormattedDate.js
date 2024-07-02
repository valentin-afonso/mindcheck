import { useEffect, useState } from "react";

const useFormattedDate = (dateString) => {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    const formatDate = () => {
      const now = new Date();
      const itemDate = new Date(dateString);

      const diffInMinutes = (now - itemDate) / (1000 * 60);

      if (diffInMinutes < 5) {
        setFormattedDate("now");
      } else if (now.toDateString() === itemDate.toDateString()) {
        setFormattedDate("today");
      } else {
        const yesterday = new Date(now);
        yesterday.setDate(yesterday.getDate() - 1);

        if (yesterday.toDateString() === itemDate.toDateString()) {
          setFormattedDate("yesterday");
        } else {
          const options = { month: "short", day: "numeric" };
          setFormattedDate(itemDate.toLocaleDateString("en-US", options));
        }
      }
    };

    formatDate();
  }, [dateString]);

  return formattedDate;
};

export default useFormattedDate;
