import { styles } from '../styles';
import { socials } from '../constants';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>John</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 mb-10 text-white-100`}>
            Computer Science Student at the National University of Singapore (NUS) <br className='sm:block hidden' />
            <br/>
            Interested in software development, data analysis, and entrepreneurship
          </p>
        </div>
      </div>
      <div className='absolute left-1/2 transform -translate-x-1/2 bottom-20 sm:bottom-20'>
        <div className='mt-5 flex flex-col gap-5 justify-center'>
          {socials.map((social) => (
            <a
              href={social.url}
              target='_blank'
              className="bg-tertiary rounded-[20px] py-5 px-40   flex items-center"
            >
              <img src={social.icon} alt={social.alt} className="w-15 h-10 mr-2" />
              <span>{social.title}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
