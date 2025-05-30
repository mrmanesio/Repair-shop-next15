import BackButton from "@/components/BackButton";
import { getCustomer } from "@/lib/queries/getCustomer";

export default async function CustomerFormPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  try {
    const { customerId } = await searchParams;
    console.log('customerId', customerId);
    
    // Edit cutomer form
    if (customerId) {
      const customer = await getCustomer(parseInt(customerId));
      console.log('customer', customer);
      if (!customer) {
        return (
          <>
            <h2 className="text-2xl mb-2">
              Customer ID
              #{customerId}
              not found
            </h2>
            <BackButton title="Go Back" className="mt-4" variant="default" />
          </>
          );
      }
      
    } else {
      // New customer form
      return <h2 className="text-2xl mb-2">New Customer</h2>;
    }

    

    
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error("An unknown error occurred");
    }
    return <div>Error</div>;
  }
}