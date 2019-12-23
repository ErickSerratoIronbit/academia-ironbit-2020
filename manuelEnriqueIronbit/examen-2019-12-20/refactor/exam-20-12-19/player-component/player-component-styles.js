import { css } from 'lit-element';

export default css`
:host {
  display: inline-block;
  box-sizing: border-box; }

:host([hidden]), [hidden] {
  display: none !important; }

*, *:before, *:after {
  box-sizing: inherit;
  font-family: inherit; }

.song {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column; }
  .song p {
    text-align: center; }
`;
