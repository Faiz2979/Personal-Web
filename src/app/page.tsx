import About from '@/_components/section/About';
import Certificate from '@/_components/section/Certificate';
import Footer from '@/_components/section/Footer';
import Hero from '@/_components/section/Hero';
import Project from '@/_components/section/Project';
import Skills from '@/_components/section/Skill';

export default function Home() {
  return (
    <div className="">
      <Hero></Hero>
      <About></About>
      <Project></Project>
      <Skills></Skills>
      <Certificate></Certificate>
      <Footer></Footer>
    </div>
  );
}
