export interface ErrorMessageProps {
  errorMessage: string | undefined;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ errorMessage }) => (
  <span className="error">{errorMessage}</span>
);

export default ErrorMessage;
