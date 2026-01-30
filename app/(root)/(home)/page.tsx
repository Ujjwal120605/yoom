'use client';

import MeetingTypeList from '@/components/MeetingTypeList';
import CurrentTime from '@/components/CurrentTime';
import { useGetCalls } from '@/hooks/useGetCalls';

const Home = () => {
  const { upcomingCalls } = useGetCalls();
  const upcomingCall = upcomingCalls && upcomingCalls.length > 0
    ? upcomingCalls[0]
    : null;

  const meetingTime = upcomingCall?.state?.startsAt
    ? new Date(upcomingCall.state.startsAt).toLocaleString('en-US', { hour: '2-digit', minute: '2-digit' })
    : null;

  return (
    <section className="flex size-full flex-col gap-5 text-white">
      <div className="h-[303px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="glassmorphism max-w-[273px] rounded py-2 text-center text-base font-normal">
            Upcoming Meeting at: {meetingTime || 'No Upcoming Meeting'}
          </h2>
          <CurrentTime />
        </div>
      </div>

      <MeetingTypeList />
    </section>
  );
};

export default Home;
