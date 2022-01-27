
import { ComponentProps } from 'react';

import { Body, Box, Button, Caption, Cell, Row, Table, Typography } from '@superb-ai/ui';
import Head from 'next/head';

import { card, pageContainer, usageGrid } from './index.css';

function LabelValue({ label, value, valueVariant = 'body2' }: { label: string; value: string; valueVariant?: ComponentProps<typeof Typography>['variant'] }) {
  return <Box display="flex" alignItems="baseline" justifyContent="space-between" gap={1} >
    <Typography variant="bold2">{label}</Typography>
    <Typography variant={valueVariant}>{value}</Typography>
  </Box >;
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Billing &amp; Usage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box p={2} mx="auto" display="flex" flexDirection="column" gap={2} className={pageContainer}>
        <Box p={2} borderRadius="2px" display="flex" alignItems="center" className={card}>
          <Box marginLeft={1}>
            <Typography variant="headline4">
              <Typography color="red">Enterprise</Typography>
              {' '}Plan
            </Typography>
          </Box>
          <Box marginLeft="auto" display="flex" alignItems="center">
            <Box display="flex" gap={3} marginRight={3}>
              <LabelValue label="Interval" value="yearly" />
              <LabelValue label="Usage Reset" value="Feb 3, 2022" />
            </Box>
            <Button variant="strong-fill" color="red" size="l">Change Plan</Button>
          </Box>
        </Box>
        <Box p={3} borderRadius="2px" className={card}>
          <Box display="grid" gap={3} className={usageGrid}>
            <Box borderRight="2px solid" borderColor="gray-060" paddingRight={3}>
              <LabelValue label="Data Storage" value="158,998 / 500,000" valueVariant="body3" />
            </Box>
            <Box borderRight="2px solid" borderColor="gray-060" paddingRight={3}>
              <LabelValue label="User Seats" value="19 / 30" valueVariant="body3" />
            </Box>
            <Box>
              <LabelValue label="Auto-Label" value="260 / 500,000" valueVariant="body3" />
            </Box>
          </Box>
        </Box>
        <Box borderRadius="2px" className={card}>
          <Table>
            <Caption>Invoices</Caption>
            <Body>
              <Row>
                <Cell>Not Paid</Cell>
                <Cell>Oct 14, 2020 ~ Oct 14, 2020</Cell>
                <Cell>$ 125,000</Cell>
                <Cell align="right"><Button>View Details</Button></Cell>
              </Row>
              <Row>
                <Cell>Not Paid</Cell>
                <Cell>Oct 14, 2020 ~ Oct 14, 2020</Cell>
                <Cell>$ 125,000</Cell>
                <Cell align="right"><Button>View Details</Button></Cell>
              </Row>
            </Body>
          </Table>
        </Box>
      </Box>
    </>
  );
}
