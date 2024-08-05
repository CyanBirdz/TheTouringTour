
import { useState, useRef } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import thebanner from './thebanner';
import Pleasework from './Coomp/Pleasework';
import bigname from './Coomp/bigname.png'
import Heroe from './Heroe';
import Pricing from './Pricing';
import Questionare from './Questionare';
import Haeeeeding from './Haeeeeding';
import TheQ from './Coomp/TheQ';
import TheLay from './Coomp/TheLay';
import TheVid from './Coomp/bigname.png';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LaFooter from './LaFooter';


const navigation = [
    { name: 'Enroll', section: 'section1' },
    { name: 'Activities', section: 'section2' },
    { name: 'Questions', section: 'section3' },
  
  ];
  
const SuperLaningPage = () => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Create refs for each section
    const sectionRefs = {
      section1: useRef(null),
      section2: useRef(null),
      section3: useRef(null),
      section4: useRef(null),
    };
  
    // Scroll to a section smoothly when clicking on a navigation link
    const scrollToSection = (section) => {
      const sectionRef = sectionRefs[section];
      if (sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };
  return (
    <div>
      
      <header className="bg-white sticky top-0 z-50">
        <nav
          aria-label="Global"
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src={TheVid}
                className="h-12  "
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.section)}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </button>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
           
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-10" />
          <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => {
                        scrollToSection(item.section);
                        setMobileMenuOpen(false);
                      }}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      {/* Main content area */}
      <div className="relative  ">
        {/* Section 1 */}
        <div
          ref={sectionRefs.section1}
          className="  flex  justify-center items-center mb-20">
            <img src={TheVid} alt="" />
            <div className='ml-16'>
              <div className=''></div>
          <h1 className="text-center font-display text-6xl font-medium tracking-tight text-slate-900 sm:text-6xl mt-20 ">
        SIMANOF IS GOING {' '}
        <h1></h1>
        <span className="relative whitespace-nowrap text-orange-600">
        <svg
            aria-hidden="true"
            viewBox="0 0 418 42"
            className="absolute left-0 top-2/3 h-[0.58em] w-full fill-blue-300/70"
            preserveAspectRatio="none"
          >
            <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
          </svg>
        
          <span className="relative italic text-8xl font-extrabold">UNIVERSAL</span>
        </span>{' '}
      
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-2xl font-semibold tracking-tight text-slate-700 flex justify-center">
Audition for our 2025 Universal Studios Tour today!
      </p>
      <div className="flex justify-center pt-4 mx-4">
   
      <button className="bg-blue-500 text-white px-4 py-2 mx-4 rounded-lg hover:bg-blue-400 transition shadow-lg">
      <Link to="/Questionare">Apply Today</Link>
      </button>
     
    </div>

    </div>

        </div>

        {/* Section 2 */}
        <div
          ref={sectionRefs.section2}
          className=" flex justify-center items-center "
        >
          
          <TheLay />
        </div>
        <div
          ref={sectionRefs.section3}
          className=" flex justify-center items-center w-screen"
        >
      <TheQ />
        </div>

       
<LaFooter />
        {/* Section 4 */}
      
      </div>
    </div>
  )
}

export default SuperLaningPage
