import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.5rem;

  > label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    > input {
      border-radius: 8px;
      border: 1px solid transparent;
      padding: 0.6em 1.2em;
      font-size: 1em;
      font-weight: 500;
      font-family: inherit;
      background-color: var(--background-darker);
      cursor: pointer;
      transition: border-color 0.25s;

      &:hover {
        border-color: var(--primary);
      }

      &:focus,
      &:focus-visible {
        outline: 4px auto -webkit-focus-ring-color;
      }
    }
  }
`;
