import { useEffect, useState } from 'react';

export default function CurrentDate() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000 * 60); // atualiza a cada minuto
    return () => clearInterval(timer);
  }, []);

  function formatDate(date: Date) {
    return date.toLocaleDateString('pt-BR', {
      weekday: 'long',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  }

  const formatted = formatDate(now)
      .replace(/^\w/, c => c.toUpperCase());

  return <span>{formatted}</span>;
}
