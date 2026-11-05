
import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router';
import {
  Search,
  SlidersHorizontal,
  X,
  ChevronLeft,
  ChevronRight,
  BriefcaseBusiness,
} from 'lucide-react';

import OpportunityCard from '../components/opportunities/OpportunityCard';
import { opportunities } from '../data/opportunities';
import type {
  Opportunity,
  OpportunityCategory,
  EligibilityScope,
} from '../types/opportunity';

import './OpportunitiesPage.css';

const categories: OpportunityCategory[] = [
  'Jobs',
  'Scholarships',
  'Internships',
  'Fellowships',
  'Grants',
];

const PAGE_SIZE = 4;

type SortOption = 'deadline' | 'title-asc' | 'title-desc';

function OpportunitiesPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchTerm, setSearchTerm] = useState(
    searchParams.get('q') ?? '',
  );

  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get('category') ?? 'All',
  );

  const [selectedScope, setSelectedScope] = useState(
    searchParams.get('scope') ?? 'All',
  );

  const [sortBy, setSortBy] = useState<SortOption>('deadline');
  const [currentPage, setCurrentPage] = useState(1);

  function updateFilters(
    query: string,
    category: string,
    scope: string,
  ) {
    const params = new URLSearchParams();

    if (query.trim()) {
      params.set('q', query.trim());
    }

    if (category !== 'All') {
      params.set('category', category);
    }

    if (scope !== 'All') {
      params.set('scope', scope);
    }

    setSearchParams(params, { replace: true });
    setCurrentPage(1);
  }

  function handleSearchChange(value: string) {
    setSearchTerm(value);
    updateFilters(value, selectedCategory, selectedScope);
  }

  function handleCategoryChange(value: string) {
    setSelectedCategory(value);
    updateFilters(searchTerm, value, selectedScope);
  }

  function handleScopeChange(value: string) {
    setSelectedScope(value);
    updateFilters(searchTerm, selectedCategory, value);
  }

  function clearFilters() {
    setSearchTerm('');
    setSelectedCategory('All');
    setSelectedScope('All');
    setSortBy('deadline');
    setCurrentPage(1);
    setSearchParams({}, { replace: true });
  }

  const filteredOpportunities = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    const results = (opportunities as Opportunity[]).filter(
      (opportunity) => {
        const matchesSearch =
          !query ||
          opportunity.title.toLowerCase().includes(query) ||
          opportunity.organization.toLowerCase().includes(query) ||
          opportunity.description.toLowerCase().includes(query);

        const matchesCategory =
          selectedCategory === 'All' ||
          opportunity.category === selectedCategory;

        const matchesScope =
          selectedScope === 'All' ||
          opportunity.eligibilityScope ===
            (selectedScope as EligibilityScope);

        return matchesSearch && matchesCategory && matchesScope;
      },
    );

    return results.sort((a, b) => {
      if (sortBy === 'title-asc') {
        return a.title.localeCompare(b.title);
      }

      if (sortBy === 'title-desc') {
        return b.title.localeCompare(a.title);
      }

      // Opportunities without a deadline appear last.
      if (!a.deadline) return 1;
      if (!b.deadline) return -1;

      return (
        new Date(a.deadline).getTime() -
        new Date(b.deadline).getTime()
      );
    });
  }, [searchTerm, selectedCategory, selectedScope, sortBy]);

  const totalPages = Math.ceil(
    filteredOpportunities.length / PAGE_SIZE,
  );

  const safeCurrentPage = Math.min(
    currentPage,
    Math.max(totalPages, 1),
  );

  const startIndex = (safeCurrentPage - 1) * PAGE_SIZE;

  const paginatedOpportunities = filteredOpportunities.slice(
    startIndex,
    startIndex + PAGE_SIZE,
  );

  const hasActiveFilters =
    searchTerm.trim() !== '' ||
    selectedCategory !== 'All' ||
    selectedScope !== 'All';

  return (
    <div className="opportunities-page">
      <section className="opportunities-page__intro">
        <div className="container">
          <div className="opportunities-page__eyebrow">
            <BriefcaseBusiness size={17} />
            <span>YOUR NEXT OPPORTUNITY STARTS HERE</span>
          </div>

          <h1>Explore Opportunities</h1>

          <p>
            Discover opportunities to learn, grow, and build your
            future across Africa and beyond.
          </p>
        </div>
      </section>

      <section className="container opportunities-page__content">
        <div className="opportunities-toolbar">
          <div className="opportunities-search">
            <Search size={20} aria-hidden="true" />

            <input
              type="search"
              value={searchTerm}
              onChange={(event) =>
                handleSearchChange(event.target.value)
              }
              placeholder="Search by title, organization, or keyword"
              aria-label="Search opportunities"
            />

            {searchTerm && (
              <button
                type="button"
                className="opportunities-search__clear"
                onClick={() => handleSearchChange('')}
                aria-label="Clear search"
              >
                <X size={18} />
              </button>
            )}
          </div>

          <div className="opportunities-sort">
            <label htmlFor="sort-opportunities">Sort by</label>

            <select
              id="sort-opportunities"
              value={sortBy}
              onChange={(event) =>
                setSortBy(event.target.value as SortOption)
              }
            >
              <option value="deadline">Deadline: soonest</option>
              <option value="title-asc">Title: A–Z</option>
              <option value="title-desc">Title: Z–A</option>
            </select>
          </div>
        </div>

        <div className="opportunities-results-layout">
          <aside className="opportunities-filters">
            <div className="opportunities-filters__heading">
              <div>
                <SlidersHorizontal size={19} />
                <h2>Filters</h2>
              </div>

              {hasActiveFilters && (
                <button type="button" onClick={clearFilters}>
                  Clear
                </button>
              )}
            </div>

            <div className="opportunities-filter-group">
              <label htmlFor="filter-category">Category</label>

              <select
                id="filter-category"
                value={selectedCategory}
                onChange={(event) =>
                  handleCategoryChange(event.target.value)
                }
              >
                <option value="All">All categories</option>

                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div className="opportunities-filter-group">
              <label htmlFor="filter-scope">Eligibility</label>

              <select
                id="filter-scope"
                value={selectedScope}
                onChange={(event) =>
                  handleScopeChange(event.target.value)
                }
              >
                <option value="All">All eligibility scopes</option>
                <option value="COUNTRY_SPECIFIC">
                  Specific country
                </option>
                <option value="AFRICA_WIDE">Africa-wide</option>
                <option value="WORLDWIDE">Worldwide</option>
              </select>
            </div>

            <div className="opportunities-filters__note">
              <p>
                <strong>Tip:</strong> Combine search and filters to
                narrow down the opportunities most relevant to you.
              </p>
            </div>
          </aside>

          <div className="opportunities-results">
            <div className="opportunities-results__heading">
              <div>
                <h2>
                  {selectedCategory === 'All'
                    ? 'All opportunities'
                    : selectedCategory}
                </h2>

                <p>
                  {filteredOpportunities.length}{' '}
                  {filteredOpportunities.length === 1
                    ? 'opportunity'
                    : 'opportunities'}{' '}
                  found
                </p>
              </div>
            </div>

            {paginatedOpportunities.length > 0 ? (
              <div className="opportunities-grid">
                {paginatedOpportunities.map((opportunity) => (
                  <OpportunityCard
                    key={opportunity.id}
                    opportunity={opportunity}
                  />
                ))}
              </div>
            ) : (
              <div className="opportunities-empty">
                <div className="opportunities-empty__icon">
                  <Search size={28} />
                </div>

                <h3>No opportunities found</h3>

                <p>
                  We couldn't find opportunities matching your
                  search and filters. Try different keywords or
                  remove some filters.
                </p>

                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={clearFilters}
                >
                  Clear all filters
                </button>
              </div>
            )}

            {totalPages > 1 && (
              <nav
                className="opportunities-pagination"
                aria-label="Opportunity results pages"
              >
                <button
                  type="button"
                  className="opportunities-pagination__button"
                  disabled={safeCurrentPage === 1}
                  onClick={() =>
                    setCurrentPage((page) => page - 1)
                  }
                  aria-label="Previous page"
                >
                  <ChevronLeft size={18} />
                  <span>Previous</span>
                </button>

                <div className="opportunities-pagination__pages">
                  {Array.from(
                    { length: totalPages },
                    (_, index) => index + 1,
                  ).map((page) => (
                    <button
                      type="button"
                      key={page}
                      className={
                        page === safeCurrentPage
                          ? 'opportunities-pagination__page is-active'
                          : 'opportunities-pagination__page'
                      }
                      aria-current={
                        page === safeCurrentPage ? 'page' : undefined
                      }
                      onClick={() => setCurrentPage(page)}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  className="opportunities-pagination__button"
                  disabled={safeCurrentPage === totalPages}
                  onClick={() =>
                    setCurrentPage((page) => page + 1)
                  }
                  aria-label="Next page"
                >
                  <span>Next</span>
                  <ChevronRight size={18} />
                </button>
              </nav>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default OpportunitiesPage;
