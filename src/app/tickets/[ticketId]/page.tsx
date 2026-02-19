import clsx from "clsx";
import { initialTickets } from "@/data";

type TicketPageProps = {
    params: Promise<{
        ticketId: string;
    }>;
};

const TicketPage = async ({ params }: TicketPageProps) => {
    const { ticketId } = await params;
    const ticket = initialTickets.find(ticket => ticket.id === ticketId);

    if (!ticket) {
        return <div>Ticket not found</div>;
    }

    return (
        <div>
            <h2>TicketPage: {ticket?.title}</h2>
            <p>Description: {ticket?.description}</p>
            {/* or we can use as a second argument  an object e.g. {line-through: ticket?.status === "closed"} */}
            <p className={clsx('text-sm text-muted-foreground', ticket?.status === "open" ? "text-green-500" : "text-red-500")}>Status: {ticket?.status}</p>
        </div>
    )
};

export default TicketPage;