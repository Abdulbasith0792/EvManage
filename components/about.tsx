

import Image from 'next/image';
import W from '../public/assets/w3.jpg'

const AboutUs: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-3xl font-semibold mb-6 text-[#776fff]">About Us</h2>

        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <Image
              src={W} // Replace with the actual path to your image
              alt="About Us Image"
              width={600}
              height={400}
              className="rounded-md"
            />
          </div>

          <div className="md:w-1/2 md:ml-6 flex items-center flex-col justify-center">
            <p className="text-gray-700 mb-4">
              Your Event Management is a premier company specializing in creating memorable experiences for all occasions.
            </p>
            <p className="text-gray-700 mb-4">
              Whether it&apos;s a dreamy wedding, a joyful birthday party, or any other special function, we bring your vision to life with creativity and expertise.
            </p>
            <p className="text-gray-700 mb-4">
              Our team of dedicated professionals ensures seamless planning, execution, and attention to every detail, making your event truly special and stress-free.
            </p>
            <p className="text-gray-700">
              Our team of dedicated professionals ensures seamless planning, execution, and attention to every detail, making your event truly special and stress-free.
            </p>
            <p className="text-gray-700 mb-4">
              Your Event Management is a premier company specializing in creating memorable experiences for all occasions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
