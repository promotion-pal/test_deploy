'use client';

import { addressService } from '@/features/api';
import type { AddressHint } from '@/features/api/site/address';
import { useEffect, useRef, useState } from 'react';

export function useAddressHints(initialPrompt: string = '') {
  const [prompt, setPrompt] = useState(initialPrompt);
  const [hints, setHints] = useState<AddressHint[]>([]);
  const [selectedHint, setSelectedHint] = useState<AddressHint | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const selectHint = (hintValue: string) => {
    const selected = hints.find((hint) => hint.value === hintValue);
    if (selected) {
      setSelectedHint(selected);
      setPrompt(hintValue);
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    if (selectedHint && selectedHint.value === prompt) {
      setIsLoading(false);
      setIsOpen(false);
      return;
    }

    if (!prompt.trim()) {
      setIsLoading(false);
      setIsOpen(false);
      setSelectedHint(null);
      setHints([]);
      return;
    }

    setHints([]);
    setSelectedHint(null);
    setIsLoading(true);
    setIsOpen(true);

    timeoutRef.current = setTimeout(async () => {
      try {
        const data = await addressService.getHints(prompt);
        setHints(data);
        setIsOpen(data.length > 0);
      } finally {
        setIsLoading(false);
      }
    }, 2000);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [prompt]);

  return {
    prompt,
    setPrompt,
    hints,
    selectHint,
    isLoading,
    isOpen,
    setIsOpen,
    selectedHint,
  };
}
