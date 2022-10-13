import { PropsWithChildren, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

export default function Modal({ children }: PropsWithChildren) {
  const divElRef = useRef<HTMLDivElement>(document.createElement('div'));

  useEffect(() => {
    const divEl = divElRef.current;
    const modalElement = document.getElementById('modal-root');
    modalElement?.appendChild(divEl);
    return () => {
      modalElement?.removeChild(divEl);
    };
  }, []);
  return ReactDOM.createPortal(children, divElRef.current);
}
