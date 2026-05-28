import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
    return (
        <header className={clsx('hero', styles.heroBanner)}>
            <div className={clsx('container', styles.heroLayout)}>
                <div className={styles.heroCopy}>
                    <p className={styles.kicker}>Pemrograman Open Source</p>
                    <Heading as="h1" className={styles.heroTitle}>
                        Modul Asdos untuk R dan Python
                    </Heading>
                    <p className={styles.heroSubtitle}>
                        Materi praktikum yang membantu mahasiswa menyiapkan lingkungan kerja,
                        memahami dasar analisis data, dan berkolaborasi lewat GitHub.
                    </p>
                    <div className={styles.buttons}>
                        <Link className="button button--primary button--lg" to="/docs/intro">
                            Mulai Belajar
                        </Link>
                    </div>
                </div>
                <div className={styles.heroVisual} aria-hidden="true">
                    <div className={styles.codeWindow}>
                        <div className={styles.windowBar}>
                            <span />
                            <span />
                            <span />
                        </div>
                        <pre>
                            <code>{`# R
mean(c(80, 88, 92))

# Python
import pandas as pd
df.describe()`}</code>
                        </pre>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default function Home(): ReactNode {
    return (
        <Layout
            title="Modul Asdos POS"
            description="Materi praktikum Pemrograman Open Source untuk R dan Python">
            <HomepageHeader />
            <main>
                <HomepageFeatures />
            </main>
        </Layout>
    );
}
