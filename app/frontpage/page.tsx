'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from '../page.module.css';

export default function Frontpage() {
  const router = useRouter();

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/d/service-hub/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/d/service-hub/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <Link href="/" className={styles.card}>
          <h2>
            Go Back with Link<span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </Link>

        <button
          type="button"
          className={styles.card}
          onClick={(e) => {
            e.preventDefault();
            router.push('/');
          }}
        >
          <h2>
            Go back with Router <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </button>
      </div>
    </main>
  );
}
