import { useState } from 'react';

import { Button, ToggleButton } from '@superb-ai/ui';
import Head from 'next/head';


export default function Home() {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p>Hello world.</p>
      <p><Button color="red">Click me!</Button></p>
      <p><ToggleButton color="red" checked={isToggled} onClick={() => setIsToggled(!isToggled)} /> toggle me!</p>
    </>
  );
}
