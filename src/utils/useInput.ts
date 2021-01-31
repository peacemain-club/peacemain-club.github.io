import {useState, useCallback} from 'react';

function useInput(initialForm: any): [any, (e: any) => void, () => void] {
  const [form, setForm] = useState(initialForm);

  const onChange = useCallback((e) => {
    const {name, value} = e.target;
    setForm((form: any) => ({...form, [name]: value}));
  }, []);

  const reset = useCallback(() => setForm(initialForm), []);

  return [form, onChange, reset];
}

export default useInput;
