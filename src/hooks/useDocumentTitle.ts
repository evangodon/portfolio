import { useEffect } from 'preact/hooks';

export const useDocumentTitle = (title: string) => {
    useEffect(() => {
        document.title = title;
    }, []);
};
