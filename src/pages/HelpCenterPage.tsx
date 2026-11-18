import React, { useMemo, useState } from 'react';
import {
  ArrowUpRight,
  Award,
  BookOpen,
  Car,
  ChevronDown,
  Coins,
  ExternalLink,
  Home,
  Mail,
  RefreshCcw,
  Search,
  ShieldAlert,
  ShieldCheck,
  ShoppingBag,
  Trash2,
  Video,
  X,
} from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import {
  HelpActionLink,
  HelpCategory,
  HelpCategoryId,
  HelpFaqItem,
  HelpQuickAction,
  resolveHelpCenterContent,
} from '../data/helpCenterContent';

const categoryIcons: Record<HelpCategoryId, React.ComponentType<{ className?: string }>> = {
  'video-analysis': Video,
  courses: BookOpen,
  'coins-billing': Coins,
  instructors: Award,
  'carpool-buddy': Car,
  'account-safety': ShieldCheck,
};

const quickActionIcons: Record<HelpQuickAction['id'], React.ComponentType<{ className?: string }>> = {
  store: ShoppingBag,
  refunds: RefreshCcw,
  deletion: Trash2,
  safety: ShieldAlert,
};

function matchesQuery(item: HelpFaqItem, normalizedQuery: string): boolean {
  if (!normalizedQuery) return true;
  const haystacks: string[] = [
    item.question,
    ...item.paragraphs,
    ...(item.bullets ?? []),
    ...(item.keywords ?? []),
    item.note ?? '',
  ];
  if (item.table) {
    haystacks.push(...item.table.headers);
    for (const row of item.table.rows) {
      haystacks.push(...row);
    }
  }
  return haystacks.some((text) => text.toLowerCase().includes(normalizedQuery));
}

function ActionAnchor({
  link,
  className,
  children,
}: {
  link: Pick<HelpActionLink, 'href' | 'external'>;
  className: string;
  children: React.ReactNode;
}) {
  if (link.external || link.href.endsWith('.html') || link.href.startsWith('mailto:') || link.href.startsWith('http')) {
    return (
      <a
        href={link.href}
        target={link.external ? '_blank' : undefined}
        rel={link.external ? 'noopener noreferrer' : undefined}
        className={className}
      >
        {children}
      </a>
    );
  }
  return (
    <Link to={link.href} className={className}>
      {children}
    </Link>
  );
}

