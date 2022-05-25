import { useEffect, useState } from 'react';

/*
  root : default null: 뷰포트
  target : 감지 대상
  onIntersect : 수행 할 인터섹션
  threshold : 교차 감지 비율
  enabled : 동작 여부
*/

interface IProps {
  root?: null;
  rootMargin?: string;
  threshold?: number;
  enabled: boolean;
  onIntersect: IntersectionObserverCallback;
}

const useIntersectionObserver = ({
  root,
  rootMargin = '0px',
  threshold = 0.1,
  onIntersect,
  enabled = true,
}: IProps) => {
  const [target, setTarget] = useState<HTMLElement | null | undefined>(null);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    const observer: IntersectionObserver = new IntersectionObserver(
      onIntersect,
      { root, rootMargin, threshold }
    );

    if (!target) return;

    observer.observe(target);

    return () => observer.unobserve(target);
  }, [enabled, onIntersect, root, rootMargin, target, threshold]);

  return { setTarget };
};

export default useIntersectionObserver;
