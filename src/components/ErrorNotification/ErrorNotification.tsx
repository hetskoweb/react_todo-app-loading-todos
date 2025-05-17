type ErrorType = 'load' | 'add' | 'delete' | 'update' | '';

type Props = {
  error: ErrorType;
  onClose: () => void;
};

const errorMessages: Record<ErrorType, string> = {
  load: 'Unable to load todos',
  add: 'Unable to add a todo',
  delete: 'Unable to delete a todo',
  update: 'Unable to update a todo',
  '': '', // пусто, если нет ошибки
};

export const ErrorNotification: React.FC<Props> = ({ error, onClose }) => {
  if (!error) {
    return null;
  }

  return (
    <div
      data-cy="ErrorNotification"
      className="notification is-danger is-light has-text-weight-normal"
    >
      <button
        data-cy="HideErrorButton"
        type="button"
        className="delete"
        onClick={onClose}
      />
      {errorMessages[error]}
    </div>
  );
};
