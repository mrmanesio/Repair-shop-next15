import { getTicket } from "@/lib/queries/getTicket";
import { getCustomer } from "@/lib/queries/getCustomer";
import BackButton from "@/components/BackButton";

export default async function TicketFormPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  try {
    const { ticketId, customerId } = await searchParams;
    console.log('ticketId', ticketId);
    console.log('customerId', customerId);

    if (!customerId && !ticketId) {
      return (
        <>
          <h2 className="text-2xl mb-2">
            Ticket ID or Customer ID is required to load a ticket form
          </h2>
          <BackButton title="Go Back" className="mt-2" variant="default" />
        </>
      );
    }

    //New ticket form
    if (customerId) {
      const customer = await getCustomer(parseInt(customerId));
      if (!customer) {
        return (
          <>
            <h2 className="text-2xl mb-2">Customer ID #{customerId} not found</h2>
            <BackButton title="Go Back" className="mt-2" variant="default" />
          </>
        );
      }
      if (!customer.active) {
        return (
          <>
            <h2 className="text-2xl mb-2">Customer #{customerId} is not active</h2>
            <BackButton title="Go Back" className="mt-2" variant="default" />
          </>
        );
      }

      console.log('customer', customer);
      return <h2 className="text-2xl mb-2">New Ticket for Customer #{customer.firstName} {customer.lastName}</h2>;
    }

    // Edit ticket form
    if (ticketId) {
      const ticket = await getTicket(parseInt(ticketId));
      if (!ticket) {
        return (
          <>
            <h2 className="text-2xl mb-2">Ticket ID #{ticketId} not found</h2>
            <BackButton title="Go Back" className="mt-2" variant="default" />
          </>
        );
      }

      const customer = await getCustomer(ticket.customerId);
      if (!customer) {
        return (
          <>
            <h2 className="text-2xl mb-2">Customer ID #{ticket.customerId} not found</h2>
            <BackButton title="Go Back" className="mt-2" variant="default" />
          </>
        );
      }

      console.log('ticket: ', ticket);
      console.log('customer: ', customer);
      return <h2 className="text-2xl mb-2">Edit Ticket #{ticket.id}</h2>;
    }
  


  } catch (error) {
    console.error(error);
    return <div>Error</div>;
  }
}