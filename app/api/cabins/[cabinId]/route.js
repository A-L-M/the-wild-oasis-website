import { getBookedDatesByCabinId } from "@/app/_lib/data-service";

export const GET = async (request, { params }) => {
  const { cabinId } = params;

  try {
    const [cabin, bookedDates] = Promise.all([
      getCabin(cabinId),
      getBookedDatesByCabinId,
    ]);
    return Response.json({ cabin, bookedDates });
  } catch (error) {
    return Response.json({ message: "Cabin not found" });
  }
};
