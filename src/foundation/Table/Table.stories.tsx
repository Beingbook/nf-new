import { Box } from '../Box/Box';
import { Table, Row, Cell, Head, Body } from './Table';

export default {
  title: 'Foundation/Table',
  component: Table,
};

export const BasicUsage = (args: any) => <Table {...args}>
  <Head>
    <Row><Cell head>Object Name</Cell><Cell head>Annotation Type</Cell><Cell head>Auto Label AI</Cell><Cell head>Count</Cell></Row>
  </Head>
  <Body>
    <Row><Cell>Vehicle_Car</Cell><Cell>Box</Cell><Cell>Common Objects</Cell><Cell align="right">1,123</Cell></Row>
    <Row><Cell>Vehicle_Van</Cell><Cell>Box</Cell><Cell>Apple watch project › Custom Auto Label AI 2</Cell><Cell align="right">12,123</Cell></Row>
  </Body>
</Table>;

BasicUsage.args = {
  variant: 'default',
};

export const Sticky = () => <Box border="1px solid" overflow="overlay" style={{ maxHeight: 120 }}>
  <Table variant="simple">
    <Head sticky>
      <Row><Cell head>1</Cell><Cell head>2</Cell><Cell head>3</Cell></Row>
    </Head>
    <Body>
      <Row><Cell>1</Cell><Cell>2</Cell><Cell>3</Cell></Row>
      <Row><Cell>1</Cell><Cell>2</Cell><Cell>3</Cell></Row>
      <Row><Cell>1</Cell><Cell>2</Cell><Cell>3</Cell></Row>
      <Row><Cell>1</Cell><Cell>2</Cell><Cell>3</Cell></Row>
      <Row><Cell>1</Cell><Cell>2</Cell><Cell>3</Cell></Row>
    </Body>
  </Table>
</Box>;
