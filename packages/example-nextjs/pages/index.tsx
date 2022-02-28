import Head from 'next/head';

import { BillingPage } from '../components/billing';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Billing &amp; Usage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BillingPage />
    </div>
  );
}
