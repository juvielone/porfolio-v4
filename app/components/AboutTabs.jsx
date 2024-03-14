"use client";
import { motion } from "framer-motion";
import { Tab } from "@headlessui/react";
import { about_tab } from "../animations/variants";
import classNames from "classnames";
const Tabs = () => {
  return (
    <motion.div
      className="mt-12 font_content md:text-lg lg:text-lg
     lg:w-5/6 lg:ml-3 lg:text-left lg:h-64"
      variants={about_tab}
    >
      <Tab.Group>
        <Tab.List className="grid grid-cols-3 font-bold ">
          <Tab
            className={({ selected }) =>
              classNames(
                selected && "border-4 border-white border-b-primary-100 "
              )
            }
          >
            Web Development
          </Tab>

          <Tab
            className={({ selected }) =>
              classNames(
                selected && "border-4 border-white border-b-primary-100 "
              )
            }
          >
            Languages
          </Tab>

          <Tab
            className={({ selected }) =>
              classNames(
                selected && "border-4 border-white border-b-primary-100 "
              )
            }
          >
            Other
          </Tab>
        </Tab.List>
        <Tab.Panels className="mt-2">
          {/* Web Development */}
          <Tab.Panel>
            <ul className="lg:list-disc">
              <li className="mt-3">
                MERN Stack (MongoDB, Express.js, React, Node.js)
              </li>
              <li className="mt-3">NextJS</li>
              <li className="mt-3">ASP.NET (MVC)</li>
              <li className="mt-3">Bootstrap</li>
              <li className="mt-3">Tailwind CSS</li>
            </ul>
          </Tab.Panel>
          {/* Languanges */}
          <Tab.Panel>
            <ul className="lg:list-disc">
              <li className="mt-3">Javascript</li>
              <li className="mt-3">C#</li>
              <li className="mt-3">Java</li>
            </ul>
          </Tab.Panel>
          {/* Others */}
          <Tab.Panel>
            <ul className="lg:list-disc">
              <li className="mt-3">Microsoft Azure</li>
              <li className="mt-3">Power BI</li>
              <li className="mt-3">Figma</li>
            </ul>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </motion.div>
  );
};

export default Tabs;
