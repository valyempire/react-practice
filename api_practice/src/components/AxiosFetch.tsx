import { useState, useEffect } from "react";
import axios from "axios";

interface Activity {
  activity: string;
}

export const AxiosFetch = () => {
  const [activity, setActivity] = useState<string>("");

  useEffect(() => {
    const fetchActivity = async () => {
      try {
        const response = await axios.get<Activity>(
          "https://www.boredapi.com/api/activity"
        );
        setActivity(response.data.activity);
        console.log(response.data);
        console.log(response.data.activity);
      } catch (error) {
        console.error("Error fetching activity:", error);
      }
    };

    void fetchActivity();
  }, []);

  return (
    <div>
      <h1>Feeling Bored?</h1>
      <p>{activity}</p>
    </div>
  );
};
