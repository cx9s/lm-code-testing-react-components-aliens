import { useState } from "react";
import ErrorMessage from "./error_message";
import { validReason } from "./validations";

export interface ReasonProps {
  reason: string;
  onChangeReason: (
    validated: boolean,
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}

const Reason: React.FC<ReasonProps> = ({ reason, onChangeReason }) => {
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );

  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const valid = validReason(e.target.value);
    setErrorMessage(valid.message);
    onChangeReason(valid.validated, e);
  };

  return (
    <div>
      <label htmlFor="reason">Reason for sparing:</label>
      <textarea
        id="reason"
        placeholder="reasons"
        rows={6}
        cols={30}
        value={reason}
        onChange={onChangeHandler}
      ></textarea>
      <ErrorMessage errorMessage={errorMessage} />
    </div>
  );
};

export default Reason;
