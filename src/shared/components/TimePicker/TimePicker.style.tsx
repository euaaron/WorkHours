import styled from "styled-components";

export const TimePickerContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TimePickerInput = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  > span {
    font-weight: bold;
  }

  > input {
    display: flex;
    width: 1.75rem;
    padding: 0.25rem;
    border-radius: 0.25rem;
    border: none;

    font-size: 1rem;
    line-height: 1.2rem;

    background-color: var(--background-darkest);
    text-align: center;    

    &:hover,
    &:focus {
      border: none;
      outline: none;
      color: var(--primary);
    }

    &[type="number"],
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      margin: 0;
      -moz-appearance: textfield;
      -webkit-appearance: none;
    }
  }
`;

export const Remember = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
