import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';
import BookingForm from './BookingForm';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Booking', href: '/booking' },
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      

      <div className="relative isolate px-6 pt-14 lg:px-8 ">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="flex relative ">
            <div className="mx-auto  max-w-2xl py-32 sm:py-48 lg:mx-8 lg:py-32 lg:inline-flex lg:justify-end lg:items-center h-full">
                <div className="text-center lg:text-left">
                    <h1 className="text-4xl font-bold tracking-tight text-red-400 sm:text-6xl">
                        Get Moving with Experts
                    </h1>
                    <p className="mt-3 text-xl font-semibold leading-8 text-gray-800">
                        Reliable transportation services in Boston. We handle your travel needs with precision and care.
                    </p>
                    
                    <p className="mt-3 text-lg leading-8 text-gray-700">
                        Whether it's your daily commute or a special trip, count on us for a smooth journey.
                    </p>
                    <div className="mt-8 flex flex-col-reverse gap-y-3 sp7:gap-y-0 sp7:flex-row items-center justify-center lg:justify-start gap-x-6">
                        <Link
                            to="/booking"
                            className="lg:hidden rounded-md bg-red-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Book Your Ride
                        </Link>
                        <Link to="/contact" className="text-sm font-semibold leading-6 text-gray-900 hover:text-red-400 px-12 py-2.5 border-2 border-gray-500 hover:border-red-400">
                            Contact Us <span aria-hidden="true">→</span>
                        </Link>
                </div>
                <div className="hidden lg:block">
                    <div className=" absolute  -top-10  right-12">
                        <BookingForm />
                    </div>
                </div>
                

            </div>
            </div>
          
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  )
}
