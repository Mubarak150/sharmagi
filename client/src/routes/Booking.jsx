import BookingForm from "../components/BookingForm";

export default function Booking () {
  return(
    <section className="flex flex-col lg:flex-row items-center justify-center mt-24 lg:gap-8">
      <div className="flex items-center justify-center">
        <img src="/booking.png" alt="" className="w-4/5 lg:w-auto" />
      </div>
      <div className="">
        <BookingForm />
      </div>
    </section>
    
    
  )
}