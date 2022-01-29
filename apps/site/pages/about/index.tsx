import './index.module.css';
import { GetStaticProps } from 'next';

/* eslint-disable-next-line */

export interface AboutProps {
  name: string;
}

export function About(props: AboutProps) {
  return (
    <div>
      <h1>Welcome to About!{props.name}</h1>
    </div>
  );
}

export default About;

export const getStaticProps: GetStaticProps<AboutProps> = async () => {
  return {
    props: {
      name: 'Juri',
    },
  };
};
