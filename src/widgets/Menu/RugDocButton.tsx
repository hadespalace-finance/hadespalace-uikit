import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Profile } from "./types";
import RugDocAudit from "./icons/RugDoc";

interface AuditProps {
  rugDocLink?: string;
}

const StyledAudit = styled.div`
  margin-bottom: 5px;
  text-align: center;

  svg {
    width: 100%;
  }
`;

const RugDocButton: React.FC<AuditProps> = ({ rugDocLink }) => {
  return (
    <StyledAudit>
      <a href={rugDocLink} aria-label="AuditLink" target="_blank">
        <RugDocAudit />
      </a>
    </StyledAudit>
  )
};

export default RugDocButton;
