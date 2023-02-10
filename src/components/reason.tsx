import { useState } from "react";
import ErrorMessage from "./error_message";

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
    const validated = validate(e.target.value);
    setErrorMessage(
      validated ? undefined : "Must be between 17 and 153 characters."
    );
    onChangeReason(validated, e);
  };

  const validate: (value: string) => boolean = (value) => {
    return value.length >= 17 && value.length <= 153;
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
