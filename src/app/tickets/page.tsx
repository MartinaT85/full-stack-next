import Link from "next/link";
import { initialTickets } from "@/data";
import { ticketPath } from "@/paths";
import CheckIcon from "@/icons/CheckIcon";
import XmarkIcon from "@/icons/XmarkIcon";

const TICKET_ICONS = {
    open: <CheckIcon />,
    closed: <XmarkIcon />,
}

const TicketsPage = () => {
    return (
        <section className='flex-1 flex flex-col gap-y-8'>
            <div>
                <h2 className='text-3xl font-bold tracking-tight mb-2'>TicketsPage</h2>
                <p className='text-sm text-muted-foreground mb-4'>Your home for all your tickets</p>
            </div>
            <ul className='flex flex-col gap-y-4 items-center w-full max-w-[420px] animate-fade-from-top'>
                {initialTickets.map(ticket => {
                    return (
                        <li key={ticket.id} className='w-full p-4 border border-fuchsia-800 rounded-md flex flex-col gap-y-4'>
                            <h3 className='text-lg font-bold tracking-tight flex gap-x-2 items-center'>{TICKET_ICONS[ticket.status]}<span>{ticket.title}</span>
                            </h3>
                            <p className='text-sm text-muted-foreground truncate'>{ticket.description}</p>
                            <Link href={ticketPath(ticket.id)} className='underline text-sm'>View Ticket</Link>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

export default TicketsPage;