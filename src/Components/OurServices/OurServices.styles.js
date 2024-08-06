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
  background-color: #000000; /* Black background */
  color: #FFFFFF; /* White text color */
`;

export const tabsContainerStyle = css`
  width: 100%;
  overflow-x: auto; /* Enable horizontal scrolling */
  white-space: nowrap; /* Prevent tabs from wrapping */
  margin-bottom: 16px; /* Space between tabs and content */
  background-color: #000000; /* Black background */
  color: #FFFFFF; /* White text color */
`;

export const tabsStyle = css`
  display: flex;
  flex-wrap: nowrap; /* Prevent tabs from wrapping */
  min-width: 320px; /* Ensure that tabs have minimum width on small screens */
  background-color: #000000; /* Black background */
  color: #FFFFFF; /* White text color */

  .MuiTabs-indicator {
    background-color: #FFFFFF; /* White indicator color */
  }

  .MuiTab-root {
    color: #FFFFFF; /* White text color for tabs */
    background-color: #000000; /* Black background for tabs */
    border: 1px solid #FFFFFF; /* White border for tabs */
    border-radius: 4px; /* Rounded corners for tabs */
    margin: 4px; /* Space between tabs */
    transition: background-color 0.3s ease; /* Smooth transition for background color */

    &:hover {
      background-color: #333333; /* Darker background on hover */
    }

    &.Mui-selected {
      background-color: #FFFFFF; /* White background for selected tab */
      color: #000000; /* Black text color for selected tab */
    }
  }
`;

export const serviceCardStyle = css`
  width: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden; /* Ensure no scrolling */
  background-color: #000000; /* Black background */
  color: #FFFFFF; /* White text color */
`;

export const serviceCardContainerStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 16px;
  box-sizing: border-box;
  background-color: #000000; /* Black background */
  color: #FFFFFF; /* White text color */
`;

export const imageStyle = css`
  width: 100%;
  height: auto;
  max-width: 100%; /* Full width of screen */
  max-height: 100vh; /* Max height to fit the screen */
  object-fit: cover; /* Cover the area with aspect ratio maintained */
  display: block;
  margin: 0 auto; /* Center image horizontally */
`;

export const contentStyle = css`
  margin-top: 16px;
  text-align: center;
`;
