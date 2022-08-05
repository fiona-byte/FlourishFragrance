import { AboutContainer, AboutText } from './about.styles';

const About = () => {
  return (
    <AboutContainer id='about'>
      <h2 className='heading'>About us</h2>
      <AboutText style={{ paddingBottom: '2.5rem' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam cras magna sit diam venenatis amet quis. Morbi ut
        augue tempus risus. Neque lobortis semper tellus mattis. Aliquam ac mattis egestas risus auctor quam. Tempor
        dictum donec odio erat phasellus enim. Libero massa metus, eget urna, nibh pulvinar.
      </AboutText>
      <AboutText>
        Gravida auctor nisl venenatis metus. Purus odio quis purus id tristique dignissim tempor, ac. Gravida
        condimentum mi enim tincidunt varius sollicitudin. Arcu fames aliquam sit in ut purus. Suspendisse vel
        consectetur in risus adipiscing elementum arcu id purus. Feugiat tortor, nulla ut parturient viverra sed nunc
        consectetur malesuada.
      </AboutText>
    </AboutContainer>
  );
};

export default About;
