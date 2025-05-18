import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Cards = ({ Info, size, showLinkedIn  }) => {
  const colClass = {
    1: 'xl:grid-cols-1',
    2: 'xl:grid-cols-2',
    3: 'xl:grid-cols-3',
    4: 'xl:grid-cols-4',
    5: 'xl:grid-cols-5',
    6: 'xl:grid-cols-6',
  }[size];

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ${colClass} gap-6`}>
      {Info.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: index * 0.05 }}
          viewport={{ once: true, amount: 0.7 }}
          whileHover={{ scale: 1.03 }}
          className="bg-zinc-300 rounded-xl shadow-md p-4 flex flex-col w-full"
        >
          <img
            src={item.image}
            alt={`${item.title} image`}
            className="h-40 w-full object-contain rounded-4xl mb-4"
          />

          <div className='flex flex-col justify-between h-full'>
            <div>
              <h2 className="font-bold text-xl text-center uppercase">
                {item.title}
              </h2>
              <p className="text-center my-3 text-sm text-zinc-700">
                {item.part}
              </p>
              <p className="text-center my-3 text-sm text-zinc-700">
                {item.detail}
              </p>
            </div>
            <div>
              {showLinkedIn && (
                <div>
                  <Link to="/" className="block mt-6 text-center">
                    <p className="text-zinc-700 font-bold text-md uppercase hover:underline">
                      linkedin
                    </p>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Cards;
