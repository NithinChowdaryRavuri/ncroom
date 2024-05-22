"use client";

import { useState, useEffect } from "react";
import MeetingTypeList from "@/components/MeetingTypeList";
import { useGetCalls } from "@/hooks/useGetCalls";

const Home = () => {
  const [now, setNow] = useState(new Date());
  const { upcomingCalls } = useGetCalls();

  let upcomingMeeting = "";
  if (upcomingCalls && upcomingCalls.length > 0) {
    const nextMeeting = upcomingCalls[0];
    const startsAt = String(nextMeeting.state.startsAt).slice(0, 10); // convert to string before slicing
    upcomingMeeting = `Upcoming Meeting at: ${startsAt}`;
  } else {
    upcomingMeeting = "Hurray no more meetings 🥳";
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const date = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
    now
  );

  return (
    <section className="flex flex-col gap-5 text-white h-full">
      <div className="bg-hero bg-cover h-[303px] w-full rounded-[20px]">
        <div className="flex flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11 h-full">
          <h2 className="glassmorphism max-w-[273px] rounded py-2 text-center text-base font-normal text-white">
            {upcomingMeeting}
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
          </div>
        </div>
      </div>

      <MeetingTypeList />
    </section>
  );
};

export default Home;