export default function HelpCenterPage() {
  const { language } = useLanguage();
  const [searchParams] = useSearchParams();
  const content = resolveHelpCenterContent(searchParams.get('lang'), language);

  const [selectedCategory, setSelectedCategory] = useState<'all' | HelpCategoryId>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIds, setOpenIds] = useState<Set<string>>(() => new Set(['va-how-it-works']));

  const normalizedQuery = searchQuery.trim().toLowerCase();
  const isSearching = normalizedQuery.length > 0;

  const filteredCategories = useMemo<HelpCategory[]>(() => {
    const base =
      selectedCategory === 'all'
        ? content.categories
        : content.categories.filter((cat) => cat.id === selectedCategory);

    if (!isSearching) return base;

    return base
      .map((cat) => ({
        ...cat,
        items: cat.items.filter((item) => matchesQuery(item, normalizedQuery)),
      }))
      .filter((cat) => cat.items.length > 0);
  }, [content.categories, isSearching, normalizedQuery, selectedCategory]);

  const visibleItemIds = useMemo(
    () => filteredCategories.flatMap((cat) => cat.items.map((item) => item.id)),
    [filteredCategories],
  );

  const allVisibleExpanded =
    visibleItemIds.length > 0 && visibleItemIds.every((id) => isSearching || openIds.has(id));

  const toggleItem = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const handleToggleExpandAll = () => {
    if (allVisibleExpanded) {
      setOpenIds(new Set());
    } else {
      setOpenIds(new Set(visibleItemIds));
    }
  };

  const clearSearch = () => {
    setSearchQuery('');
    setSelectedCategory('all');
  };

  return (
    <div className="min-h-screen min-h-[100dvh] bg-slate-950 text-slate-100 flex flex-col selection:bg-sky-500 selection:text-slate-950">
      {/* Sticky Header */}
      <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <Link to="/" className="flex items-center gap-2.5 min-w-0 group">
            <img
              src="/logo_icon.png"
              alt="Snow Pro Logo"
              className="h-8 w-8 shrink-0 rounded-xl border border-white/15 object-cover"
            />
            <span className="truncate text-base font-bold tracking-tight text-white group-hover:text-sky-300 transition-colors sm:text-lg">
              {content.headerTitle}
            </span>
          </Link>

          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            <Link
              to="/store"
              className="rounded-lg px-2.5 py-1.5 text-xs font-medium text-slate-300 hover:bg-white/5 hover:text-white transition-colors sm:text-sm"
            >
              {content.navStore}
            </Link>
            <Link
              to="/"
              aria-label={content.navHome}
              className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-slate-300 hover:bg-white/5 hover:text-white transition-colors sm:text-sm"
            >
              <Home className="h-4 w-4 sm:hidden" />
              <span className="hidden sm:inline">{content.navHome}</span>
            </Link>
            <a
              href={`mailto:${content.contactCard.emailAddress}`}
              className="inline-flex items-center gap-1.5 rounded-full bg-sky-500/15 border border-sky-400/30 px-3 py-1.5 text-xs font-semibold text-sky-300 hover:bg-sky-500/25 transition-colors sm:text-sm"
            >
              <Mail className="h-3.5 w-3.5" />
              <span className="hidden xs:inline sm:inline">{content.navContact}</span>
            </a>
          </div>
        </div>
      </header>

      <main lang={content.lang} className="flex-1">
        {/* Hero + Live Search */}
        <section className="relative overflow-hidden border-b border-slate-900 bg-gradient-to-b from-slate-900/60 via-slate-950 to-slate-950 px-4 pt-10 pb-9 sm:px-6 sm:pt-14 sm:pb-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl"
          />
          <div className="relative mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full border border-sky-400/25 bg-sky-500/10 px-3 py-1 text-xs font-semibold tracking-wide text-sky-300">
              {content.badge}
            </span>
            <h1 className="mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-4xl">
              {content.heroTitle}
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
              {content.heroSubtitle}
            </p>

            {/* Search Input */}
            <div className="relative mx-auto mt-6 max-w-xl">
              <Search
                aria-hidden="true"
                className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
              />
              <input
                type="search"
                role="searchbox"
                aria-label={content.searchAriaLabel}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={content.searchPlaceholder}
                className="w-full rounded-2xl border border-slate-800 bg-slate-900/90 py-3.5 pl-11 pr-11 text-sm text-white placeholder-slate-500 shadow-lg shadow-black/25 focus:border-sky-400/60 focus:outline-none focus:ring-2 focus:ring-sky-500/20 sm:text-base"
              />
              {searchQuery && (
                <button
                  type="button"
                  aria-label={content.clearSearchLabel}
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {isSearching && (
              <p className="mt-3 text-xs font-medium text-sky-300" aria-live="polite">
                {content.searchResultsLabel(visibleItemIds.length, searchQuery.trim())}
              </p>
            )}
          </div>
        </section>

        <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-10 space-y-10">
          {/* Quick Self-Service Shortcuts */}
          <section aria-labelledby="quick-actions-heading">
            <h2
              id="quick-actions-heading"
              className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3.5"
            >
              {content.quickActionsTitle}
            </h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {content.quickActions.map((action) => {
                const Icon = quickActionIcons[action.id];
                return (
                  <ActionAnchor
                    key={action.id}
                    link={action}
                    className="group flex flex-col justify-between rounded-2xl border border-slate-800/90 bg-slate-900/60 p-4 hover:border-sky-500/40 hover:bg-slate-900 transition-all"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400 border border-sky-400/20">
                          <Icon className="h-4 w-4" />
                        </span>
                        <ArrowUpRight className="h-4 w-4 text-slate-500 group-hover:text-sky-400 transition-colors" />
                      </div>
                      <h3 className="mt-3 text-sm font-semibold text-white group-hover:text-sky-300 transition-colors">
                        {action.title}
                      </h3>
                      <p className="mt-1 text-xs leading-5 text-slate-400">{action.description}</p>
                    </div>
                  </ActionAnchor>
                );
              })}
            </div>
          </section>

          {/* Category Filter Bar + Expand/Collapse All */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-slate-800/80 pb-4">
            <div
              role="tablist"
              aria-label="Help topic categories"
              className="flex flex-wrap items-center gap-2"
            >
              <button
                type="button"
                onClick={() => setSelectedCategory('all')}
                className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors cursor-pointer sm:text-sm ${
                  selectedCategory === 'all'
                    ? 'bg-sky-500 text-slate-950 shadow-sm shadow-sky-500/25'
                    : 'border border-slate-800 bg-slate-900/80 text-slate-300 hover:border-slate-700 hover:text-white'
                }`}
              >
                {content.allTopicsLabel}
              </button>
              {content.categories.map((cat) => {
                const active = selectedCategory === cat.id;
                return (
                  <button
                    type="button"
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors cursor-pointer sm:text-sm ${
                      active
                        ? 'bg-sky-500 text-slate-950 shadow-sm shadow-sky-500/25'
                        : 'border border-slate-800 bg-slate-900/80 text-slate-300 hover:border-slate-700 hover:text-white'
                    }`}
                  >
                    {cat.shortLabel}
                  </button>
                );
              })}
            </div>

            {visibleItemIds.length > 0 && !isSearching && (
              <button
                type="button"
                onClick={handleToggleExpandAll}
                className="self-start sm:self-auto shrink-0 text-xs font-medium text-sky-400 hover:text-sky-300 underline underline-offset-4 cursor-pointer"
              >
                {allVisibleExpanded ? content.collapseAllLabel : content.expandAllLabel}
              </button>
            )}
          </div>

          {/* Empty Search State */}
          {filteredCategories.length === 0 ? (
            <div
              data-testid="help-search-empty"
              className="rounded-2xl border border-slate-800 bg-slate-900/60 px-6 py-12 text-center"
            >
              <p className="text-base font-semibold text-white">{content.emptySearchTitle}</p>
              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-400">
                {content.emptySearchBody}
              </p>
              <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={clearSearch}
                  className="rounded-xl bg-sky-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-sky-400 transition-colors cursor-pointer"
                >
                  {content.clearSearchLabel}
                </button>
                <a
                  href={`mailto:${content.contactCard.emailAddress}`}
                  className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-medium text-slate-200 hover:border-slate-600 hover:text-white transition-colors"
                >
                  {content.contactCard.emailButtonLabel}
                </a>
              </div>
            </div>
          ) : (
            /* FAQ Category Sections */
            <div className="space-y-8">
              {filteredCategories.map((category) => {
                const CategoryIcon = categoryIcons[category.id];
                return (
                  <section
                    key={category.id}
                    id={category.id}
                    className="rounded-2xl border border-slate-800/90 bg-slate-900/45 p-5 sm:p-7"
                  >
                    <div className="flex items-start gap-3.5 pb-5 border-b border-slate-800/80">
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400 border border-sky-400/20">
                        <CategoryIcon className="h-5 w-5" />
                      </span>
                      <div>
                        <h2 className="text-lg font-bold text-white sm:text-xl">{category.title}</h2>
                        <p className="mt-1 text-xs leading-5 text-slate-400 sm:text-sm">
                          {category.description}
                        </p>
                      </div>
                    </div>

                    <div className="divide-y divide-slate-800/75">
                      {category.items.map((item) => {
                        const isOpen = isSearching || openIds.has(item.id);
                        const panelId = `faq-panel-${item.id}`;
                        return (
                          <div key={item.id} className="py-4 first:pt-5 last:pb-1">
                            <button
                              type="button"
                              aria-expanded={isOpen}
                              aria-controls={panelId}
                              onClick={() => toggleItem(item.id)}
                              className="flex w-full items-start justify-between gap-4 text-left cursor-pointer group"
                            >
                              <span className="text-sm font-semibold leading-6 text-slate-100 group-hover:text-sky-300 transition-colors sm:text-base">
                                {item.question}
                              </span>
                              <ChevronDown
                                aria-hidden="true"
                                className={`mt-1 h-4 w-4 shrink-0 text-slate-400 transition-transform duration-200 ${
                                  isOpen ? 'rotate-180 text-sky-400' : ''
                                }`}
                              />
                            </button>

                            {isOpen && (
                              <div
                                id={panelId}
                                className="mt-3 space-y-3 pr-2 text-sm leading-6 text-slate-300"
                              >
                                {item.paragraphs.map((paragraph, index) => (
                                  <p key={index}>{paragraph}</p>
                                ))}

                                {item.bullets && item.bullets.length > 0 && (
                                  <ul className="list-disc space-y-2 pl-5 text-slate-300 marker:text-sky-400">
                                    {item.bullets.map((bullet, index) => (
                                      <li key={index}>{bullet}</li>
                                    ))}
                                  </ul>
                                )}

                                {item.table && (
                                  <div className="mt-3 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/70">
                                    <table
                                      aria-label={item.table.ariaLabel}
                                      className="w-full min-w-[500px] border-collapse text-left text-xs sm:text-sm"
                                    >
                                      <thead>
                                        <tr className="border-b border-slate-800 bg-slate-900/90 text-slate-300">
                                          {item.table.headers.map((header) => (
                                            <th
                                              key={header}
                                              scope="col"
                                              className="px-3.5 py-2.5 font-semibold"
                                            >
                                              {header}
                                            </th>
                                          ))}
                                        </tr>
                                      </thead>
                                      <tbody className="divide-y divide-slate-800/70">
                                        {item.table.rows.map((row) => (
                                          <tr key={row[0]} className="hover:bg-slate-900/40">
                                            <td className="px-3.5 py-2.5 font-semibold text-white">
                                              {row[0]}
                                            </td>
                                            <td className="px-3.5 py-2.5 text-slate-400">{row[1]}</td>
                                            <td className="px-3.5 py-2.5 font-medium text-sky-300">
                                              {row[2]}
                                            </td>
                                            <td className="px-3.5 py-2.5 text-slate-200">{row[3]}</td>
                                          </tr>
                                        ))}
                                      </tbody>
                                    </table>
                                  </div>
                                )}

                                {item.note && (
                                  <p className="rounded-xl border border-slate-800 bg-slate-950/60 px-3.5 py-2.5 text-xs leading-5 text-slate-400">
                                    {item.note}
                                  </p>
                                )}

                                {item.links && item.links.length > 0 && (
                                  <div className="flex flex-wrap gap-2.5 pt-1">
                                    {item.links.map((link) => (
                                      <ActionAnchor
                                        key={link.href + link.label}
                                        link={link}
                                        className="inline-flex items-center gap-1.5 rounded-lg border border-sky-500/30 bg-sky-500/10 px-3 py-1.5 text-xs font-semibold text-sky-300 hover:bg-sky-500/20 transition-colors"
                                      >
                                        <span>{link.label}</span>
                                        <ExternalLink className="h-3.5 w-3.5" />
                                      </ActionAnchor>
                                    ))}
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </section>
                );
              })}
            </div>
          )}

          {/* Direct Support Card */}
          <section
            data-testid="help-contact-card"
            className="rounded-2xl border border-sky-500/25 bg-gradient-to-br from-slate-900 via-slate-900 to-sky-950/35 p-6 sm:p-8"
          >
            <div className="max-w-3xl">
              <h2 className="text-lg font-bold text-white sm:text-xl">
                {content.contactCard.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                {content.contactCard.description}
              </p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-slate-400">
                {content.contactCard.checklistTitle}
              </p>
              <ul className="mt-2 list-disc space-y-1.5 pl-5 text-xs leading-5 text-slate-300 marker:text-sky-400 sm:text-sm">
                {content.contactCard.checklist.map((entry, idx) => (
                  <li key={idx}>{entry}</li>
                ))}
              </ul>
            </div>

            <p className="mt-5 border-t border-slate-800/80 pt-4 text-xs leading-5 text-slate-400">
              {content.contactCard.emergencyNotice}
            </p>

            <div className="mt-6 flex justify-center">
              <a
                href={`mailto:${content.contactCard.emailAddress}`}
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-sky-500 px-6 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-sky-500/20 hover:bg-sky-400 transition-colors"
              >
                <Mail className="h-4 w-4 shrink-0" />
                <span>{content.contactCard.emailButtonLabel}</span>
              </a>
            </div>
          </section>

          {/* Official Legal & Compliance Links */}
          <section
            aria-labelledby="legal-links-heading"
            className="border-t border-slate-900 pt-6 pb-4"
          >
            <h2
              id="legal-links-heading"
              className="text-xs font-semibold uppercase tracking-wider text-slate-400"
            >
              {content.legalLinksTitle}
            </h2>
            <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2.5 text-sm text-sky-400">
              {content.legalLinks.map((link) => (
                <li key={link.href}>
                  <ActionAnchor link={link} className="hover:text-sky-300 underline underline-offset-4">
                    {link.label}
                  </ActionAnchor>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-slate-500">
              &copy; {new Date().getFullYear()} {content.operatorNotice} ·{' '}
              <a
                href={`mailto:${content.contactCard.emailAddress}`}
                className="text-slate-400 hover:text-slate-200 underline underline-offset-2"
              >
                {content.contactCard.emailAddress}
              </a>
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
