'use client';

import { useState, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingProgress() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // When the path or search changes, it means navigation has "completed" (or the next page is rendering)
    // We stop the loading bar
    setLoading(false);
    
    // Cleanup if navigation starts? 
    // In App Router, we don't have a reliable "start" event in the client easily.
    // However, we can listen to clicks on the body to "guess" navigation start
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a');
      if (target && target.href && !target.href.startsWith('#') && !target.target && target.origin === window.location.origin) {
         if (target.href !== window.location.href) {
            setLoading(true);
         }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, [pathname, searchParams]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ width: 0, opacity: 1 }}
          animate={{ width: '70%', opacity: 1 }}
          exit={{ width: '100%', opacity: 0 }}
          transition={{ 
            width: { duration: 0.8, ease: "easeOut" },
            opacity: { delay: 0.2, duration: 0.3 }
          }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            height: '3px',
            background: 'linear-gradient(90deg, var(--accent) 0%, #5ac8fa 100%)',
            zIndex: 9999,
          }}
        />
      )}
    </AnimatePresence>
  );
}
