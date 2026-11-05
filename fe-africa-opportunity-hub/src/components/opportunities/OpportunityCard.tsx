
import { Link } from 'react-router';
import {
  ArrowRight,
  CalendarDays,
  MapPin,
  Building2,
} from 'lucide-react';

import type { Opportunity } from '../../types/opportunity';

import './OpportunityCard.css';

interface OpportunityCardProps {
  opportunity: Opportunity;
}

function OpportunityCard({ opportunity }: OpportunityCardProps) {
  const formattedDeadline = opportunity.deadline
    ? new Intl.DateTimeFormat('en', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      }).format(new Date(`${opportunity.deadline}T00:00:00`))
    : 'Not specified';

  return (
    <article className="opportunity-card">
      <div className="opportunity-card__top">
        <span className="opportunity-card__category">
          {opportunity.category}
        </span>

        {opportunity.featured && (
          <span className="opportunity-card__featured">
            Featured
          </span>
        )}
      </div>

      <h3 className="opportunity-card__title">
        <Link to={`/opportunities/${opportunity.id}`}>
          {opportunity.title}
        </Link>
      </h3>

      <div className="opportunity-card__organization">
        <Building2 size={16} aria-hidden="true" />
        <span>{opportunity.organization}</span>
      </div>

      <p className="opportunity-card__description">
        {opportunity.description}
      </p>

      <div className="opportunity-card__meta">
        <div>
          <MapPin size={16} aria-hidden="true" />
          <span>{opportunity.location}</span>
        </div>

        <div>
          <CalendarDays size={16} aria-hidden="true" />
          <span>Deadline: {formattedDeadline}</span>
        </div>
      </div>

      <div className="opportunity-card__footer">
        <Link
          to={`/opportunities/${opportunity.id}`}
          className="opportunity-card__details-link"
        >
          View details
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

export default OpportunityCard;
