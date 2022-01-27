import { Box, styled } from "@superb-ai/ui2";

export default function Index() {
  return (
    <Root>
      <FloatingCard>
        <Title css={{ flex: 1 }}>
          <em>Enterpise</em> Plan
        </Title>
        <Box css={{ display: "flex", gap: "$2" }}>
          <TitleRightText>
            <strong>Interval</strong> yearly
          </TitleRightText>
          <TitleRightText>
            <strong>Usage Reset</strong> Feb 3, 2022
          </TitleRightText>
        </Box>
        <Box>
          <PrimaryButton>Change Plan</PrimaryButton>
        </Box>
      </FloatingCard>
      <FloatingCard css={{ alignItems: "stretch" }}>
        <SecondPanel>
          <SecondPanelTitle>Data Storage</SecondPanelTitle>
          <SecondPanelSecondary>159,800</SecondPanelSecondary>
        </SecondPanel>
        <VerticalDivider />
        <SecondPanel>
          <SecondPanelTitle>Data Storage</SecondPanelTitle>
          <SecondPanelSecondary>159,800</SecondPanelSecondary>
        </SecondPanel>
        <VerticalDivider />
        <SecondPanel>
          <SecondPanelTitle>Data Storage</SecondPanelTitle>
          <SecondPanelSecondary>159,800</SecondPanelSecondary>
        </SecondPanel>
      </FloatingCard>
      <Table>
        <thead>
          <tr>
            <th colSpan={4}>Invoices</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Chip>Not Paid</Chip>
            </td>
            <td>Oct 14, 2020 ~ Oct 14 2020</td>
            <td>$125,000</td>
            <td>
              <SecondaryButton>View Details</SecondaryButton>
            </td>
          </tr>
          <tr>
            <td>
              <Chip>Not Paid</Chip>
            </td>
            <td>Oct 14, 2020 ~ Oct 14 2020</td>
            <td>$125,000</td>
            <td>
              <SecondaryButton>View Details</SecondaryButton>
            </td>
          </tr>
        </tbody>
      </Table>
    </Root>
  );
}

const Root = styled("div", {
  width: 960,
  mx: "auto",
  my: "$4",
  display: "flex",
  flexFlow: "column nowrap",
  gap: "$2",
  alignItems: "stretch",
});

const FloatingCard = styled("div", {
  boxShadow: "$1",
  p: "$3",
  display: "flex",
  gap: "$3",
  alignItems: "center",
  borderRadius: 4,
});

const Title = styled("h1", {
  fontSize: "$xl",
  fontFamily: "$inter",
  m: 0,
  fontWeight: "$medium",

  "& > em": {
    color: "$red600",
    fontStyle: "normal",
  },
});

const TitleRightText = styled("span", {
  fontSize: "$m",
  fontFamily: "$inter",
  m: 0,
  fontWeight: "$light",

  "& > strong": {
    fontWeight: "$semibold",
  },
});

const PrimaryButton = styled("button", {
  border: 0,
  backgroundColor: "$red600",
  color: "#fff",
  height: "$m",
  px: "$1_5",
  fontSize: "$s",
  fontFamily: "$inter",
  cursor: "pointer",
  borderRadius: 2,
});

const VerticalDivider = styled("div", {
  width: 1,
  backgroundColor: "$gray80",
  my: "calc($1 * -1)",
});

const SecondPanel = styled("div", { flex: 1, display: "flex" });
const SecondPanelTitle = styled("span", {
  fontFamily: "$inter",
  fontSize: "$l",
  fontWeight: "$medium",
});
const SecondPanelSecondary = styled("span", {
  fontFamily: "$inter",
  fontSize: "$m",
  ml: "auto",
  fontWeight: "$light",
});

const Table = styled("table", {
  boxShadow: "$1",
  textAlign: "left",
  borderCollapse: "collapse",

  fontFamily: "$inter",
  fontSize: "$m",

  th: {
    p: "$3",
    borderBottom: "1px solid $gray100",
    fontSize: "$l",
  },

  td: {
    px: "$3",
    py: "$2",

    "&:last-child": {
      textAlign: "right",
    },
  },
});

const SecondaryButton = styled("button", {
  border: "1px solid $gray600",
  backgroundColor: "#fff",
  color: "$gray600",
  height: "calc($m * 0.8)",
  px: "$1_5",
  fontSize: "$xs",
  fontFamily: "$inter",
  cursor: "pointer",
  borderRadius: 2,
});

const Chip = styled("span", {
  display: "inline-flex",
  alignItems: "center",
  backgroundColor: "$red100",
  color: "$red700",
  p: "$1",
  borderRadius: 2,
  lineHeight: 1,
});
