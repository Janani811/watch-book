import { StatusContainer } from './elements';

interface StatusProps {
  statusLabel?: string;
  statusValue?: number | string;
}

export const Status = ({ statusValue, statusLabel }: StatusProps) => {
  return (
    <StatusContainer>
      <div className={`status-${statusValue}`} />
      <div className="label">{statusLabel}</div>
    </StatusContainer>
  );
};