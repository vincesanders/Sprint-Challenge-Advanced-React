import useLocalStorage from './useLocalStorage';
import { useEffect } from 'react';

export default initialValue => {
    const [darkMode, setDarkMode] = useLocalStorage('dark_mode', initialValue);

    useEffect(() => {
        if (darkMode) {
            document.querySelector('body').classList.add('dark-mode');
        } else {
            document.querySelector('body').classList.remove('dark-mode');
        }
    },[darkMode]);

    return [darkMode, setDarkMode];
}