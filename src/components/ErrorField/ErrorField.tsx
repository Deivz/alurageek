import { errorMessages } from "../../utils/errors";

export default function ErrorField({ type, field }) {
  return (
    <>
      <span className='erro'>{errorMessages[field][type]}</span>
    </>
  );
}