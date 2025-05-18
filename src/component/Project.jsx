import Slider from './Slider';

const Project = () => {
  return (

    <div className="container mx-auto mt-10">
      <h3 className='text-3xl text-center font-medium mb-10 uppercase'>project</h3>
      <p className='text-center'>The main objectives of this project are to develop and deploy a UAV-based search and rescue system incorporating advanced AI algorithms and reliable hardware. Specifically, the project aims to collect aerial imagery, sensor data from past disaster scenarios, and datasets of human figures and obstacles. High-quality datasets will enable the AI model to learn to identify survivors in various conditions.</p>

      <Slider />
    </div>

  );
};

export default Project;
