'use client';

import { useState } from 'react';
import BadDashboard from '@/components/BadDashboard';
import GoodDashboard from '@/components/GoodDashboard';

export default function Home() {
  const [isGoodVersion, setIsGoodVersion] = useState(false);

  return (
    <div className="min-h-screen transition-all duration-1000">
      {isGoodVersion ? (
        <GoodDashboard onToggleVersion={() => setIsGoodVersion(false)} />
      ) : (
        <BadDashboard onToggleVersion={() => setIsGoodVersion(true)} />
      )}
    </div>
  );
}
