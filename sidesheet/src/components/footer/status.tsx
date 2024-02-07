import { Typography } from "@equinor/eds-core-react";
import styled from "styled-components";

type StatusProps = {
  status: string;
  date: Date;
  user: string;
};

const StatusWrapper = styled.div`
  display: flex;
  gap: 5px;
  display-direction: row;
  width: fit-content;
  white-space: nowrap;
`;

const SectionWrapper = styled.div`
  flex: display;
  flex-direction: column;
`;
export const Status = ({ status, date, user }: StatusProps) => {
  return (
    <StatusWrapper>
      <Typography group="ui" variant="tooltip" style={{ fontWeight: "bold" }}>
        {status}
      </Typography>{" "}
      <Typography group="ui" variant="tooltip">
        {date.toLocaleDateString("en-GB")}
      </Typography>{" "}
      <Typography group="ui" variant="tooltip">
        {user}
      </Typography>
    </StatusWrapper>
  );
};

//Take in elements and generate status for each one
export const StatusSection = () => {
  return (
    <SectionWrapper>
      <Status status={"Created"} date={new Date()} user={"Anne"} />
      <Status status={"Cleared"} date={new Date()} user={"Charlotte"} />
      <Status status={"Verified"} date={new Date()} user={"Charlotte"} />
    </SectionWrapper>
  );
};
