import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Strategy',
    description: (
      <>
        Navigate the complexities of open source with our expert guidance. 
        <p>
          Together, we’ll develop a customized strategy that aligns with your business goals,
          from assessments to implementation roadmaps.
        </p>
      </>
    ),
  },
  {
    title: 'Policies & Processes',
    description: (
      <>
        Establish effective governance frameworks to promote compliance and collaboration. 
        <p>We’ll help you define best practices that empower your teams while minimizing risks.</p>
      </>
    ),
  },
  {
    title: 'Trainings',
    description: (
      <>
        Equip your team with essential skills through tailored training programs. 
        <p>Our hands-on workshops ensure your team is confident in using open-source software and contributing back to the community.</p>
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
