import { useState } from 'react';
 interface FormErrors {
  [key: string]: string;
}

 interface UseFormReturn<T> {
  values: T;
  errors: FormErrors;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (onSubmit: (values: T) => void) => (e: React.FormEvent) => void;
  reset: () => void;
  setFieldValue: (field: keyof T, value: any) => void;
  isValid: boolean;
}

export function useForm<T extends Record<string, any>>(
  initialValues: T,
  validate?: (values: T) => FormErrors
): UseFormReturn<T> {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    
    // =========== Clear error when field is changed  ============ //
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = (onSubmit: (values: T) => void) => (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate) {
      const validationErrors = validate(values);
      setErrors(validationErrors);
      
      // ==============  If there are no errors, call onSubmit ========= //
      if (Object.keys(validationErrors).length === 0) {
        onSubmit(values);
      }
    } else {
      onSubmit(values);
    }
  };

  const reset = () => {
    setValues(initialValues);
    setErrors({});
  };

  const setFieldValue = (field: keyof T, value: any) => {
    setValues({ ...values, [field]: value });
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    reset,
    setFieldValue,
    isValid: Object.keys(errors).length === 0,
  };
 }
