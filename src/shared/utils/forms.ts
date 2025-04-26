import type { FieldValues, Path, UseFormSetError } from 'react-hook-form';

export function fieldApiError<T extends FieldValues>(
  field: Path<T>,
  response: { [key: string]: string[] | string | undefined },
  setError: UseFormSetError<T>
) {
  if (field in response) {
    if (Array.isArray(response[field])) {
      setError(field, {
        message: response[field][0],
      });
    }
  }
}
