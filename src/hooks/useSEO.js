import { useEffect } from 'react';

export default function useSEO(title, description) {
  useEffect(() => {
    if (title) {
      document.title = `${title} | ALMACURA`;
    }
    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      }
    }
  }, [title, description]);
}
