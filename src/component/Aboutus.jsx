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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel natus ad inventore. 
        Molestiae itaque est velit saepe repudiandae eius unde delectus neque totam voluptate? 
        Ab iste alias hic dolorem sit eos repellat necessitatibus iusto saepe ipsam. Ad, animi 
        dolorem minima mollitia cumque tempore ullam sunt dicta voluptas tenetur hic reiciendis?
      </p>
      <Cards Info={teamMemberInfo} size={4} />
      <h4 className='text-center text-2xl my-10'>Supervisors</h4>
      <p className="text-center text-md mb-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel natus ad inventore. 
        Molestiae itaque est velit saepe repudiandae eius unde delectus neque totam voluptate? 
        Ab iste alias hic dolorem sit eos repellat necessitatibus iusto saepe ipsam. Ad, animi 
        dolorem minima mollitia cumque tempore ullam sunt dicta voluptas tenetur hic reiciendis?
      </p>
      <Cards Info={supervisorsData} size={3}/>
    </div>
  );
};

export default Aboutus;
