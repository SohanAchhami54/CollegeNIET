  "use client"
import Hero from '../components/Academics/Hero';
import Academicprogram from '../components/Academics/Academicprogram';
import Engjourney from '../components/Academics/Engjourney';
  const Page = () => {
      return (
      <>
      {/* hero part  */}
         <Hero/>
       {/* academic programs part  */}
       <Academicprogram/>
      
      {/* Engineering journey  */}
       <Engjourney/>

      
      
      </>
    )
  }

  export default Page