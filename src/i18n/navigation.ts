import { createNavigation } from 'next-intl/navigation';
import { routing } from './routing';

// Locale-aware Link and useRouter hooks
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
