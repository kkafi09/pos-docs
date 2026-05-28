import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  accent: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Jalur Belajar Bertahap',
    accent: '01',
    description: (
      <>
        Mulai dari setup lingkungan, dasar bahasa, data frame, sampai proyek
        mini yang bisa dipakai untuk evaluasi praktikum.
      </>
    ),
  },
  {
    title: 'R dan Python',
    accent: '02',
    description: (
      <>
        Materi dibuat berdampingan supaya mahasiswa bisa membandingkan gaya
        kerja analisis data pada dua ekosistem populer.
      </>
    ),
  },
  {
    title: 'Siap Dipakai Internal',
    accent: '03',
    description: (
      <>
        Materi tersusun rapi untuk kebutuhan asisten dosen, mudah dibagikan
        ke tim, dan nyaman dipakai ulang selama praktikum.
      </>
    ),
  },
];

function Feature({title, accent, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <article className={styles.feature}>
        <div className={styles.featureAccent}>{accent}</div>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </article>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
