import styled from "styled-components";

export const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  @media screen and (max-width: 375px) {
    flex-direction: column;
  }
`;

export const SocialMedia = styled.p`
  font-size: 30px;
  font-weight: 600;
`;
export const TotalFollowers = styled.p``;
export const SwitchMode = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AppContainer = styled.div`
  .App {
    height: 100%;
    background: ${({ theme }) => theme.mainBg};
    color: ${({ theme }) => theme.text};

    display: flex;
    justify-content: center;

    .container {
      max-width: 1440px;
      width: 100%;
      /* border: 2px solid green; */
    }
  }
`;
