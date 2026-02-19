import Link from "next/link";
import { ticketsPath } from "@/paths";


const HomePage = () => {
  return (
    <section className='flex-1 flex flex-col gap-y-8'>
      <div>
        <h2 className='text-3xl font-bold tracking-tight mb-2'>HomePage</h2>
        <p className='text-sm text-muted-foreground mb-4'>Your home for all your tickets</p>
      </div>
      <div className='flex justify-center'>
        <Link href={ticketsPath()} className='underline'>Go to the Tickets</Link>
      </div>
    </section>
  );
};

export default HomePage;