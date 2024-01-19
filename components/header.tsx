import Image from "next/image"
import banner from '../public/assets/bnr2.png'

const links = [
    { name: 'About Us', href: '#' },
    { name: 'Services We Offer', href: '#' },
    { name: 'Our Work', href: '#' },
    { name: 'Reach Out to Us', href: '#' },
  ]
  const stats = [
    { name: 'Success Rate', value: '79%' },
    { name: 'Successfull Events', value: '200+' },
    { name: 'Returning Clients', value: '80+' },
    { name: 'All kinds of Events', value: 'We Offer' },
  ]
  
  export default function Header() {
    return (
      <div className="relative isolate overflow-hidden bg-black bg-opacity-20 lg:h-screen pt-10 pb-24 sm:pb-32">
        <Image
          src={banner}
          alt=""
          className="absolute inset-0 -z-10 lg:h-screen w-full opacity-20 object-cover object-right md:object-center"
          height={900}
          width={900}
        />
        <div className="text-center pb-20 text-3xl font-bold">[Your Logo]</div>
        {/* <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div> */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            
            <h2 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#ae8625] via-[#f7ef8a] to-[#d2ac47] lg:text-5xl mb-5">Tie D Knot Events</h2>
            <p className="mt-6 text-lg leading-6 text-gray-200">
            Crafting Moments, Creating Memories: Your Event, Our Expertise. From College Fests to
             Unforgettable Marriages and Electrifying Concerts, We Make Every Occasion Remarkable!
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none  hover:text-gray-200">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 hover:cursor-pointer text-white  sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <a key={link.name} href={link.href} className="hover:cursor-pointer hover:text-gray-200">
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse">
                  <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    )
  }
  