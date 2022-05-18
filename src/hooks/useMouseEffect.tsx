import { useEffect, useRef } from 'react';

export const useMouseEffect = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const state: any = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined,
    };

    let el = ref && ref.current;

    const handleMouseMove = (e: any) => {
      if (!el) {
        return;
      }

      if (!state.rect) {
        state.rect = el.getBoundingClientRect();
      }
      state.mouseX = e.clientX;
      state.mouseY = e.clientY;
      const px: any = (state.mouseX - state.rect.left) / state.rect.width;
      const py: any = (state.mouseY - state.rect.top) / state.rect.height;

      el.style.setProperty('--px', px);
      el.style.setProperty('--py', py);
    };

    el.addEventListener('mousemove', handleMouseMove);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return ref;
};
