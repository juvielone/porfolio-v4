"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  logo_variant,
  nav_link_container,
  nav_link,
} from "../animations/variants";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "About Me", href: "#aboutme", current: false },
  { name: "Projects", href: "#projects", current: false },
  { name: "Contact", href: "#contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Disclosure
      as="nav"
      className="sticky top-0 z-50
                bg-inherit font_heading
                backdrop-blur-md shadow-md"
    >
      {({ open }) => (
        <>
          <div className="mx-auto w-full sm:px-6 lg:px-8 lg:p-[1.2rem] pt-8">
            <div className="relative flex h-16 items-center justify-between md:w-11/12 md:mx-auto">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <motion.div
                  className="flex flex-shrink-0 items-center"
                  variants={logo_variant}
                  initial="hidden"
                  animate="show"
                >
                  <Image
                    className="w-32 md:w-32 lg:w-40 sm:h-14 "
                    src="/images/logo.svg"
                    alt="Your Company"
                    width={800}
                    height={800}
                  />
                </motion.div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Nav Links */}
                <div className="relative ml-3">
                  <div className="hidden sm:ml-6 sm:block">
                    <motion.div
                      className="flex space-x-4"
                      variants={nav_link_container}
                      initial="hidden"
                      animate="show"
                    >
                      {navigation &&
                        navigation.map((item) => (
                          <motion.a
                            variants={nav_link}
                            key={item.name}
                            href={item.href}
                            className="text-gray-700 hover:bg-gray-700 hover:text-white 
                          rounded-md px-3 py-2 text-lg font-medium"
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </motion.a>
                        ))}
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
