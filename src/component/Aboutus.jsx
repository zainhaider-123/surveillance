import React from 'react';
import teamMemberInfo from "./TeamData";
import supervisorsData from './SupervisorsData';
import Cards from './Cards';

const Aboutus = () => {
  return (
    <div className="container mx-auto my-20 px-4">
      <h3 className="text-3xl text-center font-medium mb-10 uppercase">About Us</h3>
      <h4 className='text-center text-2xl mb-5'>Students</h4>
      <p className="text-center text-md mb-10">
        A lot of collaboration among our group members was required to produce this project, from creating a web app that displays data from AI-based drone videos to instructing AIs on how to separate civilians from aerial footage.
      </p>
      <Cards Info={teamMemberInfo} size={4} showLinkedIn={true}/>
      <h4 className='text-center text-2xl my-10'>Supervisors</h4>
      <p className="text-center text-md mb-10">
        Our supervisors guided us well, and their experience was essential in developing our project. Engr. Hafsa Amanullah from NED University was always there to help us with our project, Dr. Yawar Rehman guided us with his AI experience, and Dr. Shazad Gul provided his knowledge about UAVs. Thanks to their mentorship, we managed to work closely together to finalize our project.
      </p>
      <Cards Info={supervisorsData} size={3}/>
    </div>
  );
};

export default Aboutus;
