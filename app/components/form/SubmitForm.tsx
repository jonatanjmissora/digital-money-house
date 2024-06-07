//import Spinner from '../UI/Spinner';

import SVGSpinner from "../UI/SVGSpinner";

export const SubmitForm = ({
  text,
  isLoading,
}: {
  text: string;
  isLoading?: boolean;
}) => {
  return (
    <button
      className={`form-btn bg-primary ${isLoading && 'opacity-75'}`}
      type="submit"
      disabled={isLoading}
    >
      {isLoading ? <SVGSpinner /> : text}
    </button>
  );
};
