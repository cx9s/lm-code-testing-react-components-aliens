export interface ReasonProps {
  reason: string;
  onChangeReason: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Reason: React.FC<ReasonProps> = ({ reason, onChangeReason }) => (
  <div>
    <label htmlFor="reason">Reason for sparing:</label>
    <textarea
      id="reason"
      placeholder="reasons"
      value={reason}
      onChange={onChangeReason}
    ></textarea>
  </div>
);

export default Reason;
