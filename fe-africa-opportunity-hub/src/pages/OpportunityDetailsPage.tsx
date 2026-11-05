
import { Link, useParams } from 'react-router';
import {
  ArrowLeft,
  ArrowUpRight,
  CalendarDays,
  MapPin,
  Globe,
  BriefcaseBusiness,
  Building2,
} from 'lucide-react';

import { opportunities } from '../data/opportunities';
import type { EligibilityScope } from '../types/opportunity';

import './OpportunityDetailsPage.css';

const eligibilityLabels: Record<EligibilityScope, string> = {
  COUNTRY_SPECIFIC: 'Specific country',
  AFRICA_WIDE: 'Africa-wide',
  WORLDWIDE: 'Worldwide',
};

function formatDeadline(deadline: string): string {
  if (!deadline) return 'Not specified';

  const date = new Date(`${deadline}T00:00:00`);

  if (Number.isNaN(date.getTime())) {
    return deadline;
  }

  return new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
}

function OpportunityDetailsPage() {
  const { id } = useParams<{ id: string }>();

  const opportunity = opportunities.find(
    (item) => item.id === Number(id),
  );

  if (!opportunity) {
    return (
      <section className="opportunity-details">
        <div className="container">
          <div className="opportunity-details__not-found">
            <h1>Opportunity not found</h1>
            <p>
              We couldn't find the opportunity you're looking for.
              It may have been removed or the link may be incorrect.
            </p>
            <Link
              to="/opportunities"
              className="btn btn-primary"
            >
              Browse opportunities
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="opportunity-details">
      <div className="container">
        <nav
          className="opportunity-details__breadcrumb"
          aria-label="Breadcrumb"
        >
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/opportunities">Opportunities</Link>
          <span>/</span>
          <span className="opportunity-details__breadcrumb-current">
            {opportunity.title}
          </span>
        </nav>

        <Link
          to="/opportunities"
          className="opportunity-details__back"
        >
          <ArrowLeft size={17} />
          Back to opportunities
        </Link>

        <div className="opportunity-details__layout">
          <main className="opportunity-details__main">
            <header className="opportunity-details__header">
              <div className="opportunity-details__badges">
                <span className="opportunity-details__category">
                  {opportunity.category}
                </span>

                {opportunity.featured && (
                  <span className="opportunity-details__featured">
                    Featured opportunity
                  </span>
                )}
              </div>

              <h1>{opportunity.title}</h1>

              <div className="opportunity-details__organization">
                <Building2 size={19} />
                <span>{opportunity.organization}</span>
              </div>
            </header>

            <section className="opportunity-details__section">
              <h2>About this opportunity</h2>
              <p className="opportunity-details__description">
                {opportunity.description}
              </p>
            </section>

            <section className="opportunity-details__section">
              <h2>Opportunity overview</h2>

              <div className="opportunity-details__overview">
                <div className="opportunity-details__overview-item">
                  <Globe size={20} />
                  <div>
                    <span>Eligibility</span>
                    <strong>
                      {eligibilityLabels[opportunity.eligibilityScope]}
                    </strong>
                  </div>
                </div>

                <div className="opportunity-details__overview-item">
                  <MapPin size={20} />
                  <div>
                    <span>Location</span>
                    <strong>{opportunity.location}</strong>
                  </div>
                </div>

                <div className="opportunity-details__overview-item">
                  <CalendarDays size={20} />
                  <div>
                    <span>Application deadline</span>
                    <strong>
                      {formatDeadline(opportunity.deadline)}
                    </strong>
                  </div>
                </div>

                <div className="opportunity-details__overview-item">
                  <BriefcaseBusiness size={20} />
                  <div>
                    <span>Category</span>
                    <strong>{opportunity.category}</strong>
                  </div>
                </div>
              </div>
            </section>

            <div className="opportunity-details__apply-mobile">
              <a
                href={opportunity.applicationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Apply for this opportunity
                <ArrowUpRight size={18} />
              </a>
              <p>You will be redirected to the application website.</p>
            </div>
          </main>

          <aside className="opportunity-details__sidebar">
            <div className="opportunity-details__apply-card">
              <span className="opportunity-details__sidebar-label">
                READY TO TAKE THE NEXT STEP?
              </span>

              <h2>Interested in this opportunity?</h2>

              <p>
                Review the details, check your eligibility, and
                continue to the official application website.
              </p>

              <div className="opportunity-details__deadline">
                <CalendarDays size={19} />
                <div>
                  <span>Application deadline</span>
                  <strong>
                    {formatDeadline(opportunity.deadline)}
                  </strong>
                </div>
              </div>

              <a
                href={opportunity.applicationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary opportunity-details__apply-button"
              >
                Apply now
                <ArrowUpRight size={18} />
              </a>

              <p className="opportunity-details__external-note">
                <Globe size={14} />
                Opens an external website
              </p>
            </div>

            <div className="opportunity-details__help-card">
              <h3>Explore more opportunities</h3>
              <p>
                Discover other jobs, scholarships, internships,
                fellowships, and grants.
              </p>
              <Link to="/opportunities">
                Browse all opportunities
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default OpportunityDetailsPage;
