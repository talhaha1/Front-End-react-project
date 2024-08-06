import { css } from '@emotion/react';

export const rootStyle = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  padding: 16px;
`;

export const tabsContainerStyle = css`
  width: 100%;
  overflow-x: auto; /* Enable horizontal scrolling */
  white-space: nowrap; /* Prevent tabs from wrapping */
  margin-bottom: 16px; /* Space between tabs and content */
`;

export const tabsStyle = css`
  display: flex;
  flex-wrap: nowrap; /* Prevent tabs from wrapping */
  min-width: 320px; /* Ensure that tabs have minimum width on small screens */
`;

export const serviceCardStyle = css`
  width: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden; /* Ensure no scrolling */
`;
